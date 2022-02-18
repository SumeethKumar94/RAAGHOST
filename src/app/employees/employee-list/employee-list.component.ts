import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/shared/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

 //declare variable
 page: number =1;
 filter:string;
 constructor(public employeeService:EmployeeService) { }

 ngOnInit(): void {    //life cycle hook   ---initialize
   //life cycle hoook
   console.log("Welcome to lifecycle Hook");
   //this.getEmployees();   //calling 1st method

   this.employeeService.bindListEmployees(); 
    //caling 2nd method
 }

 //1
 getEmployees(){
   //call service method
   this.employeeService.getAllEmployees().subscribe(
     response =>{
       console.log('retriving data from list');
       console.log(response);
     },
     error=>{
       console.log('Something Wrong');
       console.log(error);
     }
   );
 }

 //edit employee
 updateEmployee(empId:number){
   console.log(empId);
   //navigate to edit form with selected employee details
   

 }


 //delete employee
 deleteEmployee(empId:number){
   if(confirm('Are you sure you want to Delete this record?')){
     this.employeeService.deleteEmployee(empId).subscribe(
       response=>{
         this.employeeService.bindListEmployees();
       },
       error=>{
           console.log(error)
       }
     );
   }
 }


}
