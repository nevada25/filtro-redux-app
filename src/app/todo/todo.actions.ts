import {Action} from "@ngrx/store";

export const AGREGAR_TODO = '[TODO] Agregar Todo';
export const TOGGLE_TODO = '[TODO] TOGGLE Todo';
export const EDITAR_TODO = '[TODO] EDITAR Todo';
export const BORRAR_TODO = '[TODO] BORRAR Todo';
export const TOGGLE__ALL_TODO = '[TODO] TOGGLE__ALL Todo';
export const DELETE_ALL_TODO = '[TODO] DELETE_ALL Todo';

export class AgregarTodoAction implements Action {
  readonly type = AGREGAR_TODO;

  constructor(public texto: string) {
  }
}

export class EditarTodoAction implements Action {
  readonly type = EDITAR_TODO;

  constructor(public id: number, public texto: string) {
  }
}

export class ToggleTodoAction implements Action {
  readonly type = TOGGLE_TODO;

  constructor(public id: number) {
  }
}

export class BorrarTodoAction implements Action {
  readonly type = BORRAR_TODO;

  constructor(public id: number) {
  }
}

export class ToggleAllTodoAction implements Action {
  readonly type = TOGGLE__ALL_TODO;

  constructor(public completado: boolean) {
  }
}

export class BorrarAllTodoAction implements Action {
  readonly type = DELETE_ALL_TODO;
}

export type Acciones =
  AgregarTodoAction
  | EditarTodoAction
  | BorrarTodoAction
  | ToggleAllTodoAction
  | ToggleTodoAction
  | BorrarAllTodoAction;
