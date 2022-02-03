import { Component, OnInit } from '@angular/core';
import { PharmacistPrescriptionService } from 'src/app/shared/pharmacist-prescription.service'

@Component({
  selector: 'app-pharmpres-list',
  templateUrl: './pharmpres-list.component.html',
  styleUrls: ['./pharmpres-list.component.scss']
})
export class PharmpresListComponent implements OnInit {

  //declare variable
  page: number = 1;
  filter: string;

  constructor(public pharmacistprescriptionservice:PharmacistPrescriptionService) { }

  ngOnInit(): void {
    console.log("welcome");
    this.pharmacistprescriptionservice.bindListPharmacistPrescription();
  }

}
