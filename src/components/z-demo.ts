import Vue from 'vue';
import { Calculator } from '../app-core/calculator';
import Component from 'vue-class-component';
import { TodoStore } from 'src/store/todo-module';
@Component({
  props: {
    prop1: String
  }
})
export default class ZDemo extends Vue {
  public get counter() {
    return TodoStore.myProp;
  }
  public input = 'rocket muffin';
  public increment() {
    TodoStore.setMyProp(TodoStore.myProp + 1);
  }
  public get MyComputedProp() {
    const c = new Calculator();
    const result = c.Add(11, this.counter);
    // eslint-disable-next-line
    return `your asked: ${(this as any).prop1} ${result}`;
  }
}
