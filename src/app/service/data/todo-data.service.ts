import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from 'src/app/list-todos/list-todos.component';
import { API_URL } from 'src/app/app.constants';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {
 
  constructor(private http : HttpClient) { }

  fetchAllTodos(username : string) {
    
    return this.http.get<Todo[]>(`${API_URL}/users/${username}/todo`)
  }

  deleteTodo(username, id) {
    return this.http.delete(`${API_URL}/users/${username}/todo/${id}`);
  }

  fetchTodoById(username, id) {
    return this.http.get<Todo>(`${API_URL}/users/${username}/todo/${id}`)
  }

  updateTodo(username, id, todo) {
    return this.http.put(`${API_URL}/users/${username}/todo/${id}`, todo)
  }

  createTodo(username, todo) {
    return this.http.post(`${API_URL}/${username}/todo`, todo)
  }
}