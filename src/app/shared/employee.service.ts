import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Employee } from './employee';
import { Role } from "./role";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {


  employees: Employee[];  //to store allemployee details
  roles: Role[];
  formData: Employee = new Employee();
  constructor(private httpClient: HttpClient) { }

  //get all employees  --1
  getAllEmployees(): Observable<any> {
    //https://localhost:44325  --environment
    return this.httpClient.get(environment.apiUrl + '/api/employees/getemployeedetails');
  }

  //2nd method 

  bindListEmployees() {
    this.httpClient.get(environment.apiUrl + '/api/employees')
      .toPromise().then(
        response => {
          console.log("from Service ");
          console.log(response);
          this.employees = response as Employee[]
        }
      );
  }
  //get employee by id

  //delete employee
  deleteEmployee(id: number) {
    return this.httpClient.delete(environment.apiUrl + "/api/employees/" + id);
  }

  //insert employee
  insertEmployee(employees: Employee): Observable<any> {
    return this.httpClient.post(environment.apiUrl + "/api/employees", employees);
  }

  //.........role.........
  bindListRoles() {
    this.httpClient.get(environment.apiUrl + '/api/Roles')
      .toPromise().then(
        response => {
          console.log("from Service ");
          console.log(response);
          this.roles = response as Role[]
        }
      );
  }
}
