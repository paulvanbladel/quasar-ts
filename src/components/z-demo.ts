import Vue from 'vue';
import { Calculator } from '../app-core/calculator';
import Component from 'vue-class-component';
@Component({
  props: {
    prop1: String
  }
})
export default class ZDemo extends Vue {
  public counter = 0;
  public input = 'rocket muffin';
  public increment() {
    this.counter++;
    this.$store.commit('todoModule/setMyProp', this.counter);
  }
  public get MyComputedProp() {
    const c = new Calculator();
    const result = c.Add(1, 1);
    // eslint-disable-next-line
    return `your asked: ${(this as any).prop1} ${result}`;
  }
}
