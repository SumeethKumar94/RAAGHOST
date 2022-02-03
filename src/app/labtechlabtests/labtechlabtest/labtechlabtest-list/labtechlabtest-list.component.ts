import { Component, OnInit } from '@angular/core';
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
  
  constructor(public labtechtestservice : LabtechtestService) { }

  ngOnInit(): void {
    this.labtechtestservice.bindListLabtechtest();
  }

}
