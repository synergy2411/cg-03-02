import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { ITodo } from '../model/todo.model';

@Injectable({
    providedIn: "root"
})
export class TodoService {

    SERVER_URL: string = "http://localhost:4200/api/todos";

    constructor(private httpClient: HttpClient) { }

    getTodoItem(id: number) { 
        return this.httpClient.get(`${this.SERVER_URL}/${id}`);
    }

    getTodos() {
        return this.httpClient.get(this.SERVER_URL)
    }

    createTodo(todo: ITodo) {
        return this.httpClient.post(this.SERVER_URL, todo);
    }

    deleteTodo(id: number) { 
        return this.httpClient
            .delete( `${this.SERVER_URL}/${id}`);
    }

    updateTodo(id: number, todo: ITodo) { }

}