import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';
import { PatientService } from 'src/app/shared/patient.service';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.scss']
})
export class PatientListComponent implements OnInit 
{

  page : number =1;
  filter : string;
  constructor(public patientService : PatientService, private authService: AuthService,
    private router: Router) { }

  ngOnInit(): void 
  {
    console.log("Life cycle hook initiated");

    //calling the method to get patients
    this.patientService.bindListPatients();
  }



  //to update a patient detail
  updatePatient(PatientId : number)
  {
    console.log(PatientId);
    this.router.navigate(['patientregistrartion',PatientId])
  }


  //to delete a patient record
  DeletePatient(patientId : number)
  {
    if(confirm('Are you sure to DELETE the record ?'))
    {
        this.patientService.DeletePatient(patientId).subscribe(
          response =>
          {
            this.patientService.bindListPatients();
          },
          error=>
          {
            console.log(error);
          }
        );
    }
  }

}
