import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import * as AppActions from './state/app.actions'
import * as AppSelectors from './state/app.selectors'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'todo';
  loading$ = this.store.select(AppSelectors.getLoading);

  constructor(private store: Store) {
  }

  ngOnInit(): void {
    this.store.dispatch(AppActions.loadTodos())
  }

 

}
