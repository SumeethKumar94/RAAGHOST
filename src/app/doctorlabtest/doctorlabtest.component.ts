import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AppComponent } from '../app.component';
import { DoctorService } from '../shared/doctor.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-doctorlabtest',
  templateUrl: './doctorlabtest.component.html',
  styleUrls: ['./doctorlabtest.component.scss']
})
export class DoctorlabtestComponent implements OnInit {
  ngForm: FormGroup;
  pt: number;
  pret: number;
  presct: {} = {
    // PrescriptionId:""
    AppointmentId: "",
    DoctorId: 1
  };
  prestedetail: {} = {
    TPrescriptionId: "",
    //PDetailsId:"",
    PTId: ""

  }
  constructor(public appointmentService: DoctorService, private toastrService: ToastrService, public app: AppComponent) { }

  ngOnInit(): void {
    this.appointmentService.bindListTest();
    this.appointmentService.bindListUnit();
  }
  onSubmit(form: NgForm) {
    console.log(form.value);





    let addId = this.appointmentService.testdata.PTId;
    if (addId == 0 || addId == null) {
      //INSERT
      this.insertprescribedTest(form);

      // this.presct = {
      //   AppointmentId: this.app.AppoinmentId,
      //   DoctorId: 1
      // };



      console.log(this.presct);

      console.log(this.app.AppoinmentId);


    } else {
      console.log("not inserted");
    }

  }

  insertprescribedTest(form?: NgForm) {
    console.log("inserting  prescribed test record...");
    this.appointmentService.insertPrescribeTest(form.value).subscribe(
      (result) => {
        console.log(result);
        this.presct = {
            AppointmentId: this.app.AppoinmentId,
            DoctorId: 1
          };
        this.pt = result;

        this.resetForm(form);
        this.toastrService.success('Prescription record has been inserted', 'CmsApp v2022');
        this.insertTestPrescription(this.presct);

      },
      (error) => {
        console.log(error);
      }



    )
  }
  insertTestPrescription(obj: any) {
    console.log("inserting  prescription record...");
    this.appointmentService.insertTestPrescribe(obj).subscribe((result) => {
      console.log(result);
      this.pret = result;

     
      this.prestedetail = {
        TPrescriptionId: Number(this.pt),
        PTId: Number(this.pret)
      }
     console.log(this.prestedetail);
     this.insertPrescriptionTestDetail(this.prestedetail);


      this.toastrService.success('added test record has been inserted', 'CmsApp v2022');
      
    }, (error) => {
      console.log(error);
    })}
    insertPrescriptionTestDetail(obj: any) {
    console.log("inserting  prescription test detail record...");
    this.appointmentService.insertTestDetail(obj).subscribe((result) => {
      console.log(result);
      this.toastrService.success('added detail test record has been inserted', 'CmsApp v2022');
    }, (error) => {
      console.log(error);
    }

    )

  }
  resetForm(form?: NgForm) {
    if (form != null) {
      form.resetForm();
    }
  }

}
