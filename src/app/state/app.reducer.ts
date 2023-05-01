import { createReducer, on } from '@ngrx/store';
import { AppState, initialState } from './app.state';

import * as TodoActions from './app.actions';
import { TodoUtils } from './utils/todo.util';

export const appReducer = createReducer(
  initialState,

  //Load Todos
  on(TodoActions.loadTodos, (state: AppState) => {
    return {
      ...state,
      loading: true,
    };
  }),
  on(TodoActions.loadTodosSuccess, (state: AppState, data) => {
    console.log('loadTodosSuccess');
    return {
      ...state,
      loading: false,
      todos: data.todos,
    };
  }),
  on(TodoActions.loadTodosFailure, (state: AppState, data) => {
    return {
      ...state,
      loading: false,
      error: data.error,
    };
  }),

  //Load Todos
  on(TodoActions.deleteTodo, (state: AppState) => {
    return {
      ...state,
      loading: true,
    };
  }),
  on(TodoActions.deleteTodoSuccess, (state: AppState, data) => {
    console.log('loadTodosSuccess');
    return {
      ...state,
      loading: false,
      todos: TodoUtils.removeItem(state.todos, data.id),
    };
  }),
  on(TodoActions.deleteTodoFailure, (state: AppState, data) => {
    return {
      ...state,
      loading: false,
      error: data.error,
    };
  })
);
