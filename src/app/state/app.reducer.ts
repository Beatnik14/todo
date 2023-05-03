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
  on(TodoActions.loadTodosSuccess, (state: AppState, { todos }) => {
    return {
      ...state,
      loading: false,
      todos: todos,
      activeTodos: todos.filter((t) => !t.completed),
      completedTodos: todos.filter((t) => t.completed),
    };
  }),
  on(TodoActions.loadTodosFailure, (state: AppState, data) => {
    return {
      ...state,
      loading: false,
      error: data.error,
    };
  }),

  //Delete Todos
  on(TodoActions.deleteTodo, (state: AppState) => {
    return {
      ...state,
      loading: true,
    };
  }),

  on(TodoActions.deleteTodoSuccess, (state: AppState, { id }) => {
    return {
      ...state,
      loading: false,
      todos: TodoUtils.removeItem(state.todos, id),
      activeTodos: state.todos.filter((t) => t.completed),
      completedTodos: state.todos.filter((t) => !t.completed),
    };
  }),

  on(TodoActions.deleteTodoFailure, (state: AppState, { error }) => {
    return {
      ...state,
      loading: false,
      error: error,
    };
  }),

  //Add Todo
  on(TodoActions.addTodo, (state) => {
    return {
      ...state,
      loading: true
    }
  }),

  on(TodoActions.addTodoSuccess, (state, { todo }) => {
    return {
      ...state,
      loading: false,
      todos: [...state.todos, todo],
      addTodo: true,
      activeTodos: [...state.activeTodos, todo],
    }
  }),

  on(TodoActions.addTodoFailure, (state, { error }) => {
    return {
      ...state,
      loading: false,
      error: error
    }
  }),

  //Update Todo
  on(TodoActions.updateTodo, (state) => {
    return {
      ...state,
      loading: true
    }
  }),

  on(TodoActions.updateTodoSuccess, (state, { todo }) => {
    return {
      ...state,
      loading: false,
      todos: state.todos.map((t) => {
        if (t.id == todo.id) {
          return todo;
        } else {
          return t;
        }
      }),
      activeTodos: TodoUtils.checkActiveTodo(state.activeTodos, todo),
      completedTodos: TodoUtils.checkCompletedTodo(state.completedTodos, todo),
    }
  }),

  on(TodoActions.updateTodoFailure, (state, { error }) => {
    return {
      ...state,
      loading: false,
      error: error
    }
  }),

  //Toggle Add Todo
  on(TodoActions.toggleAddTodo, (state) => {
    return {
      ...state,
      addTodo: !state.addTodo
    }
  }),

  //Filter
  on(TodoActions.filter, (state, { filter }) => {
    return {
      ...state,
      filter: filter
    }
  }),

  //Clear Completed Todos
  on(TodoActions.clearCompleted, (state) => {
    return {
      ...state,
      completedTodos: [],
      todos: state.todos.filter(t => !t.completed)
    }
  })

);
