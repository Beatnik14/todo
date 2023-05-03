import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AppState } from "./app.state";

const getAppStateSelector = createFeatureSelector<AppState>('app')

export const getTodos = createSelector(
    getAppStateSelector,
    (state: AppState) => state.todos
)

export const getLoading = createSelector(
    getAppStateSelector,
    (state: AppState) => state.loading
)

export const getError = createSelector(
    getAppStateSelector,
    (state: AppState) => state.error
)

export const getAddTodo = createSelector(
    getAppStateSelector,
    (state: AppState) => state.addTodo
)

export const getActiveTodos = createSelector(
    getAppStateSelector,
    (state: AppState) => state.activeTodos
)

export const getCompletedTodos = createSelector(
    getAppStateSelector,
    (state: AppState) => state.completedTodos
)

export const getFilter = createSelector(
    getAppStateSelector,
    (state: AppState) => state.filter
)