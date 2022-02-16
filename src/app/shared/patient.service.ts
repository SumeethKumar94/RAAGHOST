import { Injectable } from '@angular/core';
import { Patient } from './patient';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Department } from './department';
import { User } from './user';
import { Employee } from './employee';
import {Appointment} from './appointment';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  patients: Patient[];
  patient : Patient[];
  departments: Department[];
  employees: Employee[];
  appointments : Appointment[];
  formData: Patient = new Patient();
  formData1: Department = new Department();
  formData2: Employee = new Employee();
  formData3 : Appointment = new Appointment();

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

  bindListPatient(PatientId :number) {
    this.httpClient.get(environment.apiUrl + '/api/patients/getpatient?patientid=' +PatientId)
      .toPromise().then(
        response => {
          console.log("from service");
          console.log(response);
          this.patient = response as Patient[];
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

  bindListDoctors() {
    this.httpClient.get(environment.apiUrl + '/api/employees/getdoctordetails')
      .toPromise().then(
        response => {
          console.log("from service");
          console.log(response);
          this.employees = response as Employee[];
        }
      );
  }


  /*-----------------------------------------------------------------------------*/
//create new Appointment
  insertAppointment(): Observable<any> {
    return this.httpClient.get(environment.apiUrl + '/api/appointments');
  }


  /*----------------------------------------------------------------------------*/
  //create new bill
  insertConsultationBillDetails(): Observable<any> {
    return this.httpClient.get(environment.apiUrl + '/api/consultationbills');
  }

  //get bill by id
  getConsultationBillById(CbillId: number): Observable<any> {
    return this.httpClient.get(environment.apiUrl + "/api/consultationbills" + CbillId);
  }

  /*----------------------------------------------------------------------------*/

  //get all departments
  GetAllDepartments(): Observable<any> {
    return this.httpClient.get(environment.apiUrl + '/api/deparments');
  }

  GetAllDoctors(): Observable<any> {
    return this.httpClient.get(environment.apiUrl + '/api/employees/getdoctordetails');
  }


  //get patients
  GetAllPatients(): Observable<any> {
    return this.httpClient.get(environment.apiUrl + '/api/patients');
  }

  //get patients by id
  getPatientById(PatientId: number): Observable<any> {
    return this.httpClient.get(environment.apiUrl + "/api/patients/getpatient?patientid=" + PatientId);
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
