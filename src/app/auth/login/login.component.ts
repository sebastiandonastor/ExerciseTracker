import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm : FormGroup;
  submitedOnce : boolean = false;
  constructor(private fb : FormBuilder) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email : ['', [Validators.required, Validators.email]],
      password : ['', [Validators.required]]
    })

    console.log(this.loginForm);
  }
  
  onSubmit(){
    this.submitedOnce = true;

    console.log(this.loginForm);
  }
}
