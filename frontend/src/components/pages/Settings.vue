<template>
  <ContentLayout class="mx-24">
    <h1 class="mt-6 font-black text-3xl">Appearance</h1>
    <p class="font-medium">Modify the appearance of Scorpion.</p>
    <Preference title="[BETA] Use transparency" description="Make the window transparent and add a background blur.">
      <input v-model="transparency" class="accent-primary-600" type="checkbox">
    </Preference>
    <Preference title="Display cards" description="Show or hide the cards on the home page.">
      <input v-model="showCards" class="accent-primary-600" type="checkbox">
    </Preference>
    <Apply @click=""></Apply>

    <h1 class="mt-6 font-black text-3xl">File Download</h1>
    <p class="font-medium">Change how the file downloader works.</p>
    <Preference title="" description="Make the window transparent and add a background blur.">
      <input v-model="transparency" class="accent-primary-600" type="checkbox">
    </Preference>

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
    "transparency": transparency,
    "show_cards": showCards,
  })
}

let transparency = ref(true)
let showCards = ref(true)
</script>