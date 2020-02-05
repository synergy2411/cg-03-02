import { Injectable } from '@angular/core';
import { USER_DATA } from '../model/mocks';

@Injectable()
export class DataService{
    counter = 0;
    
    getData(){
        return USER_DATA;
    }
}