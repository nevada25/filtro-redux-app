import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {TodoModel} from "../model/todo.model";
import {FormControl, Validators} from "@angular/forms";
import {Store} from "@ngrx/store";
import {AppState} from "../../app.reducers";
import {BorrarTodoAction, EditarTodoAction, ToggleTodoAction} from "../todo.actions";

@Component({
  selector: 'app-todos-item',
  templateUrl: './todos-item.component.html',
  styles: []
})
export class TodosItemComponent implements OnInit {
  editando: boolean;
  @Input() todo: TodoModel;
  chkField: FormControl;
  txtInput: FormControl;
  @ViewChild('txtInputFisico') txtInputFisico: ElementRef;

  constructor(private  store: Store<AppState>) {
  }

  ngOnInit() {
    this.chkField = new FormControl(this.todo.completado);
    this.txtInput = new FormControl(this.todo.texto, Validators.required);
    this.chkField.valueChanges.subscribe(() => {
      const accion = new ToggleTodoAction(this.todo.id);
      this.store.dispatch(accion);
    });

  }

  editar() {
    this.editando = true;
    setTimeout(() => {
      this.txtInputFisico.nativeElement.select();
    }, 1);

  }

  terminarEdiccion() {
    this.editando = false;
    if (this.txtInput.invalid) {
      return;
    }
    if (this.txtInput.value === this.todo.texto) {
      return;
    }
    const accion = new EditarTodoAction(this.todo.id, this.txtInput.value.toString());
    this.store.dispatch(accion);
    console.log(this.txtInput.value);
  }

  elimiarItem() {
    const accion = new BorrarTodoAction(this.todo.id);
    this.store.dispatch(accion);
  }
}
