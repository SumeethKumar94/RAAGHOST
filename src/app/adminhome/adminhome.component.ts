import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';


@Component({
  selector: 'app-adminhome',
  templateUrl: './adminhome.component.html',
  styleUrls: ['./adminhome.component.scss']
})
export class AdminhomeComponent implements OnInit {

  constructor(private authService: AuthService,private router:Router) { }
  loggedUser : string;
  ngOnInit(): void {
    this.loggedUser=localStorage.getItem("USERNAME")
  }
  logOut(){
    this.authService.logOut();
    this.router.navigateByUrl('login');
  }

}


