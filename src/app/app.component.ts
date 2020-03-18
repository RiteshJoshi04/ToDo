import { Component } from '@angular/core';
import { Todo } from "./todo";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Tasks Application';
  
  todoValue:string;
  list: Todo[];

  ngOnInit(){
    this.list = [];
    this.todoValue = "";
  }

  //Add items to the TO-DO List
  addItem(){
    if(this.todoValue !== ""){
      const newItem: Todo = {
        id: Date.now(),
        value: this.todoValue,
        isDone:false
      };

      this.list.push(newItem);
    }
    this.todoValue = "";
  }

  //Delete items from TO-DO List
  deleteItem(id:number){
    this.list = this.list.filter(item => item.id != id);
  }
}
