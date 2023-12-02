<template>
  <RouterLink v-if="type === 'router'" class="flex items-center font-bold flex-row gap-2 px-6 py-2 rounded-lg hover:bg-primary-100 hover:text-primary-600 duration-150 ease-in-out" :to="target">
    <slot></slot>
  </RouterLink>

  <a v-else-if="type === 'browser'" @click="BrowserOpenURL(target)" class="flex items-center font-bold flex-row gap-2 px-6 py-2 rounded-lg hover:bg-primary-100 hover:text-primary-600 duration-150 ease-in-out" href="#">
    <slot></slot>
  </a>
</template>

<script setup>
import {BrowserOpenURL} from "../../wailsjs/runtime/runtime.js";

defineProps({
  target: {
    type: String,
    default: "/",
    required: false
  },
  type: {
    type: String,
    default: "router"
  }
})
</script>