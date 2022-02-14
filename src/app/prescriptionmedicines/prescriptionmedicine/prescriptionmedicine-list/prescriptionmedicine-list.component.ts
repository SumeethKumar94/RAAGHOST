import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PrescriptionmedicinesService } from 'src/app/shared/prescriptionmedicines.service'

@Component({
  selector: 'app-prescriptionmedicine-list',
  templateUrl: './prescriptionmedicine-list.component.html',
  styleUrls: ['./prescriptionmedicine-list.component.scss']
})
export class PrescriptionmedicineListComponent implements OnInit {
  // declare variable
  page:number = 1;
  filter:string;
  presId:number;
  constructor(public prescriptionmedicinesservice : PrescriptionmedicinesService,
  private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.presId = this.route.snapshot.params['presId']
    this.prescriptionmedicinesservice.bindListPrescriptionmedicines(this.presId);
  }

}
