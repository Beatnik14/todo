import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/state/app.state';

import * as AppActions from '../../state/app.actions'
import { Todo } from '../todo.model';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss'],
})
export class AddTodoComponent {

  description: string;

  constructor(private store: Store<AppState>) { }

  add() {
    const todo: Todo = {
      description: this.description,
      completed: false
    }
    this.store.dispatch(AppActions.addTodo({ todo }))
  }

  cancel() {
    this.store.dispatch(AppActions.toggleAddTodo())
  }

}
