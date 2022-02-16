import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppointmentListComponent } from './appointments/appointment-list/appointment-list.component';
import { AppointmentsComponent } from './appointments/appointments.component';
import { ReceptionisthomeComponent} from './receptionisthome/receptionisthome.component';
import {AppointmentschedulingComponent} from './appointments/appointmentscheduling/appointmentscheduling.component';
import { ConsultationBillComponent } from './consultation-bill/consultation-bill.component';
import { PatientsComponent } from './patients/patients.component';
import { PatientregistrationComponent } from './patients/patientregistration/patientregistration.component';
import { PatientListComponent } from './patients/patient-list/patient-list.component';
import { DoctorappointmentlistComponent } from './doctorhome/doctorappointmentlist/doctorappointmentlist.component';
import { DoctorhomeComponent } from './doctorhome/doctorhome.component';
import { DoctorlabtestComponent } from './doctorlabtest/doctorlabtest.component';

const routes: Routes = [

  { path: 'ReceptionistHome', component: ReceptionisthomeComponent },
  { path: 'appointmentlist', component: AppointmentListComponent },
  { path: 'appointments', component: AppointmentsComponent },
  { path: 'appointmentscheduling', component: AppointmentschedulingComponent },
  { path: 'consultation-bill', component: ConsultationBillComponent },
  { path: 'patients', component: PatientsComponent },
  { path: 'patientregistrartion', component: PatientregistrationComponent },
  { path: 'patient-list', component: PatientListComponent },
  { path: 'doctorhome', component: DoctorappointmentlistComponent },
  { path: 'doctorprescribe', component: DoctorhomeComponent },
  { path: 'doctortest', component: DoctorlabtestComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
