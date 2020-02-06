import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';
import { ITodo } from 'src/app/model/todo.model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todoLabel: string = "";
  todos: ITodo[] = [];
  todo : ITodo;

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.todoService.getTodos()
      .subscribe(response => {
        console.log("TODO RESPONSE : ", response);
        this.todos = <ITodo[]>response;
      })
  }

  onAddNewItem() {
    let newTodo: ITodo = {
      id: this.todos.length + 1,
      label: this.todoLabel,
      status: "pending"
    }
    this.todoService.createTodo(newTodo)
      .subscribe(
        (response: ITodo) => {
          console.log(response);
          this.todos.push(response);
          this.todoLabel = "";
        },
        err => console.log(err)
      )
  }

  onSelectItem(id: number) {
    this.todoService.getTodoItem(id)
      .subscribe(
        (response : ITodo) => {
          this.todo = response;
        },
        err => console.log(err));
  }

}
