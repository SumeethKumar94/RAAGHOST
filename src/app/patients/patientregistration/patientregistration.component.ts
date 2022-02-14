import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
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
    private router: Router) { }

  ngOnInit(): void { }

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
          this.toastrService.success('New patient registered successfully');
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
    this.router.navigateByUrl('signin');
  }
}

