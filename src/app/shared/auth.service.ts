import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) { }
 
  //get usename and password -
  public loginVerify(user: User) {
    //calling webservices and passing data
   
    console.log(user);

    return this.httpClient.get(environment.apiUrl + "/api/users/login/" + user.UserName + "&" + user.Password)

  }

  //LOGOUT
  public logOut() {
    localStorage.removeItem("USERNAME");
    localStorage.removeItem("ACCESSROLE");
    sessionStorage.removeItem("USERNAME");
    sessionStorage.removeItem("jwtToken");
  }
}
