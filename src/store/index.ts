import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation
 */

// interface StoreType {
//   todoModule: TodoState;
// }
export default new Vuex.Store({});
// export default function(/* { ssrContext } */) {
//   const Store = new Vuex.Store<StoreType>({});

//   return Store;
// }
