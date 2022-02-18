import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { RecappointmentService } from 'src/app/shared/recappointment.service';

@Component({
  selector: 'app-finalbill',
  templateUrl: './finalbill.component.html',
  styleUrls: ['./finalbill.component.scss']
})
export class FinalbillComponent implements OnInit {

  CBillId: number;

  constructor(public recappointmentService: RecappointmentService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.CBillId = this.route.snapshot.params['CBillId'];
    this.recappointmentService.bindListConsultationBillByBillID(this.CBillId);

  }

  printComponent(cmpName) {
    let printContents = document.getElementById(cmpName).innerHTML;
    let originalContents = document.body.innerHTML;

    document.body.innerHTML = printContents;

    window.print();

    document.body.innerHTML = originalContents;
}

}
