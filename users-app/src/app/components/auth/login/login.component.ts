import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  onLogin(f : NgForm){
    console.log("Username : ", f.value.username);
    console.log("Password : ", f.value.password);
  }

  constructor() { }

  ngOnInit() {
  }

}
