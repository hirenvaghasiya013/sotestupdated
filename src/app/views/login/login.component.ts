import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  isSubmitted: Boolean = false;

  constructor( private fb: FormBuilder,
    private router: Router) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      emailId: ['', [Validators.required, , Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  submitLoginForm(form){
    this.isSubmitted = true;
    if(form.emailId != '' && form.password != '' && this.loginForm.valid){
      this.router.navigate(['dashboard']);
    }
  }

}
