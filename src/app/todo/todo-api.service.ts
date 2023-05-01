import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from './todo.model';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class TodoApiService {

    apiUrl = 'http://localhost:3000/todos'

    constructor(private http: HttpClient) { }

    getTodos(): Observable<Todo[]> {
        return this.http.get<Todo[]>(this.apiUrl)
    }
}