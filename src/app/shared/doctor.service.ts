import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Doctorappointment } from './doctorappointment';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  appointment:Doctorappointment[];
  prescription:Doctorappointment[];
  

  formData:Doctorappointment= new Doctorappointment();

  constructor(private httpClient:HttpClient) { }
  bindListAppointments(){

    this.httpClient.get(environment.apiUrl + 'api/doctors/getallappoinment')

    .toPromise().then(

      response=>{

        console.log("from service");

        console.log(response);

        this.appointment = response as Doctorappointment[];
       
        
      }

    );
    
  }
  
  PrescriptionAppointments(){

    this.httpClient.get(environment.apiUrl + 'api/doctors/getallmedicine')

    .toPromise().then(

      response=>{

        console.log("from service");

        console.log(response);

        this.prescription = response as Doctorappointment[];
       
        
      }

    );
    
  }
  deletePrescription(id:number){
    return this.httpClient.delete(environment.apiUrl + "/api/doctors/prescribedmedicine/"+id);
  }



}