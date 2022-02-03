import { Injectable } from '@angular/core';
import { PharmacistPrescription } from './pharmacist-prescription'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class PharmacistPrescriptionService {
  // retrieve all prescriptions
  prescriptions : PharmacistPrescription[];
  formData : PharmacistPrescription = new PharmacistPrescription();
  constructor(private httpClient: HttpClient) {}
    bindListPharmacistPrescription(){
      //console.log(environment.apiUrl + '/api/Pharmacist/prescriptionLists');
      this.httpClient.get(environment.apiUrl + '/api/Pharmacist/prescriptionLists')
      .toPromise().then(
        response => {
          console.log("from service ------2");
          console.log(response);
          this.prescriptions=response as PharmacistPrescription[]
    }
      )
   }
}
