import { Component, Input } from '@angular/core';
import { Todo } from '../todo.model';
import { AppState } from 'src/app/state/app.state';
import { Store } from '@ngrx/store';

import * as AppActions from '../../state/app.actions'
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent {
  @Input() todo: Todo;

  constructor(private store: Store<AppState>) { }
  onCheck() {
    const updatedTodo = { ...this.todo };
    updatedTodo.completed = !updatedTodo.completed
    this.store.dispatch(AppActions.updateTodo({ todo: updatedTodo }))
  }
  onDelete() {
    this.store.dispatch(AppActions.deleteTodo({ id: this.todo.id }))
  }
}
