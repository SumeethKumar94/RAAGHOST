import { Component, OnInit } from '@angular/core';
import { RecappointmentService } from 'src/app/shared/recappointment.service';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.scss']
})
export class AppointmentListComponent implements OnInit {

  page : number =1;
  filter : string;
  constructor(public recappointmentService : RecappointmentService) { }

  ngOnInit(): void 
  {
    console.log("Life cycle hook initiated");

    //calling the method to get appointments
    this.recappointmentService.bindListAppointments();
  }

  //get all appointments
  GetAllAppoinments()
  {
    this.recappointmentService.GetAllAppoinments().subscribe(
      response => {
        console.log('Retreiving from list');
        console.log(response);

      },
      error=>{
        console.log('Error Occured');
      }
    );
  }

  //to update a appointment detail
  UpdateAppoinment(AppointmentId : number)
  {
    console.log(AppointmentId);
  }


  //to delete a appointment record
  DeleteAppoinment(AppointmentId: number)
  {
    if(confirm('Are you sure to DELETE the record ?'))
    {
        this.recappointmentService.DeleteAppoinment(AppointmentId).subscribe(
          response =>
          {
            this.recappointmentService.bindListAppointments();
          },
          error=>
          {
            console.log(error);
          }
        );
    }
  }
}
