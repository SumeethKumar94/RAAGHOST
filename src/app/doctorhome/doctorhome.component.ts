import { Component, OnInit } from '@angular/core';

import { DoctorService } from '../shared/doctor.service';
//mport { NgForm } from '@angular/forms';
import {  FormBuilder,  FormGroup } from '@angular/forms';

@Component({
  selector: 'app-doctorhome',
  templateUrl: './doctorhome.component.html',
  styleUrls: ['./doctorhome.component.scss']
})
export class DoctorhomeComponent implements OnInit {
  page: number = 1;
  filter: string;
  //ngForm: FormGroup;
  constructor(public appointmentService: DoctorService, private fb: FormBuilder) {
    // this.ngForm = this.fb.group({
    //   prescription: this.fb.array([])


    // })
  }
   //Create form array
  //  Prescription(): FormArray{
  //     return this.ngForm.get('prescription') as FormArray;
  //   }

  // //New post when click on add button
  // addNewprescription(): FormGroup {
  //     return this.fb.group({
  //       Pmid: 0,
  //       MedicineId: 0,
  //       MedicineName: '',
  //       DosageId: 0,
  //       Dosage1: '',
  //       Quantity: 0,
  //     });
  //   }

  // //Add new post to form array
  // addprescription() {
  //     this.prescription().push(this.addNewprescription());
  //   }

  // //Delete post from form array
  // deletePrescription(index: number) {
  //     this.prescription().removeAt(index);
  //   }

  // //Submit Post
  // onSubmit(form: NgForm) {
  //     console.log(this.ngForm.value);
  //     // let addId = this.appointmentService.formData. Pmid;
  //     // if (addId == 0 || addId == null) {
  //     //   //Add new post
  //     //   this.newPost(form);
  //     //   this.resetForm(form);
  //     // }
  //   }

  // newPrescription(form ?: NgForm) {
  //     console.log('Posting...');
  //     this.appointmentService.insertprescription(form.value).subscribe(
  //       (res) => {
  //         console.log(res);
  //         // this.toastr.success('Posted......', 'Blog App');
  //       },
  //       (err) => {
  //         console.log(err);
  //       }
  //     );
  //   }

  // //Clear all contents after submit
  // resetForm(form ?: NgForm) {
  //     if(form != null) {
  //     form.resetForm();
  //   }
  // }

  ngOnInit(): void {

    this.appointmentService.PrescriptionAppointments();
    this.appointmentService.bindListMedicine();
    this.appointmentService.bindListDosage();
  }
  updatePrescription(Pmid: number) {
    console.log(Pmid);

  }
  deletePrescription(Pmid: number) {
    if (confirm('Are u want to delete this record')) {
      this.appointmentService.deletePrescription(Pmid).subscribe(
        response => {
          this.appointmentService.PrescriptionAppointments();

        }, error => {
          console.log(error);
        });


    }
  }

}


