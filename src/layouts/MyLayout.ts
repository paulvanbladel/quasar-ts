import { openURL as doOpenUrl } from 'quasar';

import Component from 'vue-class-component';
import Vue from 'vue';

// import Vue from 'vue';
@Component({
  components: {}
})
export default class MyLayout extends Vue {
  private leftDrawerOpen: boolean = false;
  private openURL(url: string) {
    return doOpenUrl(url);
  }
}
