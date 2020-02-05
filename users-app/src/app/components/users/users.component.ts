import { Component, OnInit, Input, OnChanges, SimpleChanges, DoCheck, OnDestroy } from '@angular/core';
import { IUser } from '../../model/user.model';
import { DataService } from '../../services/data.service';
// import { USER_DATA } from '../../model/mocks';

@Component({
    selector: "app-users",
    templateUrl: `./users.component.html`,
    styleUrls: [`./users.component.css`],
    providers : [DataService] 
})
export class UsersComponent implements OnInit, OnChanges, DoCheck, OnDestroy {
    @Input('title') title : string;

    users : IUser[];

    onMoreInfo(user: IUser) {
        alert(`${user.firstName} is working with ${user.company}!!!`);
    }

    constructor(public dataService : DataService){}

    ngOnInit(){
        this.users = this.dataService.getData();
    }

    ngOnChanges(changes : SimpleChanges){
        // console.log("ngOnChanges", changes)
    }

    ngDoCheck(){
        // console.log("ngDoCheck")
    }

    ngOnDestroy(){
        // console.log("ngOnDestroy")
    }
}