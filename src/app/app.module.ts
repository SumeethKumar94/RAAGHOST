import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { DoctorService} from './shared/doctor.service';
import { AppComponent } from './app.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
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
import{MedicineService} from './shared/medicine.service';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeListComponent } from './employees/employee-list/employee-list.component'
import { EmployeeService } from './shared/employee.service';
import { AdminhomeComponent } from './adminhome/adminhome.component';
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
import { DoctorhomeComponent } from './doctorhome/doctorhome.component';
import { DoctorappointmentlistComponent } from './doctorhome/doctorappointmentlist/doctorappointmentlist.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DoctorlabtestComponent } from './doctorlabtest/doctorlabtest.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './shared/auth.guard';
import {AuthInterceptor } from './shared/auth.interceptor';
import { EmployeeComponent } from './employees/employee/employee.component';
import { RecappointmentService } from './shared/recappointment.service';
import { PrescriptionmedicinesService } from './shared/prescriptionmedicines.service';
import { PharmacistPrescriptionService } from './shared/pharmacist-prescription.service';
import { LabtechtestService } from './shared/labtechtest.service';
import { LabtechtesttetsService } from './shared/labtechtesttets.service';
import { ViewMedicineBillComponent } from './view-medicine-bill/view-medicine-bill.component';


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
    FinalbillComponent,
    AppointmentListComponent,
    EmployeesComponent,
    EmployeeListComponent,
    AdminhomeComponent,
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
    LabtechtestListComponent,
    DoctorhomeComponent,
    DoctorappointmentlistComponent,
    LoginComponent,
    EmployeeComponent,
    DoctorlabtestComponent,
    ViewMedicineBillComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()

    
  ],
  providers: [MedicineService,
    EmployeeService,PatientService,DoctorService,
    RecappointmentService,PrescriptionmedicinesService,
    PharmacistPrescriptionService,LabtechtestService,
    LabtechtesttetsService,
    AuthGuard,
    {
      provide :HTTP_INTERCEPTORS,
      useClass : AuthInterceptor,
      multi : true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
