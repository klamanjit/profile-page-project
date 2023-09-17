<script setup>
const props = defineProps({
  link: {
    type: Boolean,
    required: false,
    default: false,
  },
  to: {
    type: String,
    required: false,
    default: "/",
  },
  mode: {
    type: String,
    required: false,
    default: null,
  },
});
</script>

<template>
  <button v-if="!link" :class="mode">
    <slot></slot>
  </button>

  <RouterLink v-else :class="mode" :to="to">
    <slot></slot>
  </RouterLink>
</template>

<style scoped>
.hero-home-button {
  @apply px-2 py-4 text-green-600 font-semibold border-2 border-green-600 shadow-sm hover:bg-slate-50 hover:text-green-950 transition-all duration-300;
}

.card-project-button {
  @apply px-4 py-3 text-green-50 bg-green-600 border-none shadow-sm rounded-md hover:bg-slate-50 hover:text-slate-950 transition-all duration-300;
}
</style>
