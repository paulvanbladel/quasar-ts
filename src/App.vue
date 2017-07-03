<template>
  <!-- Don't drop "q-app" class -->
  <div id="q-app">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
/*
 * Root component
 */
import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
  name: 'App'
})
export default class App extends Vue {
}
</script>

<style></style>
