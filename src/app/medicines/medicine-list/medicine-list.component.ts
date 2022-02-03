import { Component, OnInit } from '@angular/core';
import { MedicineService } from 'src/app/shared/medicine.service';

@Component({
  selector: 'app-medicine-list',
  templateUrl: './medicine-list.component.html',
  styleUrls: ['./medicine-list.component.scss']
})
export class MedicineListComponent implements OnInit {
  page: number = 1;
  filter: string;

  constructor(public medicineService: MedicineService) { }

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
  editMedicine(){
    confirm('Do you wantEdit  this record?')
  }

  //delete medicine
  deleteMedicine(medId: number) {
    if (confirm('Are you sure you want to Delete this record?')) {
      this.medicineService.deleteMedicine(medId).subscribe(
        response => {
          this.medicineService.bindListMedicines();
        },
        error => {
          console.log(error)
        }
      );
    }
  }



}
