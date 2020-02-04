import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(todos: any, filteredStatus : string){
    if(todos.length === 0 || filteredStatus === ""){
      return todos;
    }

    let resultArray = [];
    for(let todo of todos){
      if(todo['status'] === filteredStatus){
        resultArray.push(todo);
      }
    }
    return resultArray;
  }

}
