import { Injectable } from '@angular/core';
import { Patient } from './patient';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Department} from'./department';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  patients: Patient[];
  departments : Department[];
  formData: Patient = new Patient();
  formData1 : Department = new Department();

  constructor(private httpClient: HttpClient) { }

  bindListPatients() {
    this.httpClient.get(environment.apiUrl + '/api/patients')
      .toPromise().then(
        response => {
          console.log("from service");
          console.log(response);
          this.patients = response as Patient[];
        }
      );
  }
  
  bindListDepartments() {
    this.httpClient.get(environment.apiUrl + '/api/deparments')
      .toPromise().then(
        response => {
          console.log("from service");
          console.log(response);
          this.departments = response as Department[];
        }
      );
  }

  //get all departments
  GetAllDepartments(): Observable<any> {
    return this.httpClient.get(environment.apiUrl + '/api/deparments');
  }


  //get patients
  GetAllPatients(): Observable<any> {
    return this.httpClient.get(environment.apiUrl + '/api/patients');
  }

  //get patients plan by id
  getPatientById(PatientId: number): Observable<any> {
    return this.httpClient.get(environment.apiUrl + "/api/patients/" + PatientId);
  }

  //add patient
  insertPatient(patients: Patient): Observable<any> {
    return this.httpClient.post(environment.apiUrl + "/api/patients", patients);
  }


  //update patient
  updatePatient(patients: Patient): Observable<any> {
    return this.httpClient.put(environment.apiUrl + "/api/patients", patients);
  }

  //delete patients
  DeletePatient(PatientId: number) {
    return this.httpClient.delete(environment.apiUrl + "/api/patients/" + PatientId);
  }

}
