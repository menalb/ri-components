import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

  public input1: string;
  public todos: any;
  public todoObj: any;
  
  @Output() notify = new EventEmitter();
  constructor() { 
    this.input1 = '';
    this.todos = [];
  }

  addTodo(event) {
    this.todoObj = {
      input1: this.input1,
      completed: false
    }
    this.todos.push(this.todoObj);
    this.input1 = '';
    event.preventDefault();
  }

  ngOnInit() {
  }
  notifyEvent(){ 
    const testo = 'Todo element added';
    this.notify.emit(testo);
}
}