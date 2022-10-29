import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { RegisterUser } from 'src/Modal/registeruser';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  register : RegisterUser = {}
  constructor(private authService : AuthService) { }

  ngOnInit(): void {
  }
  registerUser(){
    let formvalue = this.register;
    this.authService.registerUser(formvalue).subscribe((res)=>{
     console.log(123123,res.message)
    })
  }
}
