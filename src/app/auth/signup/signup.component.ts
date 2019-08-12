import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  maxDate: Date;
  constructor(private fb : FormBuilder) { }

  ngOnInit() {
    //material
    this.maxDate = new Date();
    this.maxDate.setFullYear(this.maxDate.getFullYear() - 18);

    this.signupForm = this.fb.group(
      {
        email: ['', [Validators.required,Validators.email]],
        password: ['', [Validators.required, Validators.min(6)]],
        birthday : [{value: null}, [Validators.required]]
      }
    );
  }

  onSubmit(){
    console.log(this.signupForm);
  }

}
