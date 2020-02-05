import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  username = new FormControl('', [
    Validators.required,
    Validators.email
  ]);
  password = new FormControl('', [
    Validators.required,
    Validators.minLength(6),
    this.isExclamationAvailable
  ]);
  registerForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.registerForm = fb.group({
      username: this.username,
      password: this.password
    })
  }

  isExclamationAvailable(control: FormControl) {
    const hasExclamtion = control.value.indexOf("!") >= 0;
    return hasExclamtion ? null : { needExclamtion: true }
  }

  onRegister() {
    console.log(this.registerForm);
  }

  ngOnInit() {
  }

}
