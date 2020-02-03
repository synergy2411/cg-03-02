import { Component } from '@angular/core';

@Component({
    selector: "app-users",
    templateUrl: `./users.component.html`,
    styleUrls: [`./users.component.css`]
})
export class UsersComponent {
    user = {
        firstName: "Bill",
        lastName: "Gates",
        dob: new Date("Dec 24, 1964"),
        isWorking: true,
        company: "Microsoft",
        income: 50000,
        image: "./assets/images/bill.jpg",
        vote : 120
    }

    onMoreInfo(user: any) {
        alert(`${user.firstName} is working with ${user.company}!`);
    }
}