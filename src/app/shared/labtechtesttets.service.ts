import { HttpBackend, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Labtechtesttets } from './labtechtesttets'
import { Labbillcheck } from './labbillcheck'

@Injectable({
  providedIn: 'root'
})
export class LabtechtesttetsService {
  labtesttests : Labtechtesttets[];
  forData: Labtechtesttets =new Labtechtesttets();
  labbillCheck:Labbillcheck[]
  constructor(private httpClient: HttpClient) { }

  // get alll test tests
  bindListLabtechtesttets(id:number){
    this.httpClient.get(environment.apiUrl+"/api/LabTech/testPrescription-tests?testId="+id)
    .toPromise().then(
      response => {
        this.labtesttests = response as Labtechtesttets[]
      }

    );
  }

  // testBill by prescription id
  bindListLabTestBillByPrescriptionId(id:number){
    this.httpClient.get(environment.apiUrl+"/api/LabTest/testid?PresId="+id)
    .toPromise().then(
      response => {
        this.labbillCheck = response as Labbillcheck[]
      }

    );
  }

  // testBill by prescription billId
  bindListLabTestBillById(id:number){
    this.httpClient.get(environment.apiUrl+"/api/LabTest/"+id)
    .toPromise().then(
      response => {
        console.log(response);
        this.labbillCheck = response as Labbillcheck[]
      }

    );
  }
  // Update test results
  //update employee
updateTestResults(labtesttests:Labtechtesttets) : Observable<any>
{
  return this.httpClient.put(environment.apiUrl + "/api/LabTest/labtestresults",labtesttests);
}

// insert test bil
insertTestBill(labbillCheck:Labbillcheck) : Observable<any>
{
  return this.httpClient.post(environment.apiUrl + "/api/LabTest",labbillCheck);
}
}
