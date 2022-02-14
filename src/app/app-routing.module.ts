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

const routes: Routes = [

  { path: 'ReceptionistHome', component: ReceptionisthomeComponent },
  { path: 'appointmentlist', component: AppointmentListComponent },
  { path: 'appointments', component: AppointmentsComponent },
  { path: 'appointmentscheduling', component: AppointmentschedulingComponent },
  { path: 'consultation-bill', component: ConsultationBillComponent },
  { path: 'patients', component: PatientsComponent },
  { path: 'patientregistrartion', component: PatientregistrationComponent },
  { path: 'patient-list', component: PatientListComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
