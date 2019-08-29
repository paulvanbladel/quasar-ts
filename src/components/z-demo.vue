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

<script lang='ts' src='./z-demo.ts'>
</script>
