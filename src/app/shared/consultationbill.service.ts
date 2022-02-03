import { Injectable } from '@angular/core';
import { Appointment } from './appointment';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
<<<<<<< HEAD:src/app/shared/consultationbill.service.ts
export class ConsultationbillService {
=======
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


>>>>>>> b3810d5998a83f020a52372aeaa7f34cd97277b4:src/app/shared/appointment.service.ts

}
