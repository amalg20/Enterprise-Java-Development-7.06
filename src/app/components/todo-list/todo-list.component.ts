import { Component } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent {
  newTodo = '';
  todos: { text: string; completed: boolean; postponed: boolean; editing: boolean }[] = [];

  addTodo() {
    if (this.newTodo.trim() === '') return;
    this.todos.push({ text: this.newTodo, completed: false, postponed: false, editing: false });
    this.newTodo = '';
  }

  toggleComplete(todo: any) {
    todo.completed = !todo.completed;
  }

  edit(todo: any) {
    todo.editing = true;
  }

  saveEdit(todo: any) {
    todo.editing = false;
  }

  cancelEdit(todo: any) {
    todo.editing = false;
  }

  postpone(todo: any) {
    todo.postponed = true;
  }

  restore(todo: any) {
    todo.postponed = false;
  }

  delete(todo: any) {
    const index = this.todos.indexOf(todo);
    if (index > -1) {
      this.todos.splice(index, 1);
    }
  }

  cleanCompleted() {
    this.todos = this.todos.filter((todo) => !todo.completed);
  }
}
