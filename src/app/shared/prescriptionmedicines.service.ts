import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Prescriptionmedicines } from './prescriptionmedicines'
@Injectable({
  providedIn: 'root'
})
export class PrescriptionmedicinesService {

  medicines : Prescriptionmedicines[];
  formData : Prescriptionmedicines = new Prescriptionmedicines();

  constructor(private httpClient: HttpClient) { }

  bindListPrescriptionmedicines(){
    this.httpClient.get(environment.apiUrl + "/api/Pharmacist/prescription-medcines?presId=2")
    .toPromise().then(
      response => {
        console.log(response);
        this.medicines = response as Prescriptionmedicines[];
      }
    )
  }

}