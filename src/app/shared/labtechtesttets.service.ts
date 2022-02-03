import { HttpBackend, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Labtechtesttets } from './labtechtesttets'

@Injectable({
  providedIn: 'root'
})
export class LabtechtesttetsService {
  labtesttests : Labtechtesttets[];
  forData: Labtechtesttets =new Labtechtesttets();
  constructor(private httpClient: HttpClient) { }

  // get alll test tests
  bindListLabtechtesttets(id:number){
    this.httpClient.get(environment.apiUrl+"/api/LabTech/testPrescription-tests?testId="+id)
    .toPromise().then(
      response => {
        this.labtesttests = response as Labtechtesttets[]
      }

    )
  }
}
