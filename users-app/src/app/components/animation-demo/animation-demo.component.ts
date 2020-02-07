import { state, style, transition, trigger, animate } from '@angular/animations';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-animation-demo',
  templateUrl: './animation-demo.component.html',
  styleUrls: ['./animation-demo.component.css'],
  animations: [
    trigger("divState", [
      state("normal", style({
        "background-color": "red",
        transform: "translateX(0px)"
      })),
      state("highlight", style({
        "background-color" : "blue",
        transform : "translateX(300px)"
      })),
      // transition("normal => highlight", animate(300)),
      transition("highlight <=> normal", animate(500))
    ])
  ],
  // changeDetection : ChangeDetectionStrategy.OnPush
})
export class AnimationDemoComponent implements OnInit {
  state = "highlight";
  
  onAnimate(){
    this.state === "normal" ? this.state = "highlight" : this.state = "normal";
  }
  constructor(private router : Router) { }

  ngOnInit() {
  }

  onNavigate(){
    this.router.navigate(['/login']);
  }

}
