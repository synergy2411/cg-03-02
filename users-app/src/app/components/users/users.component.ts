import { Component, OnInit, Input, OnChanges, SimpleChanges, DoCheck, OnDestroy } from '@angular/core';
import { IUser } from '../../model/user.model';
import { DataService } from '../../services/data.service';
import { ActivatedRoute } from '@angular/router';
// import { USER_DATA } from '../../model/mocks';

@Component({
    selector: "app-users",
    templateUrl: `./users.component.html`,
    styleUrls: [`./users.component.css`],
    providers : [DataService] 
})
export class UsersComponent implements OnInit, OnChanges, DoCheck, OnDestroy {
    @Input('title') title : string;
    id : number;
    username : string;
    userType : string;
    users : IUser[];

    onMoreInfo(user: IUser) {
        alert(`${user.firstName} is working with ${user.company}!!!`);
    }

    constructor(public dataService : DataService, 
                private route : ActivatedRoute){
                    this.route.params.subscribe(params => {
                        console.log(params);
                        this.id = +params['id'];
                        this.username = params['username'];
                    })
                    this.route.queryParams.subscribe(params => {
                        this.userType = params['type'];
                    })
                }

    ngOnInit(){
        // this.dataService.getData()
            // .subscribe(
            //     response => {
            //         this.users = <IUser[]>response['userdata'];
            //         console.log(this.users)
            //     },
            //     err => console.log("ERROR : ", err),
            //     () => console.log("Completed")
            //     );
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