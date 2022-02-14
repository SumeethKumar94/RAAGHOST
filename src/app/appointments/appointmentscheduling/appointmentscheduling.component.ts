import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { PatientService } from 'src/app/shared/patient.service';

@Component({
  selector: 'app-appointmentscheduling',
  templateUrl: './appointmentscheduling.component.html',
  styleUrls: ['./appointmentscheduling.component.scss']
})
export class AppointmentschedulingComponent implements OnInit {
  PatientId: number;
  loggedUser: string;

  constructor(public patientService: PatientService,
    private route: ActivatedRoute,
    private toastrService: ToastrService,
    private router: Router) { }

  ngOnInit(): void 
  {

    this.patientService.bindListDepartments();
    //get empId from ActivateRoute
    this.PatientId = this.route.snapshot.params['PatientId'];

    //get employee by id
    if (this.PatientId != 0 || this.PatientId != null) {
      //get employee
      this.patientService.getPatientById(this.PatientId).subscribe
        (
          result => {
            console.log(result);
            //assign this result to empService formData
            this.patientService.formData1 = Object.assign({}, result);
          },
          error => {

          }
        );
    }
  }

      //submit form
      onSubmit(form: NgForm) {
        console.log(form.value);
        let PlanId = this.patientService.formData.PatientId;
    
      }

}

