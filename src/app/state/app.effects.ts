import { Injectable } from '@angular/core';

import * as AppActions from './app.actions';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { TodoApiService } from '../todo/todo-api.service';
import { catchError, map, switchMap, of, mergeMap, concatMap } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class AppEffects {
  constructor(private actions$: Actions, private apiService: TodoApiService) { }

  loadTodos$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AppActions.loadTodos),
      mergeMap(() =>
        this.apiService.getTodos().pipe(
          map((todos) => AppActions.loadTodosSuccess({ todos })),
          catchError((err: HttpErrorResponse) =>
            of(
              AppActions.loadTodosFailure({
                error: `Failed to get todo. Server responded with: ${err.message}`,
              })
            )
          )
        )
      )
    );
  });

  deleteTodo$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AppActions.deleteTodo),
      concatMap(({ id }) =>
        this.apiService.deleteTodos(id).pipe(
          map((id) => AppActions.deleteTodoSuccess({ id })),
          catchError((err: HttpErrorResponse) =>
            of(
              AppActions.updateTodoFailure({
                error: `Failed to delete todo. Server responded with: ${err.message}`,
              })
            )
          )
        )
      )
    );
  });

  addTodo$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AppActions.addTodo),
      mergeMap(({ todo }) =>
        this.apiService.addTodo(todo).pipe(
          map((todo) => AppActions.addTodoSuccess({ todo })),
          catchError((err: HttpErrorResponse) =>
            of(
              AppActions.updateTodoFailure({
                error: `Failed to add todo. Server responded with: ${err.message}`,
              })
            )
          )
        )
      )
    );
  });

  updatedTodos$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AppActions.updateTodo),
      mergeMap(({ todo }) =>
        this.apiService.updateTodo(todo).pipe(
          map((todo) => AppActions.updateTodoSuccess({ todo })),
          catchError((err: HttpErrorResponse) =>
            of(
              AppActions.updateTodoFailure({
                error: `Failed to update todo. Server responded with: ${err.message}`,
              })
            )
          )
        )
      )
    );
  });
}
