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

@NgModule({
  declarations: [
    AppComponent,
    DoctorsappointmentsComponent,
    AppointmentComponent,
    AppointmentListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    FormsModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
