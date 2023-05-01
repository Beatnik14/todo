import { Injectable } from '@angular/core'

import * as AppActions from './app.actions'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { TodoApiService } from '../todo/todo-api.service'
import { catchError, map, switchMap, of, mergeMap } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';


@Injectable()

export class AppEffects {
    constructor(private actions$: Actions, private apiService: TodoApiService) { }

    loadProviders$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(AppActions.loadTodos),
            mergeMap(() =>
                this.apiService.getTodos().pipe(
                    map((todos) => AppActions.loadTodosSuccess({ todos })),
                    catchError((err: HttpErrorResponse) =>
                        of(
                            AppActions.loadTodosFailure({
                                error: `Failed to get providers. Server responded with: ${err.message}`,
                            })
                        )
                    )
                )
            )
        );
    });
}