import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MedicinesComponent } from './medicines/medicines.component';
import { MedicineComponent } from './medicines/medicine/medicine.component';
import { MedicineListComponent } from './medicines/medicine-list/medicine-list.component';
import { PatientsComponent } from './patients/patients.component';
import { PatientListComponent } from './patients/patient-list/patient-list.component';
import {PatientService} from './shared/patient.service';
import { AppointmentsComponent } from './appointments/appointments.component';
import { ReceptionisthomeComponent } from './receptionisthome/receptionisthome.component';
import { PatientregistrationComponent } from './patients/patientregistration/patientregistration.component';
import {AppointmentListComponent} from 'src/app/appointments/appointment-list/appointment-list.component';
import { AppointmentschedulingComponent } from './appointments/appointmentscheduling/appointmentscheduling.component';
import { ConsultationBillComponent } from './consultation-bill/consultation-bill.component';
import { FinalbillComponent } from './consultation-bill/finalbill/finalbill.component'

@NgModule({
  declarations: [
    AppComponent,
    MedicinesComponent,
    MedicineComponent,
    MedicineListComponent,
    PatientsComponent,
    PatientListComponent,
    AppointmentsComponent,
    ReceptionisthomeComponent,
    PatientregistrationComponent,
    AppointmentListComponent,
    AppointmentschedulingComponent,
    ConsultationBillComponent,
    FinalbillComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    FormsModule,
    HttpClientModule
    
  ],
  providers: [PatientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
