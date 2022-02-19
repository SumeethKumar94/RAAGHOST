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

  empId: number;
  drId: number;
  EmployeeId: number;
  PhoneNumber: string;
  //depId:number;
  //object
  DrObj: {} = { EmployeeId: "", DepId: "" }

  constructor(public empService: EmployeeService, private route: ActivatedRoute,
    private toastrService: ToastrService, private router: Router) { }

  ngOnInit(): void {

    //get all roles
    this.empService.bindListRoles();

    //departments
    this.empService.bindListdeparments();

    //get empId from ActivateRoute
    this.EmployeeId = this.route.snapshot.params['EmployeeId'];
    console.log("id" + this.EmployeeId);

    //get Employe by Id
    if (this.EmployeeId != 0 || this.EmployeeId != null) {
      //get employee
      this.empService.getEmployeeById(this.EmployeeId).subscribe(
        result => {
          console.log(result);

          //format the date : yyyy:mm:dd
          var datePipe = new DatePipe("en-UK");
          let formatedDate = datePipe.transform(result.Doj, 'yyyy-MM-dd')
          result.Doj = formatedDate;

          let formdate = datePipe.transform(result.Dob, 'yyyy-MM-dd')
          result.Dob = formdate;
          //assignthis reslut to empService formData
          this.empService.formData = Object.assign({}, result);

        },
        error => {
          console.log(error);

        }
      );
    }
    
    // this.empService.getEmployeeBycontact(this.PhoneNumber).subscribe(
    //   (result) => {
    //     console.log("ph"+result);
    //     alert(" Contact already exist ")
        
        
    //   })

  }
  //submit form
  onSubmit(form: NgForm) {
    console.log(form.value);
    let addId = this.empService.formData.EmployeeId;
    //let PhoneNumber = this.empService.formData.PhoneNumber
    this.PhoneNumber=this.empService.formData.PhoneNumber



    //insert or update
    if (addId == 0 || addId == null) {
    //---------------------------------------------------------------------
    
    this.empService.getEmployeeBycontact(this.PhoneNumber).subscribe(
      (result) => {
        if(result.length>0){
          alert("Contact already exist")
           
        }
        else{
          this.insertEmployeeRecord(form); 
        }
      })
    // -------------------------------------------------------------------------------------
   //this.insertEmployeeRecord(form);  //call
   //console.log("not set");

  }
    else {
  //update
  this.updateEmployeeRecord(form);
}
  }

//insert
insertEmployeeRecord(form ?: NgForm) {   //declare
  console.log("inserting a record...");
  this.empService.insertEmployee(form.value).subscribe(
    (result) => {
      console.log(result);
      this.empId = result;
      this.DrObj = { EmployeeId: Number(this.empId), DepId: this.empService.formData.DepId };
      this.insertdoctorRecord(this.DrObj);

      //call resetform for cln the contents
      this.resetForm(form);
      this.toastrService.success('Successfully added', 'EmpApp v2022');
      //this.router.navigateByUrl('/adminhome');
    },
    (error) => {
      console.log(error);

    }
  )

}
//function
insertdoctorRecord(obj: any) {
  this.empService.insertDoctor(obj).subscribe((result1) => {
    console.log(result1);
    this.toastrService.success('Doctor details inserted succesfully', 'EmpApp v2022');
  }, (error) => {
    console.log(error);

  });
}

//update
updateEmployeeRecord(form ?: NgForm) {
  console.log("updatinging a record...");
  this.empService.updateEmployee(form.value).subscribe(
    (result) => {
      console.log(result);
      //call resetform for cln the contents
      this.resetForm(form)
      this.toastrService.success('Succesfully updated', 'EmpApp v2022');
    },
    (error) => {
      console.log(error);

    }
  )

}

//clear all contents after submit  --initialization
resetForm(form ?: NgForm) {
  if (form != null) {
    form.resetForm();

  }
}

navi(){
  this.router.navigateByUrl('/adminhome');
}


}
