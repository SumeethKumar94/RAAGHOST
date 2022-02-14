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
import { PharmpresListComponent } from './pharmprescriptions/pharmpres/pharmpres-list/pharmpres-list.component';
import { PrescriptionmedicineComponent } from './prescriptionmedicines/prescriptionmedicine/prescriptionmedicine.component';
import { PrescriptionmedicineListComponent } from './prescriptionmedicines/prescriptionmedicine/prescriptionmedicine-list/prescriptionmedicine-list.component';
import { LabtechlabtestListComponent } from './labtechlabtests/labtechlabtest/labtechlabtest-list/labtechlabtest-list.component';
import { LabtechtestListComponent } from './labtechtests/labtechtest/labtechtest-list/labtechtest-list.component';

const routes: Routes = [

  { path: 'ReceptionistHome', component: ReceptionisthomeComponent },
  { path: 'appointmentlist', component: AppointmentListComponent },
  { path: 'appointments', component: AppointmentsComponent },
  { path: 'appointmentscheduling', component: AppointmentschedulingComponent },
  { path: 'consultation-bill', component: ConsultationBillComponent },
  { path: 'patients', component: PatientsComponent },
  { path: 'patientregistrartion', component: PatientregistrationComponent },
  { path: 'patient-list', component: PatientListComponent },
  { path: 'pharm-prescriptions', component: PharmpresListComponent },
  { path: 'pres-medicines/:presId', component: PrescriptionmedicineListComponent },
  { path: 'lab-labtests', component: LabtechlabtestListComponent },
  { path: 'lab-labtestDetails/:testId', component: LabtechtestListComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
