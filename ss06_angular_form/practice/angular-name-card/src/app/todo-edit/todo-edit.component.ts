import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {TodoService} from '../service/todo.service';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {logger} from 'codelyzer/util/logger';

@Component({
  selector: 'app-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.css']
})
export class TodoEditComponent implements OnInit {
  todoForm: FormGroup;
  id: number;

  constructor(private todoService: TodoService,
              private activatedRoute: ActivatedRoute) {
    this.todoForm = new FormGroup({
      id: new FormControl(),
      content: new FormControl(),
      complete: new FormControl()
    });
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      this.todoService.findById(this.id).subscribe(todo => {
        this.todoForm = new FormGroup({
          id: new FormControl(),
          content: new FormControl(),
          complete: new FormControl()
        });
        this.todoForm.patchValue(todo);
        console.log(todo);
      });
    });
  }

  edit(id) {
    const todo = this.todoForm.value;
    this.todoService.update(id, todo).subscribe();
  }
}
