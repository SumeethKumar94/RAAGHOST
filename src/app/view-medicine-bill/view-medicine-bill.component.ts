import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { PrescriptionmedicinesService } from '../shared/prescriptionmedicines.service';

@Component({
  selector: 'app-view-medicine-bill',
  templateUrl: './view-medicine-bill.component.html',
  styleUrls: ['./view-medicine-bill.component.scss']
})
export class ViewMedicineBillComponent implements OnInit {

  billId : number;
  constructor(public prescriptionmedicinesservice : PrescriptionmedicinesService,private toasterservice: ToastrService,
    private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.billId = this.route.snapshot.params['billId']
    this.prescriptionmedicinesservice.bindListMedicineBillByBillID(this.billId)

  }
}
