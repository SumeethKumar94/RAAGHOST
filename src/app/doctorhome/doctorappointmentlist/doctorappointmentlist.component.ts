import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { DoctorService } from 'src/app/shared/doctor.service';


@Component({
  selector: 'app-doctorappointmentlist',
  templateUrl: './doctorappointmentlist.component.html',
  styleUrls: ['./doctorappointmentlist.component.scss']
})
export class DoctorappointmentlistComponent implements OnInit {

  page:number =1;
  filter:string;
 id:number;
  constructor(public appointmentService:DoctorService,public app:AppComponent) { }

   

  ngOnInit(): void {
    console.log("Welcome to LifeCycle Hook");
    this.id=parseInt(localStorage.getItem('EMPLOYEEID'));
    this.appointmentService.bindListAppointments(this.id);
    
  }
 getid(id:number){
   this.app.AppoinmentId=id;
   console.log(id);
 }
}
