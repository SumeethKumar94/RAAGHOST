import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EmployeeService } from '../shared/employee.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {

  empId:number;

  constructor(public empService: EmployeeService,private route:ActivatedRoute,
    private toastrService:ToastrService, private router:Router) { }

  ngOnInit(): void {
    
    //get all roles
     this.empService.bindListRoles();

    //   //get empId from ActivateRoute
    // this.empId=this.route.snapshot.params['empId'];

    // //get Employe by Id
    // if (this.empId!=0||this.empId!= null){
    //   //get employee
    //   this.empService.getEmployeeById(this.empId).subscribe(
    //     result=>{
    //        console.log(result);

    //        //format the date : yyyy:mm:dd
    //        var datePipe=new DatePipe("en-UK");
    //        let formatedDate=datePipe.transform(result.Doj,'yyyy-MM-dd')
    //        result.Doj=formatedDate;
    //        //assignthis reslut to empService formData
    //        this.empService.formData=Object.assign({},result); 
           
    //     },
    //     error=>{
    //       console.log(error);
          
    //     }
    //   );
    // }

  }
   //submit form
   onSubmit(form: NgForm) {
    console.log(form.value);
    let addId = this.empService.formData.EmployeeId;

    //insert or update
    if (addId == 0 || addId == null) {
      this.insertEmployeeRecord(form);
    }
    else {
      //update
      //this.updateEmployeeRecord(form);
     }
    }

    //insert
  insertEmployeeRecord(form?: NgForm) {
    console.log("inserting a record...");
    this.empService.insertEmployee(form.value).subscribe(
      (result) => {
        console.log(result);
        //call resetform for cln the contents
        this.resetForm(form);
        this.toastrService.success('Employee record has been inserted','EmpApp v2022');
        this.router.navigateByUrl('/adminhome');
      },
      (error) => {
        console.log(error);

      }
    )

  }

//   //update
//   updateEmployeeRecord(form?: NgForm) {
//     console.log("updatinging a record...");
//     this.empService.updateEmployee(form.value).subscribe(
//       (result) => {
//         console.log(result);
// //call resetform for cln the contents
//         this.resetForm(form)
//         this.toastrService.success('Employee record has been updated','EmpApp v2022');
//       },
//       (error) => {
//         console.log(error);

//       }
//     )

//   }

//clear all contents after submit  --initialization
resetForm(form? : NgForm){
  if (form != null) {
    form.resetForm();
    
  }
}


}
