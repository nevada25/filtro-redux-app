import * as ft from "./todo.actions";
import {TodoModel} from "./model/todo.model";

const todo1 = new TodoModel('Aprender');
const todo2 = new TodoModel('practicar lo aprendido');
const todo3 = new TodoModel('Crear software');
todo2.completado = true;
const estadoInicial: TodoModel[] = [todo1, todo2, todo3];

export function todoReducer(state = estadoInicial, action: ft.Acciones): TodoModel[] {
  switch (action.type) {
    case ft.AGREGAR_TODO:
      const todo = new TodoModel(action.texto);
      return [...state, todo];
    case ft.TOGGLE_TODO:
      return state.map(todoEdit => {
        if (todoEdit.id === action.id) {
          return {
            ...todoEdit,
            completado: !todoEdit.completado
          }
        } else {
          return todoEdit;
        }
      });
    case ft.EDITAR_TODO:
      return state.map(todoEditText => {
        if (todoEditText.id === action.id) {
          return {
            ...todoEditText,
            texto: action.texto
          }

        } else {
          return todoEditText;
        }
      });
    case ft.BORRAR_TODO:
      return state.filter(todoedit => todoedit.id != action.id);
    case ft.TOGGLE__ALL_TODO:
      return state.map(complete => {
        return {
          ...complete,
          completado: action.completado
        }
      });
    case ft.DELETE_ALL_TODO:
      return state.filter(todoedit => !todoedit.completado);
    default:
      return state;
  }
}
