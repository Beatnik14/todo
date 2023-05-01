import { Todo } from "../todo/todo.model";

export interface AppState {
    todos: Todo[];
    error: string;
    loading: boolean;
}

export const initialState: AppState = {
    todos: [],
    error: '',
    loading: false
}