import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LabtechtestService } from 'src/app/shared/labtechtest.service';
import { LabtechtesttetsService } from 'src/app/shared/labtechtesttets.service'

@Component({
  selector: 'app-labtechtest-list',
  templateUrl: './labtechtest-list.component.html',
  styleUrls: ['./labtechtest-list.component.scss']
})
export class LabtechtestListComponent implements OnInit {
  //declare variable 
  page : number = 1;
  filter : string;
  testId:number;
  updateTestResultsObj:{}={PtId:"",TestId:"",UnitId:"",Normalrange: "",Result:""};
  generateBillObj:{}={TprescriptionId:"",AppointmentId:"",TotalPrice:"",UpdatedDate:""};

  constructor(public labtesttestservice : LabtechtesttetsService,public labtechtestservice : LabtechtestService,private route:ActivatedRoute,
  private toasterservice: ToastrService,private router:Router) { }

  ngOnInit(): void {
    this.testId=this.route.snapshot.params['testId']
    this.labtesttestservice.bindListLabtechtesttets(this.testId);
    this.labtechtestservice.bindListLabtechtest();
    this.labtesttestservice.bindListLabTestBillByPrescriptionId(this.testId);
  }
  updateTestResults(obj:any) {
    this.labtesttestservice.updateTestResults(obj).subscribe((result) => {
      console.log("updating test results........")
      console.log(result);
      this.toasterservice.success("Successfully updated test result");
    },
    error=>{
      console.log(error);
    }
    );}
  updateLabTestValues(presTestId:number){
    var table = document.getElementById("tbl_Test_Results") as HTMLTableElement;
    var el = (document.getElementById(""+presTestId)) as HTMLTableRowElement;
    var testidel = el.cells[0].firstElementChild as HTMLInputElement;
    var testId = Number(testidel.value);
    var resultel = el.cells[1].firstChild as HTMLInputElement;
    var result = Number(resultel.value);
    var normalel = el.cells[2].firstChild as HTMLInputElement;
    var normalValue = normalel.value;
    var unitIdel = el.cells[3].firstElementChild as HTMLInputElement;
    var unitId = Number(unitIdel.value);

    this.updateTestResultsObj = {PtId:presTestId,TestId:testId,UnitId:unitId,Normalrange: normalValue,Result:result}
    console.log(this.updateTestResultsObj);
    this.updateTestResults(this.updateTestResultsObj);
  }
  insertTestBill(obj:any) {
    this.labtesttestservice.insertTestBill(obj).subscribe((result) => {
      console.log("inserting medicine bill........")
      console.log(result);
      window.location.reload();
      this.toasterservice.success('Test bill has been inserted', 'CMSApp v2022');
    },
    error=>{
      console.log(error);
    }
    );
  }
  generateTestBill(){
    console.log("generateBill");
    var table = document.getElementById("tbl_tests_List") as HTMLTableElement;
 	//iterate trough rows
    var price=0;
    var totalprice = 0;
    for (var _i = 1;_i < table.rows.length; _i++) {
      price = Number(table.rows[_i].cells[4].innerHTML);
      totalprice = totalprice+price;
      price = 0;
      }
    console.log(totalprice);
    var input = document.getElementsByClassName("input_AppointmentId").item(0) as HTMLInputElement;
    var appointmentId = Number(input.value);

    this.generateBillObj={TprescriptionId:Number(this.testId),AppointmentId:appointmentId,TotalPrice:totalprice,UpdatedDate:new Date()};
    this.insertTestBill(this.generateBillObj);
  }
  viewTestBill(billId:number){
    this.router.navigate(['ViewTestbill',billId])
  }
  //addTestValues(test.PrescribedTestId)

}
