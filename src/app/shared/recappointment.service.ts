import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Recappointment } from './recappointment';

@Injectable({
  providedIn: 'root'
})
export class RecappointmentService 
{
  recappointments : Recappointment[];
  formData : Recappointment = new Recappointment();

  constructor(private httpClient: HttpClient) { }

  //get patients
  GetAllAppoinments(): Observable<any>
  {
    return this.httpClient.get(environment.apiUrl + '/api/appointments');
  }

  bindListAppointments()
  {
    this.httpClient.get(environment.apiUrl + '/api/appointments')
    .toPromise().then(
      response=>{
        console.log("from service");
        console.log(response);
        this.recappointments = response as Recappointment[];
      }
    );
  }

  //delete patients
  DeleteAppoinment(AppointmentId : number)
  {
    return this.httpClient.delete(environment.apiUrl + "/api/appointments/" +AppointmentId);
  }
}
