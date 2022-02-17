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
export class RecappointmentService 
{
  departments: Department[];
  employees: Employee[];
  appointments : Appointment[];
  formData1: Department = new Department();
  formData2: Employee = new Employee();
  formData3 : Appointment = new Appointment();
  recappointments : Recappointment[];
  formData : Recappointment = new Recappointment();

  constructor(private httpClient: HttpClient) { }

  //get patients
  GetAllAppoinments(): Observable<any>
  {
    return this.httpClient.get(environment.apiUrl + '/api/appointments/getallappoinment');
  }

  bindListAppointments()
  {
    this.httpClient.get(environment.apiUrl + '/api/appointments/getallappoinment')
    .toPromise().then(
      response=>{
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

  //create new Appointment
  insertAppointment(): Observable<any> {
    return this.httpClient.get(environment.apiUrl + '/api/appointments/scheduleappoinment');
  }

    //delete patients
    DeleteAppointment(AppoinmentId: number) {
      return this.httpClient.delete(environment.apiUrl + "/api/appointments" + AppoinmentId);
    }
  
  //delete patients
  DeleteAppoinment(AppoinmentId : number)
  {
    return this.httpClient.delete(environment.apiUrl + "/api/appointments/" +AppoinmentId);
  }


    //get all departments
    GetAllDepartments(): Observable<any> {
      return this.httpClient.get(environment.apiUrl + '/api/deparments');
    }
  
    GetAllDoctors(): Observable<any> {
      return this.httpClient.get(environment.apiUrl + '/api/employees/getdoctordetails');
    }
}
