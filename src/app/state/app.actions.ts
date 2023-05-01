import { createAction, props } from "@ngrx/store";
import { Todo } from "../todo/todo.model";

//Load Todos
export const loadTodos = createAction('[TODO] Load Todos',);
export const loadTodosSuccess = createAction('[TODO] Load Todos  Success', props<{todos: Todo[]}>());
export const loadTodosFailure = createAction('[TODO] Load Todos Failure', props<{error: string}>());

//Delete Todo
export const deleteTodo = createAction('[TODO] Delete Todos',   props<{ id: number }>());
export const deleteTodoSuccess = createAction('[TODO] Delete Todos  Success', props<{id: number}>());
export const deleteTodoFailure = createAction('[TODO] Delete Todos Failure', props<{error: string}>());

//Update Todo
export const updateTodo = createAction('[TODO] Delete Todos',   props<{ id: number }>());
export const updateTodoSuccess = createAction('[TODO] Delete Todos  Success', props<{id: number}>());
export const updateTodoFailure = createAction('[TODO] Delete Todos Failure', props<{error: string}>());

//Add Todo
export const addTodo = createAction('[TODO] Delete Todos',   props<{ id: number }>());
export const addTodoSuccess = createAction('[TODO] Delete Todos  Success', props<{id: number}>());
export const addTodoFailure = createAction('[TODO] Delete Todos Failure', props<{error: string}>());
