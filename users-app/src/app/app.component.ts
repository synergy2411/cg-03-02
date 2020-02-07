import { Component, ChangeDetectorRef } from '@angular/core';
import { DataService } from './services/data.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My Awesome User App';
  showUser :boolean = true;
  htmlSnippets = "Some Script <script>alert('Hello JavaScript!')</script>";
  onToggle(){
    this.showUser = !this.showUser;
  }

  constructor(private dataService : DataService,
              private sanitize : DomSanitizer,
              private cdRef : ChangeDetectorRef){
                // this.cdRef.
                // this.sanitize.
              }

  onIncrease(){
    this.dataService.counter++;
  }
}
