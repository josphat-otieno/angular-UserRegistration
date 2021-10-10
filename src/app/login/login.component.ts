
import { Component, ErrorHandler, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = new User()
  message = ''
  constructor(private loginService: UserService, private route:Router, private toastr:ToastrService) { }

  ngOnInit(): void {
  }

  loginUser(){
    this.loginService.loginUser(this.user).subscribe(data=>{
      this.user=data;
      this.toastr.success("You have successfully logged in")  
      console.log("User login successful")
      

    }, 
    ErrorHandler =>{
    this.message="Invalid Login details";
    this.toastr.show(this.message)
    console.log(this.message);
        
  })
  }

}
