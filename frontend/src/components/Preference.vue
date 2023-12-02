<template>
  <div class="w-full my-1 flex items-center justify-between">
    <p class="font-black cursor-help" :title="description">{{ title }}</p>
    <slot></slot>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    default: "Not set",
    required: true,
  },
  description: {
    type: String,
    required: true,
  }
})
</script>