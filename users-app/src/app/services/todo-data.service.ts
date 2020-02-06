import { Injectable } from "@angular/core";
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable()
export class TodoDataService implements InMemoryDbService{
    createDb(){
        let todos = [
            {id : 1, label : "Repair the bike", status: "done"},
            {id : 2, label : "Pot the Plant", status: "pending"},
            {id : 3, label : "Renew insurance", status: "done"}
        ]

        return { todos };
    }
}