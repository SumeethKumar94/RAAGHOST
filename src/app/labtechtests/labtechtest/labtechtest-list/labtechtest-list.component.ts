import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

  constructor(public labtesttestservice : LabtechtesttetsService,public labtechtestservice : LabtechtestService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.testId=this.route.snapshot.params['testId']
    this.labtesttestservice.bindListLabtechtesttets(this.testId);
    this.labtechtestservice.bindListLabtechtest();
  }

}
