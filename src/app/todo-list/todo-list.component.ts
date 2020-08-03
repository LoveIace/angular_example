import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Tut } from './../models/tut.model';
import { AppState } from './../app.state';
import * as TutActions from './../actions/tut.actions';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  todolist: Observable<Tut[]>;
  selected = [];
  created = 1;

  add(name){
    this.created++;
    this.store.dispatch(new TutActions.AddTut({ name:name, number: this.created}));
  }

  remove(){
      this.store.dispatch(new TutActions.RemoveTut(this.selected));
      this.selected = [];
  }

  select(item){
    if(this.selected.includes(item)){
      this.selected.splice(this.selected.indexOf(item), 1);
      return;
    }
    this.selected.push(item);
  }

  isSelected(item){
    if(this.selected.includes(item)){
      return true;
    }
    return false;
  }

  buttonText(){
    if(!this.selected.length)
      return '';
    return "("+this.selected.length+")";
  }

  constructor(private store: Store<AppState>) {
      this.todolist = store.select('tut');
  }

  ngOnInit(): void {
  }


}
