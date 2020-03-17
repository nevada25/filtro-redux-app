import {Pipe, PipeTransform} from '@angular/core';
import {TodoModel} from "../todo/model/todo.model";
import * as fv from "./filter.action";

@Pipe({
  name: 'filterTodo'
})
export class FilterPipe implements PipeTransform {

  transform(todos: TodoModel[], filtro: fv.filtrosValidos): TodoModel[] {
    switch (filtro) {
      case 'completados':
        return todos.filter(todo => todo.completado);
      case 'pendientes':
        return todos.filter(todo => !todo.completado);
      default:
        return todos;
    }

  }

}
