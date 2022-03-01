import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MedicineService } from 'src/app/shared/medicine.service';

@Component({
  selector: 'app-medicine-list',
  templateUrl: './medicine-list.component.html',
  styleUrls: ['./medicine-list.component.scss']
})
export class MedicineListComponent implements OnInit {
  page: number = 1;
  filter: string;

  constructor(public medicineService: MedicineService,private router:Router) { }

  ngOnInit(): void {
    console.log("Welcome...");
    //this.getMedicines();   //calling 1st method
    this.medicineService.bindListMedicines();
  }

  //1
  getMedicines() {
    //call service method
    this.medicineService.getAllMedicines().subscribe(
      response => {
        console.log('retriving data from list');
        console.log(response);
      },
      error => {
        console.log('Something Wrong');
        console.log(error);
      }
    );
  }

  //edit Medicine
  updateMedicine(MedicineId:number){
    console.log(MedicineId);
    this.router.navigate(['medicineadd',MedicineId])

  }

  //delete medicine
  // deleteMedicine(medId: number) {
  //   if (confirm('Are you sure you want to Delete this record?')) {
  //     this.medicineService.deleteMedicine(medId).subscribe(
  //       response => {
  //         this.medicineService.bindListMedicines();
  //       },
  //       error => {
  //         console.log(error)
  //       }
  //     );
  //   }
  // }

  navi(){
    this.router.navigateByUrl('/adminhome');
   }



}
