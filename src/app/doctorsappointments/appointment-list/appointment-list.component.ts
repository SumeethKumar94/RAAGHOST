import { Component, OnInit } from '@angular/core';
import { AppointmentService } from 'src/app/shared/appointment.service';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.scss']
})
export class AppointmentListComponent implements OnInit {
  page:number =1;
  filter:string;
  constructor(public appointmentService:AppointmentService) { }

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

  ngOnInit(): void {
    console.log("Welcome to LifeCycle Hook");
   
    this.appointmentService.bindListAppointments();
    this.appointmentService.PrescriptionAppointments();
  }

}
