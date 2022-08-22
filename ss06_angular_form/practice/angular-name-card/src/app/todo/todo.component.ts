import { Component, OnInit } from '@angular/core';
import {Todo} from '../module/todo';
import {FormControl} from '@angular/forms';
import {TodoService} from '../service/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todos: Todo[] = [];
  content = new FormControl();
  id: number;
  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.todoService.getAll().subscribe(todo => {
      this.todos = todo;
    });
  }

  toggleTodo(i: number) {
    this.todos[i].complete = !this.todos[i].complete;
  }

  change() {
    const value = this.content.value;
    if (value) {
      const todo: Todo = {
        id: this.id++,
        content: value,
        complete: false
      };
      this.todoService.save(todo).subscribe(() => {
        this.content.reset();
      });
    }
  }

  deleteTodo(id: number) {
    this.todoService.delete(id).subscribe(() => {
      this.ngOnInit();
    });
  }
}
