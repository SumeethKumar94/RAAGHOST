import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
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
  postBillObj:{}={PrescriptionId:"",AppointmentId:"",MedicinePrice:"",UpdatedDate: new Date()}
  constructor(public prescriptionmedicinesservice : PrescriptionmedicinesService,private toasterservice: ToastrService,
  private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.presId = this.route.snapshot.params['presId']
    this.prescriptionmedicinesservice.bindListPrescriptionmedicines(this.presId);
    this.prescriptionmedicinesservice.bindListMedicineBill(this.presId)
  }
  insertMedBill(obj:any) {
    this.prescriptionmedicinesservice.insertMedicineBill(obj).subscribe((result) => {
      console.log("inserting medicine bill........")
      console.log(result);
    },
    error=>{
      console.log(error);
    }
    );
  }
  generateMedicineBill(){
    var table = document.getElementById("tbl_Medicine_List") as HTMLTableElement;
 	//iterate trough rows
    var quantity=0;
    var priceperUnit=0;
    var totalprice = 0;
    for (var _i = 1;_i < table.rows.length; _i++) {
        quantity = Number(table.rows[_i].cells[2].innerHTML);
        priceperUnit = Number(table.rows[_i].cells[3].innerHTML);
        totalprice = totalprice+quantity*priceperUnit;
        quantity = 0;
        priceperUnit = 0;
        }
    console.log(totalprice);
    var input = document.getElementsByClassName("input_AppointmentId").item(0) as HTMLInputElement;
    var appointmentId = Number(input.value);

    this.postBillObj = {PrescriptionId:Number(this.presId),AppointmentId:appointmentId,MedicinePrice:totalprice,UpdatedDate: new Date()};
    this.insertMedBill(this.postBillObj);
    this.toasterservice.success('Medicine bill has been inserted', 'CMSApp v2022');
    window.location.reload();

  }
  viewMedicineBill(billId:number){
    this.router.navigate(['ViewMedicineBill',billId])
  }
}
