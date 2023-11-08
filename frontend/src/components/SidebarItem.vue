<template>
  <a class="flex items-center font-medium flex-row gap-2 px-6 py-2 rounded-lg hover:bg-secondary-100 hover:text-primary-600 duration-150 ease-in-out" :href="this.target">
    <slot></slot>
  </a>
</template>

<script setup>
defineProps({
  target: {
    type: String,
    default: "/"
  }
})
</script>