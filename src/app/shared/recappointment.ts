import { DatePipe, getLocaleDateTimeFormat } from "@angular/common";

export class Recappointment {
    AppoinmentId : number =0;
    PatientId :number = 0;
    EmployeeId  : number = 2;
    FirstName :string='';
    DoctorName : string='';
    TokenDate : Date = new Date;
    DoctorId : number=0;
    TokenNo : number=0;
    CBillId : number  =0;
    ConsultationFee : number=0;
    UpdatedDate : Date = new Date('2022-02-01');
}
