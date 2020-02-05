import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { USER_DATA } from '../model/mocks';

@Injectable()
export class DataService{
    counter = 0;
    
    getData(){
        return this.httpClient.get("./assets/data/user.json")
        // return USER_DATA;
    }

    constructor(private httpClient : HttpClient){}
}