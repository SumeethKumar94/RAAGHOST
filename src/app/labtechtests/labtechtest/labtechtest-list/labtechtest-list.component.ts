import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  updateTestResultsObj:{}={PtId:"",TestId:"",UnitId:"",Normalrange: "",Result:""}

  constructor(public labtesttestservice : LabtechtesttetsService,public labtechtestservice : LabtechtestService,private route:ActivatedRoute,
  private toasterservice: ToastrService) { }

  ngOnInit(): void {
    this.testId=this.route.snapshot.params['testId']
    this.labtesttestservice.bindListLabtechtesttets(this.testId);
    this.labtechtestservice.bindListLabtechtest();
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
  //addTestValues(test.PrescribedTestId)

}
