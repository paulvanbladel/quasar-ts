import Vue from 'vue';
import Component from 'vue-class-component';
import ToDoModel from '../models/ToDoModel';
import { namespace } from 'vuex-class';
const todoModule = namespace('example');
@Component({})
export default class TodoList extends Vue {
  // name: 'PageName',
  @todoModule.State
  private todos!: ToDoModel[];
  private model: ToDoModel;
  public constructor() {
    super();
    this.model = new ToDoModel();
  }
  @todoModule.Mutation
  private addToDo!: (model: ToDoModel) => void;
  private DoAddToDo() {
    this.addToDo(this.model);
    this.model = new ToDoModel();
  }
}
