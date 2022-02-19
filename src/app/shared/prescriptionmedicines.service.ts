import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Prescriptionmedicines } from './prescriptionmedicines'
import { Medicinebill } from './medicinebill'
import { Medicinebillcheck } from './medicinebillcheck'
@Injectable({
  providedIn: 'root'
})
export class PrescriptionmedicinesService {

  medicines : Prescriptionmedicines[];
  formData : Prescriptionmedicines = new Prescriptionmedicines();
  medicineBill : Medicinebill[];
  medicinebillCheck: Medicinebillcheck[];

  constructor(private httpClient: HttpClient) { }

  bindListPrescriptionmedicines(Id:number){
    this.httpClient.get(environment.apiUrl + "/api/Pharmacist/prescription-medcines?presId="+Id)
    .toPromise().then(
      response => {
        console.log(response);
        this.medicines = response as Prescriptionmedicines[];
        console.log(this.medicines);
      }
    )
  }
  bindListMedicineBill(Id:number){
    this.httpClient.get(environment.apiUrl + "/api/Medicinebill/prescriptionid?PresId="+Id)
    .toPromise().then(
      response => {
        console.log(response);
        this.medicinebillCheck = response as Medicinebillcheck[];
      }
    )
  }
  bindListMedicineBillByBillID(Id:number){
    this.httpClient.get(environment.apiUrl + "/api/Medicinebill/"+Id)
    .toPromise().then(
      response => {
        console.log("hiiii");
        console.log(response);
        this.medicinebillCheck = response as Medicinebillcheck[];
      }
    )
  }
  getMedicineBillById(Id:number){
    return this.httpClient.get(environment.apiUrl + "/api/Medicinebill/"+Id);
  }
  insertMedicineBill(medicineBill:Medicinebill):Observable<any>{
    return this.httpClient.post(environment.apiUrl+"/api/Medicinebill",medicineBill);
  }
}
