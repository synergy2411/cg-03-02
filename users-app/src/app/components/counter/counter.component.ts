import { Component, OnInit } from '@angular/core';
import { CounterType } from 'src/app/store/counter.reducer';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  counter : number;
  constructor(private store : Store<CounterType>) { }

  ngOnInit() {
    this.store.subscribe(response => {
      this.counter = response['ctr'].counter;
    })
  }

  onIncrement(){
    this.store.dispatch({type : "INCREMENT"});
  }

}
