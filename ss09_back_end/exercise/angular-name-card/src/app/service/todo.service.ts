import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {Todo} from '../module/todo';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

const API_URL = `${environment.API_URL}`;

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<Todo[]> {
    return this.httpClient.get<Todo[]>(API_URL + '/todos');
  }

  findById(id: number): Observable<Todo> {
    return this.httpClient.get<Todo>(`${API_URL}/todos/${id}`);
  }

  save(todo: Todo): Observable<Todo> {
    return this.httpClient.post<Todo>(`${API_URL}/todos`, todo);
  }

  update(id: number, todo: Todo): Observable<Todo> {
    return this.httpClient.put<Todo>(`${API_URL}/todos/${id}`, todo);
  }

  delete(id: number): Observable<Todo> {
    return this.httpClient.delete<Todo>(`${API_URL}/todos/${id}`);
  }
}
