import {
  VuexModule,
  Module,
  Mutation,
  getModule,
  Action
} from 'vuex-module-decorators';

import ToDoModel from 'src/models/ToDoModel';
import store from '../store';

@Module({
  store,
  namespaced: true,
  dynamic: true,
  name: 'todoModule'
})
class TodoModuleClass extends VuexModule {
  public myProp: string = 'propy';
  public todos: ToDoModel[] = Array<ToDoModel>();
  @Mutation
  public setMyProp(value: string) {
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
    todoSeed.forEach(t => this.addToDoToList(t));
  }
}
export const TodoStore = getModule(TodoModuleClass);
