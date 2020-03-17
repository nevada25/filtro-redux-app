import {TodoModel} from "./todo/model/todo.model";
import {ActionReducerMap} from "@ngrx/store";
import * as tt from "./todo/todo.reducer";
import * as tf from "./filter/filter.reducer";
import * as fv from "./filter/filter.action";

export interface AppState {
  todos: TodoModel[];
  filtro: fv.filtrosValidos;
}

export const appReducers: ActionReducerMap<AppState> = {
  todos: tt.todoReducer,
  filtro: tf.filtroReducer
};
