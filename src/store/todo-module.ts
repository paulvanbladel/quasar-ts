import { VuexModule, Module, Mutation } from 'vuex-module-decorators';
import ToDoModel from 'src/models/ToDoModel';

@Module({
  namespaced: true
})
export default class TodoModule extends VuexModule {
  public myProp: string = 'propy';
  public todos: ToDoModel[] = Array<ToDoModel>();
  @Mutation
  public setMyProp(value: string) {
    this.myProp = value;
  }
  @Mutation
  public addToDo(toDoModel: ToDoModel) {
    this.todos.push(toDoModel);
  }
}
