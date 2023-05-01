import { createReducer, on } from "@ngrx/store";
import { AppState, initialState } from "./app.state";

import * as TodoActions from './app.actions'

export const appReducer = createReducer(
    initialState,

    //Load Todos
    on(TodoActions.loadTodos, (state: AppState) => {
        console.log("loadTodo")

        return {
            ...state,
            loading: true
        }

    }),
    on(TodoActions.loadTodosSuccess, (state: AppState, data) => {
        console.log("loadTodosSuccess")
        return {
            ...state,
            loading: false,
            todos: data.todos
        }

    }),
    on(TodoActions.loadTodosFailure, (state: AppState, data) => {
        return {
            ...state,
            loading: false,
            error: data.error
        }

    }),
)