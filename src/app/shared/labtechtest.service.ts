import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Labtechtest } from './labtechtest'
@Injectable({
  providedIn: 'root'
})
export class LabtechtestService {
  // retrieve all data 
  labtechtests: Labtechtest[];
  formData: Labtechtest = new Labtechtest();
  constructor(private httpClient: HttpClient) { }
  
  bindListLabtechtest(){
    this.httpClient.get(environment.apiUrl + "/api/LabTech/testPrescriptionLists")
    .toPromise().then(
      response => {
        console.log("from service.....");
        console.log(response);
        this.labtechtests=response as Labtechtest[]
      }
    )
  }
}
