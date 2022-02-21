import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { PatientService } from 'src/app/shared/patient.service';



@Component({
  selector: 'app-patientregistration',
  templateUrl: './patientregistration.component.html',
  styleUrls: ['./patientregistration.component.scss']
})
export class PatientregistrationComponent implements OnInit {


  PatientId: number;
  loggedUser: string;


  constructor(public patientService: PatientService,
    private toastrService: ToastrService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {

    //get empId from ActivateRoute
    this.PatientId = this.route.snapshot.params['PatientId'];

    //get employee by id
    if (this.PatientId != 0 || this.PatientId != null) {
      //get employee
      this.patientService.getPatientById(this.PatientId).subscribe
        (
          result => {
            console.log(result);

            //format the date yyyy-mm-dd
            var datePipe = new DatePipe("en-UK");
            let formatedDate: any = datePipe.transform(result.Dob, 'yyyy-MM-dd');
            result.Dob = formatedDate;

            //assign this result to empService formData
            this.patientService.formData = Object.assign({}, result);
          },
          error => {

          }
        );
    }



  }

  //submit form
  onSubmit(form: NgForm) {
    console.log(form.value);
    let PatientId = this.patientService.formData.PatientId;

    //call insert or update method
    if (PatientId == 0 || PatientId == null) {
      //call insert
      this.insertPatientRecord(form);
    }
    else {
      //call update
      this.updatePatientRecord(form);
    }
  }

  //clear all contents after submit  --initialization
  resetForm(form?: NgForm) {
    if (form != null) {
      form.resetForm();
    }
  }

  //insert method
  insertPatientRecord(form?: NgForm) {
    console.log("Inserting a record..");
    this.patientService.insertPatient(form.value).subscribe
      (
        (result) => {
          console.log(result);
          //call reset form
          this.resetForm(form);
          this.toastrService.success('New patient registered successfully', 'CMSApp v2o22');
        },
        (error) => {
          console.log(error);
        }
      );
  }

  //update method
  updatePatientRecord(form?: NgForm) {
    console.log("Updating a record..");
    this.patientService.updatePatient(form.value).subscribe
      (
        (result) => {
          console.log(result);
          //call reset form
          this.resetForm(form);
          this.toastrService.success('Patient record has been updated successfully', 'CMSApp v2o22');
        },
        (error) => {
          console.log(error);
        }
      );
  }
  //logout
  logOut() {
    // this.authService.logOut();
    this.router.navigateByUrl('login');
  }

  getToday(): string{

    return new Date().toISOString().split('T')[0]

  }
}

