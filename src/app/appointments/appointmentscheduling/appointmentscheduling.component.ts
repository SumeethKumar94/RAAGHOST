import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Patient } from 'src/app/shared/patient';
import { PatientService } from 'src/app/shared/patient.service';

@Component({
  selector: 'app-appointmentscheduling',
  templateUrl: './appointmentscheduling.component.html',
  styleUrls: ['./appointmentscheduling.component.scss']
})
export class AppointmentschedulingComponent implements OnInit {
  PatientId: number;
  loggedUser: string;
  filter: string;
  

  constructor(public patientService: PatientService,
    private route: ActivatedRoute,
    private toastrService: ToastrService,
    private router: Router) { }

  ngOnInit(): void {

    this.patientService.bindListDepartments();

    this.patientService.bindListDoctors();

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
    let PatientId = this.patientService.formData.PatientId;
    let AppoinmentId = this.patientService.formData3.AppoinmentId;


  }
}

