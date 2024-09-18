<script setup lang="ts">
import { RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import useAuthService from './useAuthService'

useAuthService()
</script>

<template>
  <div class="app">
    <HelloWorld msg="You did it!" />
    <RouterView class="app_body" />
  </div>
</template>

<style scoped lang="scss">
.app {
  display: flex;
  flex-direction: column;

  &__body {
    height: 100%;
    flex: 1;
  }
}
</style>
