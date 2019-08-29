/* eslint-disable */
/**
 * @jest-environment jsdom
 */

import { mount, createLocalVue, shallowMount } from '@vue/test-utils';
import QBUTTON from './z-demo.vue';
import * as All from 'quasar';
import { VueConstructor } from 'vue';
// import langEn from 'quasar/lang/en-us' // change to any language you wish! => this breaks wallaby :(
const { Quasar, date } = All;

function isComponent(value: any): value is VueConstructor {
  return value && value.component && value.component.name != null;
}

const components = Object.keys(All).reduce<{ [index: string]: VueConstructor }>(
  (object, key) => {
    const val = (All as any)[key];
    if (isComponent(val)) {
      object[key] = val;
    }
    return object;
  },
  {}
);
describe('Mount Quasar', () => {
  const localVue = createLocalVue();
  localVue.use(Quasar, { components }); // , lang: langEn

  const wrapper = mount(QBUTTON, {
    localVue
  });
  const vm = wrapper.vm;

  // const factory = (propsData: any = {}) => {
  //   return shallowMount(QBUTTON, {
  //     // <= used `shallowMount` instead of `mount`, will stub all **registered** components into the template
  //     localVue,
  //     propsData
  //   });
  // };

  it('passes the sanity check and creates a wrapper', () => {
    expect(wrapper.isVueInstance()).toBe(true);
  });

  it('has a created hook', () => {
    expect(typeof (vm as any).increment).toBe('function');
  });

  it('accesses the shallowMount', () => {
    expect(vm.$el.textContent).toContain('rocket muffin');
    expect(wrapper.text()).toContain('rocket muffin'); // easier
    expect(wrapper.find('p').text()).toContain('rocket muffin');
  });

  it('sets the correct default data', () => {
    expect(typeof (vm as any).counter).toBe('number');
    expect((vm as any).counter).toBe(0);
  });

  it('correctly updates data when button is pressed', () => {
    const button = wrapper.find('button');
    button.trigger('click');
    expect((vm as any).counter).toBe(1);
  });

  it('formats a date without throwing exception', () => {
    // test will automatically fail if an exception is thrown
    // MMMM and MMM require that a language is 'installed' in Quasar
    let formattedString = date.formatDate(Date.now(), 'YYYY MMMM MMM DD');
    console.log('formattedString', formattedString);
  });
});
