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
import { EmployeeListComponent } from './employees/employee-list/employee-list.component';
import { MedicineListComponent } from './medicines/medicine-list/medicine-list.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { EmployeesComponent } from './employees/employees.component';
import { PharmpresListComponent } from './pharmprescriptions/pharmpres/pharmpres-list/pharmpres-list.component';
import { PrescriptionmedicineComponent } from './prescriptionmedicines/prescriptionmedicine/prescriptionmedicine.component';
import { PrescriptionmedicineListComponent } from './prescriptionmedicines/prescriptionmedicine/prescriptionmedicine-list/prescriptionmedicine-list.component';
import { LabtechlabtestListComponent } from './labtechlabtests/labtechlabtest/labtechlabtest-list/labtechlabtest-list.component';
import { LabtechtestListComponent } from './labtechtests/labtechtest/labtechtest-list/labtechtest-list.component';

import { LoginComponent } from './login/login.component';
import { AuthGuard } from './shared/auth.guard';
import { MedicineComponent } from './medicines/medicine/medicine.component';
import { ViewMedicineBillComponent } from './view-medicine-bill/view-medicine-bill.component';
import { ViewTestBillComponent } from './view-test-bill/view-test-bill.component';
import { MainpageComponent } from './mainpage/mainpage.component';

const routes: Routes = [
  { path: '', component: MainpageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'main', component: MainpageComponent },

  { path: 'doctorhome', component: DoctorappointmentlistComponent, canActivate:[AuthGuard],data:{role:'3'}  },
  { path: 'doctorprescribe', component: DoctorhomeComponent, canActivate:[AuthGuard],data:{role:'3'}},
  { path: 'doctortest', component: DoctorlabtestComponent, canActivate:[AuthGuard],data:{role:'3'}},

  { path: 'ReceptionistHome', component: ReceptionisthomeComponent, canActivate:[AuthGuard],data:{role:'2'} },
  { path: 'appointmentlist', component: AppointmentListComponent , canActivate:[AuthGuard],data:{role:'2'}},
  { path: 'appointments', component: AppointmentsComponent , canActivate:[AuthGuard],data:{role:'2'}},
  { path: 'appointmentscheduling', component: AppointmentschedulingComponent , canActivate:[AuthGuard],data:{role:'2'}},
  { path: 'appointmentscheduling/:AppoinmentId', component: AppointmentschedulingComponent , canActivate:[AuthGuard],data:{role:'2'}},
  { path: 'consultation-bill', component: ConsultationBillComponent, canActivate:[AuthGuard],data:{role:'2'} },
  { path: 'consultation-bill/:AppointmentId', component: ConsultationBillComponent, canActivate:[AuthGuard],data:{role:'2'} },

  { path: 'patients', component: PatientsComponent , canActivate:[AuthGuard],data:{role:'2'}},
  { path: 'patientregistrartion', component: PatientregistrationComponent , canActivate:[AuthGuard],data:{role:'2'}},
  { path: 'patientregistrartion/:PatientId', component: PatientregistrationComponent , canActivate:[AuthGuard],data:{role:'2'} },
  { path: 'patient-list', component: PatientListComponent , canActivate:[AuthGuard],data:{role:'2'}},
  { path: 'patient-list/:PatientId', component: PatientListComponent , canActivate:[AuthGuard],data:{role:'2'}},


  { path: 'adminhome', component: AdminhomeComponent, canActivate:[AuthGuard],data:{role:'1'} },
  { path: 'employee-list', component: EmployeeListComponent , canActivate:[AuthGuard],data:{role:'1'} },
  { path: 'employeeregister', component: EmployeesComponent, canActivate:[AuthGuard],data:{role:'1'}  },
  { path: 'medicine-list', component: MedicineListComponent, canActivate:[AuthGuard],data:{role:'1'}  },
  { path: 'medicineadd', component: MedicineComponent , canActivate:[AuthGuard],data:{role:'1'} },
  { path: 'medicineadd/:MedicineId', component: MedicineComponent, canActivate:[AuthGuard],data:{role:'1'} },
  { path: 'employeeregister/:EmployeeId', component: EmployeesComponent, canActivate:[AuthGuard],data:{role:'1'} },
  
  { path: 'pharm-prescriptions', component: PharmpresListComponent ,canActivate:[AuthGuard],data:{role:'4'}},
  { path: 'pres-medicines/:presId', component: PrescriptionmedicineListComponent,canActivate:[AuthGuard],data:{role:'4'}},
  { path: 'ViewMedicineBill/:billId', component: ViewMedicineBillComponent,canActivate:[AuthGuard],data:{role:'4'}},
  { path: 'lab-labtests', component: LabtechlabtestListComponent ,canActivate:[AuthGuard],data:{role:'5'}},
  { path: 'lab-labtestDetails/:testId', component: LabtechtestListComponent,canActivate:[AuthGuard],data:{role:'5'}},
  { path: 'ViewTestbill/:billId', component: ViewTestBillComponent,canActivate:[AuthGuard],data:{role:'5'}}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
