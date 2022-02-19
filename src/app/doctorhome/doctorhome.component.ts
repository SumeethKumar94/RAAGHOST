import { Component, OnInit } from '@angular/core';

import { DoctorService } from '../shared/doctor.service';
//mport { NgForm } from '@angular/forms';
import {  FormBuilder,  FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AppComponent } from '../app.component';
import { Appointment } from '../shared/appointment';

@Component({
  selector: 'app-doctorhome',
  templateUrl: './doctorhome.component.html',
  styleUrls: ['./doctorhome.component.scss']
})
export class DoctorhomeComponent implements OnInit {
  page: number = 1;
  filter: string;
  ngForm: FormGroup;
  pm: number;
  
  pre:number;
  presc:{}={
   // PrescriptionId:""
    AppointmentId:"",
    DoctorId:1
  };
  presdetail:{}={
    PrescriptionId:"",
    //PDetailsId:"",
    PmId:""
    
  }


  constructor(public appointmentService: DoctorService,private toastrService:ToastrService,public app:AppComponent) {
    
  }
   
   
  ngOnInit(): void {

    this.appointmentService.PrescriptionAppointments();
    this.appointmentService.bindListMedicine();
    this.appointmentService.bindListDosage();
    
    
  }
  updatePrescription(Pmid: number) {
    console.log(Pmid);

  }
  deletePrescription(Pmid: number) {
    if (confirm('Are u want to delete this record')) {
      this.appointmentService.deletePrescription(Pmid).subscribe(
        response => {
          this.appointmentService.PrescriptionAppointments();

        }, error => {
          console.log(error);
        });


    }
  }
  onSubmit(form:NgForm){
    console.log(form.value);

    
    
    

     let addId =this.appointmentService.data.Pmid;
    if(addId==0||addId==null){
      //INSERT
     this.insertprescribemedRecord(form);

     this.presc={ AppointmentId:this.app.AppoinmentId,
      DoctorId:1};
       
      
    
     console.log(this.presc);

     console.log(this.app.AppoinmentId);
     this.appointmentService.data.Pmid =0;
     
    }else{
      console.log("not inserted");
    }

  }

  insertprescribemedRecord(form?:NgForm){
    console.log("inserting  prescribed medicinea record...");
    this.appointmentService.insertPrescribeMedicine(form.value).subscribe(
      (result)=>{
      console.log(result);
      this.pm = result;
      
      this.resetForm(form);
      this.toastrService.success('Prescription record has been inserted','CmsApp v2022');
      if(this.app.PrescriptionId==0||this.app.PrescriptionId==null){
       
        this.insertPrescription(this.presc);
       
      }else{

        this.presdetail={PrescriptionId:this.app.PrescriptionId,
          PmId:Number(this.pm)}
          this.insertPrescriptionDetail(this.presdetail);
      }
      

      },
      (error)=>{
        console.log(error);
      }
       
    
      
    )
  }
  insertPrescription(obj:any){
    console.log("inserting  prescription record...");
    this.appointmentService.insertPrescription(obj).subscribe((result)=>{
      console.log(result);
      this.pre= result;

      
     this.app.PrescriptionId = this.pre;
     console.log(this.presdetail);

     
     this.presdetail={PrescriptionId:this.app.PrescriptionId,
      PmId:Number(this.pm)}


     
      this.toastrService.success('added record has been inserted','CmsApp v2022');
      this.insertPrescriptionDetail(this.presdetail);
    },(error)=>{
      console.log(error);
    }

    )

  }
  insertPrescriptionDetail(obj:any){
    console.log("inserting  prescription detail record...");
    this.appointmentService.insertPrescriptiondetails(obj).subscribe((result)=>{
      console.log(result);
      this.toastrService.success('added detail record has been inserted','CmsApp v2022');
    },(error)=>{
      console.log(error);
    }

    )

  }
  resetForm(form?:NgForm){
    if(form!=null){
      form.resetForm();
      

    }
  }

}


