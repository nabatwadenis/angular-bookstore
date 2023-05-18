import { Component, OnInit } from '@angular/core';
import { RegisterForm } from 'src/app/types/Auth';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form: RegisterForm ={
    email:'',
    password:'',
    confirm_password: '',
  }

  

  ngOnInit(): void { }
  constructor(private authServices: AuthService){}

  submit(){
    
    this.authServices.register(this.form);
  }
  isLoading(){
    return this.authServices.isLoading;
  }

}
