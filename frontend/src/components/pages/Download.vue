<template>
  <SpotlightLayout>
    <h1 class="font-black text-3xl">Download a file</h1>
    <p class="mb-3 font-medium">Copy the file's URL and paste it in here.</p>
    <div class="w-full gap-1.5 flex flex-col justify-center mx-auto">
      <div class="flex gap-1.5 justify-center">
        <input ref="fileURL" class="w-1/2 font-normal resize-none py-3 px-6 bg-secondary-100 outline-none ring-1 ring-inset ring-secondary-200 shadow-sm rounded-lg focus:ring-2 focus:ring-primary-600 ease-in-out duration-300" autofocus spellcheck="false" placeholder="Paste URL here.">
        <button @click="DownloadFile(fileURL.value)" class="bg-primary-200 hover:bg-primary-100 rounded-lg shadow-sm py-3 px-6 text-primary-600 font-bold ease-in-out duration-300">Download</button>
      </div>
    </div>
    <span class="mt-1 text-sm font-bold text-primary-600 hover:text-primary-500 cursor-pointer" @click="OpenDownloadPath">Open Download folder</span>
  </SpotlightLayout>
</template>
<script setup>
import SpotlightLayout from "../layouts/SpotlightLayout.vue";
import {onMounted, ref} from "vue";
import {DownloadFile, OpenDownloadPath, OpenExplorer} from "../../../wailsjs/go/main/App.js";
import {BrowserOpenURL, EventsOn} from "../../../wailsjs/runtime/runtime.js";

let fileURL

const sendError = (data) => {
  console.log(data)
}

onMounted(() => {
  EventsOn("error", sendError)
})
</script>