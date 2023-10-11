<script setup>
import { RouterView } from "vue-router";
</script>

<template>
  <side-header></side-header>
  <RouterView v-slot="{ Component }">
    <Transition name="route">
      <component :is="Component"></component>
    </Transition>
  </RouterView>
</template>

<style scoped>
.route-enter-from {
  @apply opacity-0 translate-x-[-30px];
}

.route-leave-to {
  @apply opacity-0 translate-x-[30px];
}

.route-enter-active {
  @apply transition-all duration-300 ease-out;
}

.route-leave-active {
  @apply transition-all duration-300 ease-in;
}

.route-enter-to,
.route-leave-from {
  @apply opacity-100 translate-x-0;
}
</style>
