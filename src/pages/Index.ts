import Vue from 'vue';
import ZDemo from '../components/z-demo';
import Component from 'vue-class-component';
import { TodoStore } from 'src/store/todo-module';
@Component({
  components: { ZDemo }
})
export default class Index extends Vue {
  private get myProp() {
    return TodoStore.myProp;
  }
}
