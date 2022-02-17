import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Patient } from 'src/app/shared/patient';
import { PatientService } from 'src/app/shared/patient.service';
import { RecappointmentService } from 'src/app/shared/recappointment.service';

@Component({
  selector: 'app-appointmentscheduling',
  templateUrl: './appointmentscheduling.component.html',
  styleUrls: ['./appointmentscheduling.component.scss']
})
export class AppointmentschedulingComponent implements OnInit {
  PatientId: number;
  loggedUser: string;
  filter: string;

  constructor(public recappointmentService: RecappointmentService,public patientService: PatientService,
    private route: ActivatedRoute,
    private toastrService: ToastrService,
    private router: Router) { }

  ngOnInit(): void {

    this.recappointmentService.bindListDepartments();

    this.recappointmentService.bindListDoctors();

  }


  //get all patients
  GetAllPatients()
  {
    this.patientService.GetAllPatients().subscribe(
      response => {
        console.log('Retreiving from list');
        console.log(response);

      },
      error=>{
        console.log('Error Occured');
      }
    );
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
    let AppoinmentId = this.recappointmentService.formData.AppoinmentId;
    //call insert or update method
    if (AppoinmentId == 0 || AppoinmentId == null) {
      //call insert
      this.insertAppointmentRecord(form);
    }
    else {

    }
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
      this.recappointmentService.insertAppointment().subscribe
        (
          (result) => {
            console.log(result);
            //call reset form
            this.resetForm(form);
            this.toastrService.success('New Appointment Scheduled successfully', 'CMSApp v2o22');
          },
          (error) => {
            console.log(error);
          }
        );
    }
}

