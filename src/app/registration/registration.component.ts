
import { Component, ErrorHandler, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  user = new User()
  message='';

  constructor(private registrationService: UserService, private route:Router, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  registerUser(){
    this.registrationService.registerUser(this.user).subscribe(data =>{
      this.user=data;
      this.route.navigateByUrl('/login')
      console.log("User successfully registered")
     
    },
    ErrorHandler =>{
      this.message="email already taken"
      this.toastr.show(this.message)
      console.log(this.message)
    })
  }

}
