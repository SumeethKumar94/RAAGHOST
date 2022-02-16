import { Component, OnInit } from '@angular/core';
import { DoctorService } from 'src/app/shared/doctor.service';


@Component({
  selector: 'app-doctorappointmentlist',
  templateUrl: './doctorappointmentlist.component.html',
  styleUrls: ['./doctorappointmentlist.component.scss']
})
export class DoctorappointmentlistComponent implements OnInit {

  page:number =1;
  filter:string;
 
  constructor(public appointmentService:DoctorService) { }

   

  ngOnInit(): void {
    console.log("Welcome to LifeCycle Hook");
   
    this.appointmentService.bindListAppointments();
    
  }

}
