import { Component } from '@angular/core';
import { AppState } from '../state/app.state';
import { Store } from '@ngrx/store';

import * as AppSelectors from '../state/app.selectors'
import * as AppActions from '../state/app.actions'

@Component({
  selector: 'app-todo-landing',
  templateUrl: './todo-landing.component.html',
  styleUrls: ['./todo-landing.component.scss']
})
export class TodoLandingComponent {

  addTodo$ = this.store.select(AppSelectors.getAddTodo)
  error$ = this.store.select(AppSelectors.getError)

  constructor(private store: Store<AppState>){}

  onToggle() {
    this.store.dispatch(AppActions.toggleAddTodo())
  }

}
