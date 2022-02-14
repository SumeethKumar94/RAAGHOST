import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LabtechtestService } from 'src/app/shared/labtechtest.service'
@Component({
  selector: 'app-labtechlabtest-list',
  templateUrl: './labtechlabtest-list.component.html',
  styleUrls: ['./labtechlabtest-list.component.scss']
})
export class LabtechlabtestListComponent implements OnInit {

  //declare variable
  page: number = 1;
  filter: string;
  
  constructor(public labtechtestservice : LabtechtestService,private router:Router) { }

  ngOnInit(): void {
    this.labtechtestservice.bindListLabtechtest();
  }

  // show tests under one test prescription
  showTests(testId:number){
    console.log(testId);
    this.router.navigate(['lab-labtestDetails',testId]);
  }
}
