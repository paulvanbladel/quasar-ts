import {
  VuexModule,
  Module,
  Mutation,
  getModule,
  Action
} from 'vuex-module-decorators';

import ToDoModel from 'src/models/ToDoModel';
import store from '../store';
import { resolve } from 'url';

@Module({
  store,
  namespaced: true,
  dynamic: true,
  name: 'todoModule'
})
class TodoModuleClass extends VuexModule {
  public myProp: number = 7;
  public todos: ToDoModel[] = Array<ToDoModel>();
  @Mutation
  public setMyProp(value: number) {
    this.myProp = value;
  }
  @Mutation
  public addToDoToList(toDoModel: ToDoModel) {
    this.todos.push(toDoModel);
  }
  @Action
  public LoadTodos() {
    const todoSeed: ToDoModel[] = [
      { Name: 'First today ever', IsCompleted: false },
      { Name: 'Second todo', IsCompleted: false },
      { Name: 'Third today', IsCompleted: false }
    ];
    return new Promise(resolve => {
      setTimeout(() => {
        todoSeed.forEach(t => this.addToDoToList(t));
        resolve();
      }, 1500);
    });
  }
}
export const TodoStore = getModule(TodoModuleClass);
