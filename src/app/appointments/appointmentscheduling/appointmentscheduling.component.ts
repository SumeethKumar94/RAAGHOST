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
    let CBillId = this.recappointmentService.formData.CBillId;
    let AppoinmentId = this.recappointmentService.formData.AppoinmentId;
    let TokenNo = this.recappointmentService.formData.TokenNo;


  }
}

