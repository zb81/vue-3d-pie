<script setup lang="ts">
import Vue3dPie from './Vue3dPie/Vue3dPie.vue'

const fakeData = [
  {
    value: 1.5,
    color: '#3b82f6',
    label: '',
    explode: false,
    height: 0.5,
    offset: 0,
  },
  {
    value: 0.78,
    color: '#f43f5e',
    label: '',
    explode: false,
    height: 0.5,
    offset: 0,
  },
  {
    value: 0.62,
    color: '#f97316',
    label: '',
    explode: false,
    height: 0.5,
    offset: 0,
  },
  {
    value: 0.48,
    color: '#22c55e',
    label: '',
    explode: false,
    height: 0.5,
    offset: 0,
  },
]
</script>

<template>
  <Vue3dPie :pie-data="fakeData" />
</template>

<style>
html, body {
  margin: 0;
}

#app {
  width: 100vw;
  height: 100vh;
}
</style>
