<template>
  <div>
    <p class="textContent">{{ input }}</p>
    <span>{{ counter }}</span>
    <q-btn
      id="mybutton"
      @click="increment()"
    >click me</q-btn>
    <p>{{prop1}}</p>
    <p>{{MyComputedProp}}</p>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue';
import { Calculator } from '../app-core/calculator';
import Component from 'vue-class-component';
@Component({
  props: {
    prop1: String
  }
})
export default class ZDemo extends Vue {
  counter = 0;
  input = 'rocket muffin';
  increment() {
    this.counter++;
  }
  get MyComputedProp() {
    const c = new Calculator();
    const result = c.Add(1, 1);
    // eslint-disable-next-line
    return `your asked: ${(this as any).prop1} ${result}`;
  }
}
</script>
