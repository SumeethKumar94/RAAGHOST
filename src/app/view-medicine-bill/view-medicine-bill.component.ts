import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../shared/auth.service';
import { PrescriptionmedicinesService } from '../shared/prescriptionmedicines.service';

@Component({
  selector: 'app-view-medicine-bill',
  templateUrl: './view-medicine-bill.component.html',
  styleUrls: ['./view-medicine-bill.component.scss']
})
export class ViewMedicineBillComponent implements OnInit {

  billId : number;
  constructor(public prescriptionmedicinesservice : PrescriptionmedicinesService,private toasterservice: ToastrService,
    private route:ActivatedRoute,private authService : AuthService,private router : Router) { }

  ngOnInit(): void {
    this.billId = this.route.snapshot.params['billId']
    this.prescriptionmedicinesservice.bindListMedicineBillByBillID(this.billId)

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


