import { Component, OnInit, Input, OnChanges, SimpleChanges, DoCheck, OnDestroy } from '@angular/core';
import { IUser } from '../../model/user.model';
import { USER_DATA } from '../../model/mocks';

@Component({
    selector: "app-users",
    templateUrl: `./users.component.html`,
    styleUrls: [`./users.component.css`]
})
export class UsersComponent implements OnInit, OnChanges, DoCheck, OnDestroy {
    @Input('title') title : string;

    users : IUser[];

    onMoreInfo(user: IUser) {
        alert(`${user.firstName} is working with ${user.company}!!!`);
    }

    ngOnInit(){
        console.log("ngOnInit");
        this.users = USER_DATA;
    }

    ngOnChanges(changes : SimpleChanges){
        console.log("ngOnChanges", changes)
    }

    ngDoCheck(){
        console.log("ngDoCheck")
    }

    ngOnDestroy(){
        console.log("ngOnDestroy")
    }
}