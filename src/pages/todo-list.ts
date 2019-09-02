import Vue from 'vue';
import Component from 'vue-class-component';
import ToDoModel from '../models/ToDoModel';
import { TodoStore } from 'src/store/todo-module';
@Component({})
export default class TodoList extends Vue {
  public get todos(): ToDoModel[] {
    return TodoStore.todos;
  }
  private model: ToDoModel;
  public constructor() {
    super();
    this.model = new ToDoModel();
  }
  public DoAddToDo() {
    TodoStore.addToDoToList(this.model);
    this.model = new ToDoModel();
  }
  public created() {
    TodoStore.LoadTodos();
  }
}
