import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../shared/user';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  //declare variables
  loginForm!: FormGroup;
  isSubmitted = false;
  error = '';
  loginUser: any = new User();


  //constructor injection
  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService) { }

  ngOnInit(): void {

    //create a reactive form model
    this.loginForm = this.formBuilder.group(
      {
        //form control names
        UserName: ['', [Validators.required]],
        Password: ['', [Validators.required]]
      }
    );
  }

  //get controls for validation
  get formControls() {
    return this.loginForm.controls;
  }

  //login Verify
  loginCredentials() {
    this.isSubmitted = true;
    if (this.loginForm.invalid) {
      console.log("Submitted invalid Credentials ");
      this.error = "";
      return;
    }
    if (this.loginForm.valid) {
      console.log("submitted valid credentials")
      this.error = "";
      //calling method from authservice 
      this.authService.loginVerify(this.loginForm.value).subscribe
        (
          data => {
            console.log(data);
            this.loginUser = data;
            //UserName,RoleId and Token
            sessionStorage.setItem('jwtToken',this.loginUser.token)


            //check the role based on roleid ,it redirects to respective page
            if (this.loginUser.RoleId === 1) {
              console.log("ADMIN");

              this.router.navigateByUrl('/adminhome');
              localStorage.setItem("USERNAME", this.loginUser.UserName);
              localStorage.setItem("ACCESSROLE", this.loginUser.RoleId);
              sessionStorage.setItem("USERNAME", this.loginUser.UserName);

            }
            else if (this.loginUser.RoleId === 2) {
              console.log("Receptionist");
              localStorage.setItem("USERNAME", this.loginUser.UserName);
              localStorage.setItem("ACCESSROLE", this.loginUser.RoleId);
              sessionStorage.setItem("USERNAME", this.loginUser.UserName);

              this.router.navigateByUrl('/ReceptionistHome');
            }
            else if (this.loginUser.RoleId === 3) {
              console.log("Doctor");
              localStorage.setItem("USERNAME", this.loginUser.UserName);
              localStorage.setItem("ACCESSROLE", this.loginUser.RoleId);
              sessionStorage.setItem("USERNAME", this.loginUser.UserName);

              this.router.navigateByUrl('/doctor');
            }
            else if (this.loginUser.RoleId === 4) {
              console.log("Pharmacist");
              localStorage.setItem("USERNAME", this.loginUser.UserName);
              localStorage.setItem("ACCESSROLE", this.loginUser.RoleId);
              sessionStorage.setItem("USERNAME", this.loginUser.UserName);

              this.router.navigateByUrl('/pharmacist');
            }
            else if (this.loginUser.RoleId === 5) {
              console.log("Lab Technician");
              localStorage.setItem("USERNAME", this.loginUser.UserName);
              localStorage.setItem("ACCESSROLE", this.loginUser.RoleId);
              sessionStorage.setItem("USERNAME", this.loginUser.UserName);

              this.router.navigateByUrl('/labtechnician');
            }
            else {
              this.error = "Sorry ! NOT authenticate/authorize to access this module"
            }
          },
          error => {
            this.error = "Invalid username or password try again!"
          }
        );
    }
  }
  
}
