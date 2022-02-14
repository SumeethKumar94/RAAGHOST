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
<<<<<<< HEAD
import { EmployeeListComponent } from './employees/employee-list/employee-list.component';
import { MedicineListComponent } from './medicines/medicine-list/medicine-list.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { EmployeesComponent } from './employees/employees.component';
=======
import { PharmpresListComponent } from './pharmprescriptions/pharmpres/pharmpres-list/pharmpres-list.component';
import { PrescriptionmedicineComponent } from './prescriptionmedicines/prescriptionmedicine/prescriptionmedicine.component';
import { PrescriptionmedicineListComponent } from './prescriptionmedicines/prescriptionmedicine/prescriptionmedicine-list/prescriptionmedicine-list.component';
import { LabtechlabtestListComponent } from './labtechlabtests/labtechlabtest/labtechlabtest-list/labtechlabtest-list.component';
import { LabtechtestListComponent } from './labtechtests/labtechtest/labtechtest-list/labtechtest-list.component';
>>>>>>> 2ec9c807e42c8db28ba6089c9e48b46235218f1d

const routes: Routes = [

  { path: '', component: ReceptionisthomeComponent },
  { path: 'ReceptionistHome', component: ReceptionisthomeComponent },
  { path: 'appointmentlist', component: AppointmentListComponent },
  { path: 'appointments', component: AppointmentsComponent },
  { path: 'appointmentscheduling', component: AppointmentschedulingComponent },
  { path: 'consultation-bill', component: ConsultationBillComponent },
  { path: 'patients', component: PatientsComponent },
  { path: 'patientregistrartion', component: PatientregistrationComponent },
  { path: 'patient-list', component: PatientListComponent },
<<<<<<< HEAD
  { path: 'adminhome', component: AdminhomeComponent},
  { path: 'employee-list', component: EmployeeListComponent },
  { path: 'employeeregister', component: EmployeesComponent },
  { path: 'medicine-list', component: MedicineListComponent },
  
=======
  { path: 'pharm-prescriptions', component: PharmpresListComponent },
  { path: 'pres-medicines/:presId', component: PrescriptionmedicineListComponent },
  { path: 'lab-labtests', component: LabtechlabtestListComponent },
  { path: 'lab-labtestDetails/:testId', component: LabtechtestListComponent },
>>>>>>> 2ec9c807e42c8db28ba6089c9e48b46235218f1d

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
