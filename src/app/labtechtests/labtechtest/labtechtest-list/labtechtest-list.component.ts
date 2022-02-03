import { Component, OnInit } from '@angular/core';
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

  constructor(public labtesttestservice : LabtechtesttetsService) { }

  ngOnInit(): void {
    this.labtesttestservice.bindListLabtechtesttets(2);
  }

}
