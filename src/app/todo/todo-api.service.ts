import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from './todo.model';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TodoApiService {
  apiUrl = 'http://localhost:3000/todos/';

  constructor(private http: HttpClient) { }

  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.apiUrl);
  }

  deleteTodos(id: number): Observable<number> {
    return this.http.delete<number>(`${this.apiUrl}/${id}`).pipe(map(() => id));
  }

  addTodo(todo: Todo): Observable<Todo> {
    return this.http.post<Todo>(this.apiUrl, todo)
  }

  updateTodo(updatedTodo: Todo): Observable<Todo> {
    return this.http.patch<Todo>(this.apiUrl + updatedTodo.id, updatedTodo)
  }
}
