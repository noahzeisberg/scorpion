<template>
  <ContentLayout class="mx-24">
    <h1 class="mt-6 font-black text-3xl">Appearance</h1>
    <p class="font-medium">Modify the appearance of Scorpion.</p>
    <Preference title="Use transparency" description="Make the window transparent and add a background blur.">
      <input v-model="transparency" class="accent-primary-600" type="checkbox">
    </Preference>
    <Apply @click=""></Apply>

    <h1 class="mt-6 font-black text-3xl">File Download</h1>
  </ContentLayout>
</template>
<script setup>
import ContentLayout from "../layouts/ContentLayout.vue";
import Preference from "../Preference.vue";
import {ref} from "vue";
import Apply from "../Apply.vue";
import {UpdateSettings} from "../../../wailsjs/go/main/App.js";

function update() {
  UpdateSettings({
    "transparency": transparency
  })
}

let transparency = ref(true)
</script>