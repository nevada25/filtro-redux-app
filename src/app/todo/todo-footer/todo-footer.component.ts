import {Component, OnInit} from '@angular/core';
import * as fv from "../../filter/filter.action";

import {Store} from "@ngrx/store";
import {AppState} from "../../app.reducers";
import {TodoModel} from "../model/todo.model";
import {BorrarAllTodoAction} from "../todo.actions";

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styles: []
})
export class TodoFooterComponent implements OnInit {
  pendientes: number;
  filtrosvalidos: fv.filtrosValidos[] = ['todos', 'completados', 'pendientes'];
  filtroActual: fv.filtrosValidos;

  constructor(private store: Store<AppState>) {
  }

  ngOnInit(): void {
    this.store.subscribe(state => {
      this.filtroActual = state.filtro;
      this.contarPendientes(state.todos);
    });
  }

  cambiarFiltro(nuevoFiltro: fv.filtrosValidos) {
    const accion = new fv.SetFiltroAction(nuevoFiltro);
    this.store.dispatch(accion);
  }

  contarPendientes(todos: TodoModel[]) {
    this.pendientes = todos.filter(todo => !todo.completado).length;
  }

  limpiarCompletados() {
    const accion = new  BorrarAllTodoAction();
    this.store.dispatch(accion);
  }


}
