<template>
  <a class="text-lg font-semibold hover:text-primary-600" :href="this.target">
    <slot></slot>
  </a>
</template>

<script setup>
defineProps({
  target: {
    type: String
  }
})
</script>