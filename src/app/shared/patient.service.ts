import { Injectable } from '@angular/core';
import { Patient } from './patient';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PatientService 
{

  patients : Patient[];
  formData : Patient = new Patient();

  constructor(private httpClient: HttpClient) { }

  //get patients
  GetAllPatients(): Observable<any>
  {
    return this.httpClient.get(environment.apiUrl + '/api/patients');
  }

  bindListPatients()
  {
    this.httpClient.get(environment.apiUrl + '/api/patients')
    .toPromise().then(
      response=>{
        console.log("from service");
        console.log(response);
        this.patients = response as Patient[];
      }
    );
  }

  //add patient

  

  //delete patients
  DeletePatient(PatientId : number)
  {
    return this.httpClient.delete(environment.apiUrl + "/api/patients/" +PatientId);
  }

}
