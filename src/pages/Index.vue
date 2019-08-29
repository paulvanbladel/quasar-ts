<template>
  <q-page class="flex">
    <z-demo></z-demo>
  </q-page>
</template>

<style>
</style>

<script lang="ts">
import Vue from 'vue';
import ZDemo from '../components/z-demo.vue';
export default Vue.extend({
  name: 'PageIndex',
  components: { ZDemo }
});
</script>
