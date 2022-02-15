import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
//import { EmployeeService } from 'src/app/shared/employee.service';
import { MedicineService } from 'src/app/shared/medicine.service';

@Component({
  selector: 'app-medicine',
  templateUrl: './medicine.component.html',
  styleUrls: ['./medicine.component.scss']
})
export class MedicineComponent implements OnInit {
  MedicineId: number;
  constructor(public mediService: MedicineService, private route: ActivatedRoute,
    private toastrService: ToastrService, private router:Router) { }

  ngOnInit(): void {
    //get userId from ActivateRoute
    this.MedicineId = this.route.snapshot.params['MedicineId'];
    console.log(this.MedicineId);
    
    //get user by Id
    if (this.MedicineId!=0 || this.MedicineId!=null) {
      //get user
      this.mediService.getMediById(this.MedicineId).subscribe(
        result => {
          console.log(result);
          //format the date : yyyy:mm:dd
          var datePipe=new DatePipe("en-UK");

          let formatedDate=datePipe.transform(result.Doj,'yyyy-MM-dd')
          result.Doj=formatedDate;

          let formdate=datePipe.transform(result.Dob,'yyyy-MM-dd')
          result.Dob=formdate;
          
          this.mediService.formData=Object.assign({},result);
        },
        error => {
          console.log(error);
        }
      );
    }
  }
  //submit form
  onSubmit(form: NgForm) {
    console.log(form.value);
    let addId = this.mediService.formData.MedicineId;

    //insert or update
    if (addId == 0 || addId == null) {
      this.insertMedicineRecord(form);
    }
    else {
      //update
      this.updateMedicineRecord(form);
     }


  }

  //insert
  insertMedicineRecord(form?: NgForm) {
    console.log("inserting a record...");
    this.mediService.insertMedicine(form.value).subscribe(
      (result) => {
        console.log(result);
        //call resetform for cln the contents
        this.resetForm(form);
        this.toastrService.success('medi record has been inserted');
        //this.router.navigateByUrl('/adminpage');
      },
      (error) => {
        console.log(error);

      }
    )

  }

  //update
  updateMedicineRecord(form?: NgForm) {
    console.log("updatinging a record...");
    this.mediService.updateMedicine(form.value).subscribe(
      (result) => {
        console.log(result);
//call resetform for cln the contents
        this.resetForm(form)
        this.toastrService.success('medicine record has been updated');
        //this.router.navigateByUrl('/adminhome');
      },
      (error) => {
        console.log(error);

      }
    )

  }

  //clear all contents after submit  --initialization
  resetForm(form? : NgForm){
    if (form != null) {
      form.resetForm();
      
    }
  }

}
