import { Component, OnInit } from '@angular/core';
import { CounterType } from 'src/app/store/counter.reducer';
import { Store } from '@ngrx/store';
import * as fromActions from '../../store/counter.action';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  counter : number;
  constructor(private store : Store<CounterType>) { }

  ngOnInit() {
    this.store.dispatch(new fromActions.Init());
    this.store.subscribe(response => {
      this.counter = response['ctr'].counter;
    })
  }

  onIncrement(){
    // this.store.dispatch({type : "INCREMENT"});
    this.store.dispatch(new fromActions.Increment());
  }

  onDecrement(){
    this.store.dispatch(new fromActions.Decrement());
  }

  onAddNumber(num : number){
    this.store.dispatch(new fromActions.AddNumber(num));
  }

  onSubstractNumber(num: number){
    this.store.dispatch(new fromActions.SubtractNumber(num));
  }

}
