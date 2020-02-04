import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  myClasses = {'my-border' : true, 'my-font' : false}

  @Input('user') user : any;

  onToggleClasses(){
    this.myClasses["my-border"] = !this.myClasses["my-border"];
    this.myClasses["my-font"] = !this.myClasses["my-font"];
  }

  constructor() { }

  ngOnInit() {
  }

}
