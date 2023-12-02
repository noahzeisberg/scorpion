<template>
  <SpotlightLayout>
    <h1 class="font-black text-xl text-primary-600">802</h1>
    <h1 class="font-black text-3xl">Not Implemented</h1>
    <p class="font-medium mb-3">This function will be implemented in the future.</p>
  </SpotlightLayout>
</template>

<script setup>
import {SearchPackage} from "../../../wailsjs/go/main/App.js";
import {useRoute} from "vue-router";
import SpotlightLayout from "../layouts/SpotlightLayout.vue";

SearchPackage(useRoute().params.query).then(result => {
  console.log(result)
})
</script>