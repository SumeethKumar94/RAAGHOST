import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Patient } from 'src/app/shared/patient';
import { PatientService } from 'src/app/shared/patient.service';
import { Recappointment } from 'src/app/shared/recappointment';
import { RecappointmentService } from 'src/app/shared/recappointment.service';

@Component({
  selector: 'app-appointmentscheduling',
  templateUrl: './appointmentscheduling.component.html',
  styleUrls: ['./appointmentscheduling.component.scss']
})
export class AppointmentschedulingComponent implements OnInit {



  PatientId: number;
  loggedUser: string;
  AppId: number;
  filter: string;
  filters: string;
  PhoneNumber: string;
  loggedUserdata: string;
  DepId: number;


  TokenObj: {} = { TokenNo: "", TokenDate: "", AppointmentId: "", DoctorId: "" };

  BillObj: {} = { CBillId: "", AppointmentId: "", EmployeeId: "", ConsultationFee: "", UpdatedDate: "" }

  constructor(public recappointmentService: RecappointmentService, public patientService: PatientService,
    private route: ActivatedRoute,
    private toastrService: ToastrService,
    private router: Router) { }

  ngOnInit(): void {

    this.loggedUserdata = localStorage.getItem("EMPLOYEEID");

    this.recappointmentService.bindListDepartments();
    this.DepId = this.route.snapshot.params[' DepId'];
    this.recappointmentService.bindListDoctor(this.recappointmentService.formData.DepId);
  }


  //get all patients
  GetAllPatients() {
    this.patientService.GetAllPatients().subscribe(
      response => {
        console.log('Retreiving from list');
        console.log(response);

      },
      error => {
        console.log('Error Occured');
      }
    );
  }

  getDetail() {
    const searchvalues = document.getElementById("PhoneNumber") as HTMLInputElement;
    var PhoneNumber = String(searchvalues.value);
    console.log("Seaching Details of Patient :");
    this.patientService.bindListPatientbyphone(PhoneNumber);
  }

  getDetails() {
    const searchvalue = document.getElementById("PatientId") as HTMLInputElement;
    var PatientId = Number(searchvalue.value);
    console.log("Seaching Details of Patient :");
    this.patientService.bindListPatient(PatientId);
  }

  //submit form
  onSubmit(form: NgForm) {
    console.log(form.value);
    let AppointmentId = this.recappointmentService.formData.AppointmentId;

    //call insert or update method
    if (AppointmentId == 0 || AppointmentId == null) {
      //call insert
      this.insertAppointmentRecord(form);
    }
    else { }
  }


  //clear all contents after submit  --initialization
  resetForm(form?: NgForm) {
    if (form != null) {
      form.resetForm();
    }
  }

  //insert method
  insertAppointmentRecord(form?: NgForm) {
    console.log("Inserting a record..");
    this.recappointmentService.insertAppointment(form.value).subscribe
      (
        (result) => {
          console.log(result);
          this.AppId = result;

          this.TokenObj = {
            AppointmentId: Number(this.AppId), TokenNo: this.recappointmentService.formData.TokenNo,
            TokenDate: this.recappointmentService.formData.TokenDate,
            DoctorId: this.recappointmentService.formData.DoctorId
          }
          this.insertTokenRecord(this.TokenObj);

          this.BillObj = {
            AppointmentId: Number(this.AppId), CBillId: this.recappointmentService.formData.CBillId, ConsultationFee: this.recappointmentService.formData.ConsultationFee
            , UpdatedDate: this.recappointmentService.formData.UpdatedDate, EmployeeId: this.recappointmentService.formData.EmployeeId
          }

          this.insertBillRecord(this.BillObj);


          if (confirm('Do you want to SCHEDULE Appointment and GENERATE the Bill ?')) {
            setTimeout(() => {
              this.generateBill();
            }, 2000);
          }
        },
        (error) => {
          console.log(error);
        }
      );
  }


  //insert method
  insertTokenRecord(obj: any) {
    console.log("Inserting a record..");
    this.recappointmentService.insertToken(obj).subscribe
      (
        (result1) => {
          console.log(result1);
        },
        (error) => {
          console.log(error);
        }
      );
  }

  //insert method
  insertBillRecord(obj: any) {
    console.log("Inserting a record..");
    this.recappointmentService.insertConsultationBillDetails(obj).subscribe
      (
        (result1) => {
          console.log(result1);
          this.toastrService.success('Generating Bill...', 'CMSApp v2o22');
          this.toastrService.success('Appointment Scheduled Successfully', 'CMSApp v2o22');

        },
        (error) => {
          console.log(error);
        }
      );
  }

  generateBill() {
    this.router.navigate(['consultation-bill', this.AppId]);
  }

  onCodeChange($event) {
    this.recappointmentService.formData.DepId = $event.target.value;
    this.recappointmentService.bindListDoctor(this.recappointmentService.formData.DepId);
  }


  getToday(): string {

    return new Date().toISOString().split('T')[0]

  }
}

