import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import{Medicine} from './medicine'

@Injectable({
  providedIn: 'root'
})
export class MedicineService {
  // retrieve all data from getAll Employees  --http  --httpclient   --httpclientmodule
  medicines: Medicine[];  //to store allemployee details
  //to store only 1 employee details (storeit in a variable called formdata)
 formData: Medicine=new Medicine();

  constructor(private httpClient:HttpClient) { }
  
  //get all medicine details
  getAllMedicines():Observable<any>{
    return this.httpClient.get(environment.apiUrl+'/api/medicines');
  }

  //2 get medicines
  bindListMedicines(){
    this.httpClient.get(environment.apiUrl+'/api/medicines')
    .toPromise().then(
      response=>{
        console.log("from Service ");
        console.log(response);
        this.medicines=response as Medicine[]
      }
    );
  }

  //delete employee
  deleteMedicine(id:number){
    return this.httpClient.delete(environment.apiUrl+"/api/medicines/"+id);
  }
  
  //edit employee
  editMedicine(){
    return this.httpClient.get(environment.apiUrl+"/api/medicines");
  }
}
