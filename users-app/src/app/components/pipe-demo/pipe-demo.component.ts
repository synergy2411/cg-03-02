import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-demo',
  templateUrl: './pipe-demo.component.html',
  styleUrls: ['./pipe-demo.component.css']
})
export class PipeDemoComponent implements OnInit {
  filteredStatus = "";
  
  todos = [{
    label : "Pot the plant",
    status : "done"
  },{
    label : "Renew insurance",
    status : "pending"
  },{
    label : "Read the books",
    status : "done"
  },{
    label : "buy the pulses",
    status : "pending"
  }]

  contact_no  = 987654321;

  promiseData = new Promise((resolve, reject)=>{
    // const ms = Math.round(Math.random() * 1000);

    setTimeout(() => {
      resolve( "Here the data comes");
    },3000);
  })


  constructor() { }

  ngOnInit() {
  }

}
