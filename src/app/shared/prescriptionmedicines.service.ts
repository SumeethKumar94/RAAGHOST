import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Prescriptionmedicines } from './prescriptionmedicines'
import { Medicinebill } from './medicinebill'
@Injectable({
  providedIn: 'root'
})
export class PrescriptionmedicinesService {

  medicines : Prescriptionmedicines[];
  formData : Prescriptionmedicines = new Prescriptionmedicines();
  medicineBill : Medicinebill[];

  constructor(private httpClient: HttpClient) { }

  bindListPrescriptionmedicines(Id:number){
    this.httpClient.get(environment.apiUrl + "/api/Pharmacist/prescription-medcines?presId="+Id)
    .toPromise().then(
      response => {
        console.log(response);
        this.medicines = response as Prescriptionmedicines[];
      }
    )
  }
  insertMedicineBill(medicineBill:Medicinebill):Observable<any>{
    return this.httpClient.post(environment.apiUrl+"/api/Medicinebill",medicineBill);
  }

}
