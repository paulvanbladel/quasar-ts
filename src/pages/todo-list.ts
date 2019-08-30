import Vue from 'vue';
import Component from 'vue-class-component';
import ToDoModel from '../models/ToDoModel';

@Component({})
export default class TodoList extends Vue {
  // name: 'PageName',
  private todos: ToDoModel[];
  private model: ToDoModel;
  public constructor() {
    super();
    this.todos = [];
    this.model = new ToDoModel();
  }
  private get ToDos(): ToDoModel[] {
    return this.$store.state.example.todos;
  }
  private AddToDo() {
    this.$store.dispatch('example/addToDo', this.model);
    // this.todos.push(this.model);
    this.model = new ToDoModel();
  }
}
