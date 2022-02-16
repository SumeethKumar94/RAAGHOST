import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Doctorappointment } from './doctorappointment';
import { Medicine } from './medicine';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  appointment:Doctorappointment[];
  prescription:Doctorappointment[];
  
  medicine:Doctorappointment[];
  test: Doctorappointment[];
  unit: Doctorappointment[];

  dosage:Doctorappointment[];
  formData:Doctorappointment= new Doctorappointment();

  constructor(private httpClient:HttpClient) { }
  bindListAppointments(){

    this.httpClient.get(environment.apiUrl + '/api/doctors/getallappoinment')
  
    .toPromise().then(

      response=>{

        console.log("from service");

        console.log(response);

        this.appointment = response as Doctorappointment[];
       
        
      }

    );
    
  }


  bindListMedicine(){

    this.httpClient.get(environment.apiUrl + '/api/medicines')
  
    .toPromise().then(

      response=>{

        console.log("from service");

        console.log(response);

        this.prescription = response as Doctorappointment[];
       
        
      }

    );
    
  }
  
  bindListTest(){

    this.httpClient.get(environment.apiUrl + '/api/doctors/gettestname')
  
    .toPromise().then(

      response=>{

        console.log("from service");

        console.log(response);

        this.test = response as Doctorappointment[];
       
        
      }

    );
    
  }
  
  bindListUnit(){

    this.httpClient.get(environment.apiUrl + '/api/doctors/getunit')
  
    .toPromise().then(

      response=>{

        console.log("from service");

        console.log(response);

        this.unit = response as Doctorappointment[];
       
        
      }

    );
    
  }
  

  
  bindListDosage(){

    this.httpClient.get(environment.apiUrl + '/api/doctors/getdosage')
  
    .toPromise().then(

      response=>{

        console.log("from service");

        console.log(response);

        this.dosage = response as Doctorappointment[];
       
        
      }

    );
    
  }
  
  PrescriptionAppointments(){

    this.httpClient.get(environment.apiUrl + '/api/doctors/getallmedicine')

    .toPromise().then(

      response=>{

        console.log("from service");

        console.log(response);

        this.medicine = response as Doctorappointment[];
       
        
      }

    );
    
  }
  deletePrescription(id:number){
    return this.httpClient.delete(environment.apiUrl + "/api/doctors/prescribedmedicine/"+id);
  }



}