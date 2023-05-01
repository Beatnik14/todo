import { createAction, props } from "@ngrx/store";
import { Todo } from "../todo/todo.model";

//Load Todos
export const loadTodos = createAction('[TODO] Load Todos');
export const loadTodosSuccess = createAction('[TODO] Load Todos  Success', props<{todos: Todo[]}>());
export const loadTodosFailure = createAction('[TODO] Load Todos Failure', props<{error: string}>());
