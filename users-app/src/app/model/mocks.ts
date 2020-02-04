import { IUser } from './user.model';

export const USER_DATA : IUser[] = [{
    firstName: "Bill",
    lastName: "Gates",
    dob: new Date("Dec 24, 1964"),
    isWorking: true,
    company: "Microsoft",
    income: 50000,
    image: "./assets/images/bill.jpg",
    vote : 120
},
{
    firstName: "steve",
    lastName: "jobs",
    dob: new Date("Jan 4, 1964"),
    isWorking: false,
    company: "Apple Inc",
    income: 0,
    image: "./assets/images/steve.jpg",
    vote : 180
},{
    firstName: "tim B.",
    lastName: "Lee",
    dob: new Date("Aug 4, 1964"),
    isWorking: true,
    company: "World Wide Web",
    income: 30000,
    image: "./assets/images/tim.jpg",
    vote : 150
}]