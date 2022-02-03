import { Component, OnInit } from '@angular/core';
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
  constructor(public prescriptionmedicinesservice : PrescriptionmedicinesService) { }

  ngOnInit(): void {
    this.prescriptionmedicinesservice.bindListPrescriptionmedicines();
  }

}
