<template>
  <q-page class="flex">
    <z-demo prop1="hi there"></z-demo>
  </q-page>
</template>

<style>
</style>

<script lang="ts">
import Vue from 'vue';
import ZDemo from '../components/z-demo.vue';
import Component from 'vue-class-component';
@Component({
  components: { ZDemo }
})
export default class Index extends Vue {}
</script>
