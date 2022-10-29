import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/auth.service';
import { Login } from 'src/Modal/login';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  submitted = false;
  login : Login ={}
  loginForm = new FormGroup({
    name: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)

  });
  constructor(private authServices : AuthService ,private fb: FormBuilder) { }

  ngOnInit(): void {
    
  }
  get name() { return this.loginForm.get('name'); }
  get password() { return this.loginForm.get('password'); }
  onSubmit(){
    // this.authServices.login(this.name?.value,this.password?.value).subscribe((data)=>{
    //   console.log(12312222,data)
    // })
  }
}
