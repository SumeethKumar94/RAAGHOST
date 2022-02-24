import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Doctorappointment } from './doctorappointment';
import { Medicine } from './medicine';
import {Medicineprescribe} from './medicineprescribe';
import {Testprescribe} from './testprescribe';
import {Doctornotes} from './doctornotes'
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

  data:Medicineprescribe = new Medicineprescribe();
  testdata:Testprescribe = new Testprescribe();
  formData:Doctorappointment= new Doctorappointment();
  noteData:Doctornotes= new Doctornotes();

  constructor(private httpClient:HttpClient) { }
  bindListAppointments(id:number){

    this.httpClient.get(environment.apiUrl + '/api/doctors/getallappoinment/'+id)
  
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

        //console.log(response);

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
  insertPrescribeMedicine(medpre:Medicineprescribe):Observable<any>{
    return this.httpClient.post(environment.apiUrl + "/api/doctors/addmed",medpre);
  }
  insertPrescription(medpre:Medicineprescribe):Observable<any>{
    return this.httpClient.post(environment.apiUrl + "/api/doctors/addprescription",medpre);
  }
  insertPrescriptiondetails(medpre:Medicineprescribe):Observable<any>{
    return this.httpClient.post(environment.apiUrl + "/api/doctors/addprescriptiondetails",medpre);
  }

  //----------------------------------------------
  insertPrescribeTest(testpre:Testprescribe):Observable<any>{
    return this.httpClient.post(environment.apiUrl + "/api/doctors/addprescribedtest",testpre);
  }
  insertTestDetail(testpre:Testprescribe):Observable<any>{
    return this.httpClient.post(environment.apiUrl + "/api/doctors/addtestdet",testpre);
  }
  insertTestPrescribe(testpre:Testprescribe):Observable<any>{
    return this.httpClient.post(environment.apiUrl + "/api/doctors/addtestpres",testpre);
  }
  
 insertNotes(note:Doctornotes):Observable<any>{
   console.log(note);
   
  return this.httpClient.post(environment.apiUrl + "/api/doctors/addnote",note);
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