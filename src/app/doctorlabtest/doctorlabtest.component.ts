import { Component, OnInit } from '@angular/core';
import { DoctorService } from '../shared/doctor.service';

@Component({
  selector: 'app-doctorlabtest',
  templateUrl: './doctorlabtest.component.html',
  styleUrls: ['./doctorlabtest.component.scss']
})
export class DoctorlabtestComponent implements OnInit {

  constructor(public appointmentService:DoctorService) { }

  ngOnInit(): void {
    this.appointmentService.bindListTest();
    this.appointmentService.bindListUnit();
  }

}
