import { Todo } from "../todo/todo.model";

export interface AppState {
    todos: Todo[];
    activeTodos: Todo[];
    completedTodos: Todo[];
    filter: TodoFilter,
    error: string;
    loading: boolean;
    addTodo: boolean;
}

export const initialState: AppState = {
    todos: [],
    activeTodos: [],
    completedTodos: [],
    filter: 'COMPLETED',
    error: '',
    loading: false,
    addTodo: true
}

export type TodoFilter = 'All' | 'COMPLETED' | 'ACTIVE'