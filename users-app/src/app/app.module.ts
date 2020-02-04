import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';
import { UserImageComponent } from './components/users/user-image/user-image.component';
import { UserDetailComponent } from './components/users/user-detail/user-detail.component';
import { HighlightDirective } from './directives/highlight.directive';
import { PipeDemoComponent } from './components/pipe-demo/pipe-demo.component';
import { NationalCodePipe } from './pipes/national-code.pipe';
import { FilterPipe } from './pipes/filter.pipe';

@NgModule({
  declarations: [
    AppComponent, UsersComponent, UserImageComponent, 
    UserDetailComponent, HighlightDirective, PipeDemoComponent,
    NationalCodePipe,
    FilterPipe
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
