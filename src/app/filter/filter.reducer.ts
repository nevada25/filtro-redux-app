import * as f from "./filter.action";

const estadoInicial: f.filtrosValidos = 'todos';

export function filtroReducer(state = estadoInicial, action: f.acciones) {
  switch (action.type) {
    case f.SET_FILTRO:
      return action.filtro;
    default:
      return state;
  }
}


