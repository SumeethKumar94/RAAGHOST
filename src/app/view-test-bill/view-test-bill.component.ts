import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Labbillcheck } from '../shared/labbillcheck';
import { LabtechtesttetsService } from '../shared/labtechtesttets.service';

@Component({
  selector: 'app-view-test-bill',
  templateUrl: './view-test-bill.component.html',
  styleUrls: ['./view-test-bill.component.scss']
})
export class ViewTestBillComponent implements OnInit {

  billId : number=0;
  labbillCheck:Labbillcheck[];
  presId:number;
  constructor(public labtesttestservice : LabtechtesttetsService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.billId = this.route.snapshot.params['billId']
    console.log(this.billId);
    this.labtesttestservice.bindListLabTestBillById(this.billId);
    this.labtesttestservice.getTestBillById(this.billId).subscribe(result=>{
      console.log("mnjnuuuu");
      this.presId = result["TprescriptionId"];
    });
    this.labtesttestservice.bindListLabtechtesttets(this.presId);
  }
  printComponent() {
    let printContents = document.getElementById("html").innerHTML;
    let originalContents = document.body.innerHTML;
  
    document.body.innerHTML = printContents;
  
    window.print();
  
    document.body.innerHTML = originalContents;
  }

}
