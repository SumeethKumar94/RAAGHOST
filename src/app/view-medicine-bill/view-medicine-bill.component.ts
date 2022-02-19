import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../shared/auth.service';
import { Medicinebillcheck } from '../shared/medicinebillcheck';
import { PrescriptionmedicinesService } from '../shared/prescriptionmedicines.service';

@Component({
  selector: 'app-view-medicine-bill',
  templateUrl: './view-medicine-bill.component.html',
  styleUrls: ['./view-medicine-bill.component.scss']
})
export class ViewMedicineBillComponent implements OnInit {

  billId : number;
  presId: number;
  medicinebillCheck: Medicinebillcheck[];
  constructor(public prescriptionmedicinesservice : PrescriptionmedicinesService,private toasterservice: ToastrService,
    private route:ActivatedRoute,private authService : AuthService,private router : Router) { }

  ngOnInit(): void {
    this.billId = this.route.snapshot.params['billId']
    this.prescriptionmedicinesservice.bindListMedicineBillByBillID(this.billId);
    this.prescriptionmedicinesservice.getMedicineBillById(this.billId).subscribe(result=>{
      this.medicinebillCheck = result as Medicinebillcheck[];
      console.log("akhilllll");
      console.log(this.medicinebillCheck);
      console.log(this.medicinebillCheck["PrescriptionId"]);
    this.prescriptionmedicinesservice.bindListPrescriptionmedicines(this.medicinebillCheck["PrescriptionId"]);
    console.log("mediciness...");
    })

  }
  printComponent() {
    let printContents = document.getElementById("html").innerHTML;
    let originalContents = document.body.innerHTML;
  
    document.body.innerHTML = printContents;
  
    window.print();
  
    document.body.innerHTML = originalContents;
  }
  //logout
  logOut()
  {
    this.authService.logOut();
    this.router.navigateByUrl('login');
  }
}


