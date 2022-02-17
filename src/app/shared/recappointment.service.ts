import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Appointment } from './appointment';
import { Department } from './department';
import { Employee } from './employee';
import { Patient } from './patient';
import { Recappointment } from './recappointment';

@Injectable({
  providedIn: 'root'
})
export class RecappointmentService {
  departments: Department[];
  employees: Employee[];
  appointments: Appointment[];
  recappointments: Recappointment[];
  formData1: Department = new Department();
  formData2: Employee = new Employee();
  formData3: Appointment = new Appointment();

  formData: Recappointment = new Recappointment();

  constructor(private httpClient: HttpClient) { }



  bindListAppointments() {
    this.httpClient.get(environment.apiUrl + '/api/appointments/getallappoinment')
      .toPromise().then(
        response => {
          console.log("from service");
          console.log(response);
          this.recappointments = response as Recappointment[];
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


    //create new bill
    insertConsultationBillDetails(recappointments: Recappointment): Observable<any> {
      return this.httpClient.post(environment.apiUrl + '/api/consultationbills', recappointments);
    }
  
    //get bill by id
    getConsultationBillById(CbillId: number): Observable<any> {
      return this.httpClient.get(environment.apiUrl + "/api/consultationbills" + CbillId);
    }


  //create new token
  insertToken(recappointments: Recappointment): Observable<any> {
    return this.httpClient.post(environment.apiUrl + '/api/token', recappointments);
  }

  //get appointments
  GetAllAppoinments(): Observable<any> {
    return this.httpClient.get(environment.apiUrl + '/api/appointments/getallappoinment');
  }

  //create new Appointment
  insertAppointment(recappointments: Recappointment): Observable<any> {
    return this.httpClient.post(environment.apiUrl + '/api/appointments/scheduleappoinment', recappointments);
  }

  //delete patients
  DeleteAppoinment(AppoinmentId: number) {
    return this.httpClient.delete(environment.apiUrl + "/api/appointments/" + AppoinmentId);
  }


  //get all departments
  GetAllDepartments(): Observable<any> {
    return this.httpClient.get(environment.apiUrl + '/api/deparments');
  }

  GetAllDoctors(): Observable<any> {
    return this.httpClient.get(environment.apiUrl + '/api/employees/getdoctordetails');
  }
}
