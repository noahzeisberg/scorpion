<template>
  <a v-if="type === 'browser'" @click="BrowserOpenURL(target)" href="#" class="flex px-6 py-3 rounded-lg items-center gap-3 duration-300 ease-in-out hover:bg-primary-100 hover:text-primary-600 hover:shadow-none hover:cursor-pointer bg-secondary-100 shadow-sm">
    <slot></slot>
    <div class="flex flex-col">
      <h1 class="font-black">{{ heading }}</h1>
      <p class="font-medium">{{ description }}</p>
    </div>
  </a>

  <RouterLink v-if="type === 'router'" :to="target" class="flex px-6 py-3 rounded-lg items-center gap-3 duration-300 ease-in-out hover:bg-primary-100 hover:text-primary-600 hover:shadow-none hover:cursor-pointer bg-secondary-100 shadow-sm">
    <slot></slot>
    <div class="flex flex-col">
      <h1 class="font-black">{{ heading }}</h1>
      <p class="font-medium">{{ description }}</p>
    </div>
  </RouterLink>
</template>

<script setup>
import {BrowserOpenURL} from "../../wailsjs/runtime/runtime.js";

defineProps({
  heading: {
    type: String
  },
  description: {
    type: String
  },
  type: {
    type: String,
    default: "router"
  },
  target: {
    type: String,
    default: "/"
  }
})
</script>