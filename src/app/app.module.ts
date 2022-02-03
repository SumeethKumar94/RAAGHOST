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
import { MedicinesComponent } from './medicines/medicines.component';
import { MedicineComponent } from './medicines/medicine/medicine.component';
import { MedicineListComponent } from './medicines/medicine-list/medicine-list.component';
import{MedicineService} from './shared/medicine.service';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeListComponent } from './employees/employee-list/employee-list.component'
import { EmployeeService } from './shared/employee.service';
import { AdminhomeComponent } from './adminhome/adminhome.component';

@NgModule({
  declarations: [
    AppComponent,
    MedicinesComponent,
    MedicineComponent,
    MedicineListComponent,
    DoctorsappointmentsComponent,
    AppointmentComponent,
    AppointmentListComponent,
    EmployeesComponent,
    EmployeeListComponent,
    AdminhomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    FormsModule,
    HttpClientModule
    
  ],
  providers: [MedicineService,
    EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
