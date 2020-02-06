import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';
import { UserImageComponent } from './components/users/user-image/user-image.component';
import { UserDetailComponent } from './components/users/user-detail/user-detail.component';
import { HighlightDirective } from './directives/highlight.directive';
import { PipeDemoComponent } from './components/pipe-demo/pipe-demo.component';
import { NationalCodePipe } from './pipes/national-code.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { DataService } from './services/data.service';
import { ObservableDemoComponent } from './components/observable-demo/observable-demo.component';
import { TodoDataService } from './services/todo-data.service';
import { TodoComponent } from './components/todo/todo.component';

@NgModule({
  declarations: [
    AppComponent, UsersComponent, UserImageComponent, 
    UserDetailComponent, HighlightDirective, PipeDemoComponent,
    NationalCodePipe,
    FilterPipe,
    LoginComponent,
    RegisterComponent,
    ObservableDemoComponent,
    TodoComponent
  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule, HttpClientModule,
    InMemoryWebApiModule.forRoot(TodoDataService)
  ],
  providers: [ DataService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
