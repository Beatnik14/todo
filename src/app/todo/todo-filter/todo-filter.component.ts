import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState, TodoFilter } from 'src/app/state/app.state';

import * as AppSelectors from '../../state/app.selectors'
import * as AppActions from '../../state/app.actions'
@Component({
  selector: 'app-todo-filter',
  templateUrl: './todo-filter.component.html',
  styleUrls: ['./todo-filter.component.scss']
})
export class TodoFilterComponent {


  activeTodos$ = this.store.select(AppSelectors.getActiveTodos)
  activeFilter$ = this.store.select(AppSelectors.getFilter)

  constructor(private store: Store<AppState>){}

  onFilter(filter: TodoFilter) {
    this.store.dispatch(AppActions.filter({filter}))
  }

  clearCompleted() {
    this.store.dispatch(AppActions.clearCompleted())
  }

}
