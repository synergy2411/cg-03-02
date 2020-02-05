import { Component } from '@angular/core';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My Awesome User App';
  showUser :boolean = true;

  onToggle(){
    this.showUser = !this.showUser;
  }

  constructor(private dataService : DataService){}

  onIncrease(){
    this.dataService.counter++;
  }
}
