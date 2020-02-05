import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-observable-demo',
  templateUrl: './observable-demo.component.html',
  styleUrls: ['./observable-demo.component.css']
})
export class ObservableDemoComponent implements OnInit {

  packages : string[] = [];
  unsub : Subscription;

  data$ = Observable.create(observer => {
    setTimeout(() => {
      observer.next("First Package")
    }, 1000)
    setTimeout(() => {
      observer.next("Second Package")
    }, 2000)
    setTimeout(() => {
      observer.next("Third Package")
    }, 4000)
    setTimeout(() => {
      observer.complete();
    }, 5000)
  })

  onSubscribe(){
    this.unsub = this.data$.subscribe(pkg => this.packages.push(pkg))
  }

  onUnsubscribe(){
    this.unsub.unsubscribe();
  }

  constructor() { }

  ngOnInit() {
  }

}
