import { createAction, props } from "@ngrx/store";
import { Todo } from "../todo/todo.model";
import { TodoFilter } from "./app.state";

//
export const toggleAddTodo = createAction('[TODO] Toggle Add Todo');

//Load Todos
export const loadTodos = createAction('[TODO] Load Todos',);
export const loadTodosSuccess = createAction('[TODO] Load Todos  Success', props<{ todos: Todo[] }>());
export const loadTodosFailure = createAction('[TODO] Load Todos Failure', props<{ error: string }>());

//Delete Todo
export const deleteTodo = createAction('[TODO] Delete Todos', props<{ id: number }>());
export const deleteTodoSuccess = createAction('[TODO] Delete Todos  Success', props<{ id: number }>());
export const deleteTodoFailure = createAction('[TODO] Delete Todos Failure', props<{ error: string }>());

//Update Todo
export const updateTodo = createAction('[TODO] Update Todo', props<{ todo: Todo }>());
export const updateTodoSuccess = createAction('[TODO] Update Todo  Success', props<{ todo: Todo }>());
export const updateTodoFailure = createAction('[TODO] Update Todo Failure', props<{ error: string }>());

//Add Todo
export const addTodo = createAction('[TODO] Add Todo', props<{ todo: Todo }>());
export const addTodoSuccess = createAction('[TODO] Add Todo  Success', props<{ todo: Todo }>());
export const addTodoFailure = createAction('[TODO] Add Todo Failure', props<{ error: string }>());

//Filter
export const filter = createAction('[TODO] Apply Filter', props<{ filter: TodoFilter }>())

//Clear Completed Todos
export const clearCompleted = createAction('[TODO] Clear Completed Todos')