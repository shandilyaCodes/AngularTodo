import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Router } from '@angular/router';

export class Todo {
  constructor(
    public id: number,
    public description: string,
    public targetDate: Date,
    public done: boolean
  ) {

  }
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos : Todo[] 
  message : string

  constructor(private todoService: TodoDataService,
              private router : Router) { }

  refreshTodos() {
    this.todoService.fetchAllTodos('Ramendu').subscribe(
      response => {
        this.todos = response
      }
    );
  }

  ngOnInit() {
    this.refreshTodos()
  }

  deleteTodo(id) {
    this.todoService.deleteTodo('Ramendu',id).subscribe(
      response => {
        this.message = `Todo with id ${id} Successful`
      }
    );
    this.refreshTodos()
  }

  updateTodo(id) {
    this.router.navigate(['todos', id]) 
  }

  addTodo() {
   this.router.navigate(['todos', -1]) 
  }
}