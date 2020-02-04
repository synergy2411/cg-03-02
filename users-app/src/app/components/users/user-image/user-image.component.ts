import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-image',
  templateUrl: './user-image.component.html',
  styleUrls: ['./user-image.component.css']
})
export class UserImageComponent implements OnInit {

  @Input('user') user : any;
  @Output('childEvent') childEvent = new EventEmitter<any>();

  onMoreInfo(user : any){
    this.childEvent.emit(user);
  }

  constructor() { }

  ngOnInit() {
  }

}
