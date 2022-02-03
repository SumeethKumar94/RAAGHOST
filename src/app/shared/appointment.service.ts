import { Injectable } from '@angular/core';
import { Appointment } from './appointment';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  appointment:Appointment[];
  prescription:Appointment[];
  
  formData:Appointment= new Appointment();
  constructor(private httpClient:HttpClient) { }
  bindListAppointments(){

    this.httpClient.get(environment.apiUrl + 'api/doctors/getallappoinment')

    .toPromise().then(

      response=>{

        console.log("from service");

        console.log(response);

        this.appointment = response as Appointment[];
       
        
      }

    );
    
  }
  

  PrescriptionAppointments(){

    this.httpClient.get(environment.apiUrl + 'api/doctors/getallmedicine')

    .toPromise().then(

      response=>{

        console.log("from service");

        console.log(response);

        this.prescription = response as Appointment[];
       
        
      }

    );
    
  }
  deletePrescription(id:number){
    return this.httpClient.delete(environment.apiUrl + "/api/doctors/prescribedmedicine/"+id);
  }



}
