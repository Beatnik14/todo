import { Component, OnInit } from '@angular/core';

import * as AppSelectors from '../../state/app.selectors'
import * as AppActions from '../../state/app.actions'
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/state/app.state';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit{

  todos$ = this.store.select(AppSelectors.getTodos)
  activeTodo$ = this.store.select(AppSelectors.getActiveTodos)
  completed$ = this.store.select(AppSelectors.getCompletedTodos)

  filter$ = this.store.select(AppSelectors.getFilter)

  constructor(private store: Store<AppState>){
  }



  ngOnInit(): void {
  }

  onCheck(id: string) {
  }
}
