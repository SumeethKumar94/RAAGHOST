import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AppComponent } from '../app.component';
import { DoctorService } from '../shared/doctor.service';
import { NgForm } from '@angular/forms';
import { AuthService } from '../shared/auth.service';
import { Router } from '@angular/router';
import { LabtechtestService } from '../shared/labtechtest.service';
import { LabtechtesttetsService } from '../shared/labtechtesttets.service';

@Component({
  selector: 'app-doctorlabtest',
  templateUrl: './doctorlabtest.component.html',
  styleUrls: ['./doctorlabtest.component.scss']
})
export class DoctorlabtestComponent implements OnInit {
  ngForm: FormGroup;
  page: number = 1;
  filter: string;
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
  constructor(public appointmentService: DoctorService, private toastrService: ToastrService, public app: AppComponent, private authService: AuthService, private router: Router, public labtechtestservice: LabtechtesttetsService) { }
  
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
      this.appointmentService.testdata.PTId = 0;

      //this.resetForm(form);
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

        
        this.toastrService.success('Prescription record has been inserted', 'CmsApp v2022');
        console.log(this.app.TPrescriptionId);
        

        if (this.app.TPrescriptionId == 0 || this.app.TPrescriptionId == null) {

          this.insertTestPrescription(this.presct);


        } else {

          this.prestedetail = {
            TPrescriptionId: this.app.TPrescriptionId,
            PTId: Number(this.pt)
          }
          this.insertPrescriptionTestDetail(this.prestedetail);
        }
        // this.insertTestPrescription(this.presct);

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

      this.app.TPrescriptionId = result;


      this.prestedetail = {
        TPrescriptionId: this.app.TPrescriptionId,
        PTId: Number(this.pt)
      }

      console.log(this.prestedetail);
      this.insertPrescriptionTestDetail(this.prestedetail);


      this.toastrService.success('added test record has been inserted', 'CmsApp v2022');

    }, (error) => {
      console.log(error);
    })
  }
  insertPrescriptionTestDetail(obj: any) {
    console.log("inserting  prescription test detail record...");
    this.appointmentService.insertTestDetail(obj).subscribe((result) => {
      console.log(result);

      this.labtechtestservice.bindListLabtechtesttets(this.app.TPrescriptionId);

      this.toastrService.success('added detail test record has been inserted', 'CmsApp v2022');
    }, (error) => {
      console.log(error);
    }

    )

  }
  logout() {
    this.authService.logOut();
    this.app.PrescriptionId = 0;
    this.app.TPrescriptionId = 0;
    this.router.navigateByUrl('login');

  }
  move() {
    this.app.AppoinmentId = 0;
    this.app.PrescriptionId = 0;
    this.app.TPrescriptionId = 0;
   


   
    this.router.navigateByUrl('doctorhome').then(e=>
      { window.location.reload();
        console.log("moved");
        
     }
       );
       console.log("new way");
       



  }

  resetForm(form?: NgForm) {
    if (form != null) {
      form.resetForm();
    }
  }

}
