import { Routes } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { ObservableDemoComponent } from './components/observable-demo/observable-demo.component';
import { PipeDemoComponent } from './components/pipe-demo/pipe-demo.component';
import { TodoComponent } from './components/todo/todo.component';
import { UsersComponent } from './components/users/users.component';

export const APP_ROUTES : Routes = [{
    path : "",
    redirectTo : "login",
    pathMatch : "full"
},{
    path : "login",                         // http://localhost:4200/login
    component : LoginComponent
},{
    path : "register",
    component : RegisterComponent
}, {
    path : "pipedemo",
    component : PipeDemoComponent
}, {
    path :"observabledemo",
    component : ObservableDemoComponent
},{
    path : "todo",
    component : TodoComponent
}, {
    path : "users/:id/:username",
    component : UsersComponent
},{
    path : "lazy",
    loadChildren : "./module/lazy/lazy.module#LazyModule"               // path/to/lazy_module/LazyModuleFileName#LazyModuleClassName
}, {
    path : "**",
    redirectTo : "login",
    pathMatch : 'full'
}]