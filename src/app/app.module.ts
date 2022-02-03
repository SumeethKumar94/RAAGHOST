import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DoctorsappointmentsComponent } from './doctorsappointments/doctorsappointments.component';
import { AppointmentComponent } from './doctorsappointments/appointment/appointment.component';
import { AppointmentListComponent } from './doctorsappointments/appointment-list/appointment-list.component';
import { AppointmentService } from './shared/appointment.service';
import { MedicinesComponent } from './medicines/medicines.component';
import { MedicineComponent } from './medicines/medicine/medicine.component';
import { MedicineListComponent } from './medicines/medicine-list/medicine-list.component';
import { PharmprescriptionsComponent } from './pharmprescriptions/pharmprescriptions.component';
import { PharmpresComponent } from './pharmprescriptions/pharmpres/pharmpres.component';
import { PharmpresListComponent } from './pharmprescriptions/pharmpres/pharmpres-list/pharmpres-list.component';
import { LabtechlabtestsComponent } from './labtechlabtests/labtechlabtests.component';
import { LabtechlabtestComponent } from './labtechlabtests/labtechlabtest/labtechlabtest.component';
import { LabtechlabtestListComponent } from './labtechlabtests/labtechlabtest/labtechlabtest-list/labtechlabtest-list.component';
import { PrescriptionmedicinesComponent } from './prescriptionmedicines/prescriptionmedicines.component';
import { PrescriptionmedicineComponent } from './prescriptionmedicines/prescriptionmedicine/prescriptionmedicine.component';
import { PrescriptionmedicineListComponent } from './prescriptionmedicines/prescriptionmedicine/prescriptionmedicine-list/prescriptionmedicine-list.component';
import { LabtechtestsComponent } from './labtechtests/labtechtests.component';
import { LabtechtestComponent } from './labtechtests/labtechtest/labtechtest.component';
import { LabtechtestListComponent } from './labtechtests/labtechtest/labtechtest-list/labtechtest-list.component';

@NgModule({
  declarations: [
    AppComponent,
    

    DoctorsappointmentsComponent,
    AppointmentComponent,
    AppointmentListComponent,
    PharmprescriptionsComponent,
    PharmpresComponent,
    PharmpresListComponent,
    LabtechlabtestsComponent,
    LabtechlabtestComponent,
    LabtechlabtestListComponent,
    PrescriptionmedicinesComponent,
    PrescriptionmedicineComponent,
    PrescriptionmedicineListComponent,
    LabtechtestsComponent,
    LabtechtestComponent,
    LabtechtestListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    FormsModule,
    HttpClientModule
    
  ],
  providers: [AppointmentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
