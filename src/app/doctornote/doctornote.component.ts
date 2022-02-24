import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AppComponent } from '../app.component';
import { AuthService } from '../shared/auth.service';
import { DoctorService } from '../shared/doctor.service';

@Component({
  selector: 'app-doctornote',
  templateUrl: './doctornote.component.html',
  styleUrls: ['./doctornote.component.scss']
})
export class DoctornoteComponent implements OnInit {

  constructor(public doctornoteservice: DoctorService, private toastrService: ToastrService, public app: AppComponent,private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }
  onSubmit(form: NgForm) {
    console.log(form);
    if (this.app.AppoinmentId) {
      this.doctornoteservice.noteData.AppointmentId=this.app.AppoinmentId;

      this.insertnotes(form);
     // this.resetForm(form);
    } else {
      console.log("not inserted");
    }

  }
  insertnotes(form?: NgForm) {
    console.log("inserting  notes record...");
    console.log(this.app.AppoinmentId);
    //console.log(this.doctornoteservice.noteData.AppointmentId);
   
    console.log(this.doctornoteservice.noteData.AppointmentId);
    this.doctornoteservice.insertNotes(form.value).subscribe(
      (result) => {
        console.log(result);
        this.toastrService.success('Notes record has been inserted', 'CmsApp v2022');

      }
    )
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
  logout() {
    this.authService.logOut();
    this.app.PrescriptionId = 0;
    this.app.TPrescriptionId = 0;
    this.router.navigateByUrl('login');

  }

  resetForm(form?: NgForm) {
    if (form != null) {
      form.resetForm();
    }
  }


}
