import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'CMSUI';
  AppoinmentId: number =0;
  DoctorId: number =1;
}
