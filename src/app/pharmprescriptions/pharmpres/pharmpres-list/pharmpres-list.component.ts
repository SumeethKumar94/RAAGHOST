import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(public pharmacistprescriptionservice:PharmacistPrescriptionService,private router:Router) { }

  ngOnInit(): void {
    console.log("welcome");
    this.pharmacistprescriptionservice.bindListPharmacistPrescription();
  }

  // show medicines in a prescriiption
  showMedicines(presId:number){
    console.log(presId);
    this.router.navigate(['pres-medicines',presId])
  }

}
