import Vue from 'vue';
import Home from '../../../src/components/Index.vue';
import {expect} from 'chai';
describe('Hello.vue', () => {
  it('should render correct contents', () => {
    const vm = new Home();
    vm.$mount();
    expect(vm.myVar).to.equal('hi there');
    // expect(vm.$el.querySelector('.hello h1').textContent)
    //   .to.equal('Welcome to Your Vue.js App')
  });
});
