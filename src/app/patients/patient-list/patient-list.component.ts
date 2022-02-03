import { Component, OnInit } from '@angular/core';
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
  constructor(public patientService : PatientService) { }

  ngOnInit(): void 
  {
    console.log("Life cycle hook initiated");

    //calling the method to get patients
    this.patientService.bindListPatients();
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

  //to update a patient detail
  updatePatient(patientId : number)
  {
    console.log(patientId);
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
