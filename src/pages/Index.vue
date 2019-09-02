<template>
  <q-page class="flex">
    <z-demo prop1="hi there"></z-demo>
    <div>myProp : {{myProp}}</div>
  </q-page>
</template>

<style>
</style>

<script lang="ts">
import Vue from 'vue';
import ZDemo from '../components/z-demo';
import Component from 'vue-class-component';
import { TodoModule } from 'src/store/todo-module';
@Component({
  components: { ZDemo }
})
export default class Index extends Vue {
  get myProp() {
    debugger;
    return TodoModule.myProp;
  }
}
</script>
