<template>
  <main class="layout">
    <header style="--wails-draggable:drag" class="px-6 flex items-center justify-between bg-secondary-50 border-b border-b-secondary-200 layout">
      <div class="flex items-center gap-3">
        <img class="w-8 h-8 bg-primary-600 rounded-lg" src="../assets/images/icon.svg">
        <h1 class="text-lg font-bold text-primary-600">Scorpion</h1>
      </div>

      <div class="flex items-center gap-3">
        <NavLink>

        </NavLink>

        <svg @click="WindowMinimise" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6 hover:text-primary-600 duration-300 ease-in-out">
          <path stroke-linecap="round" stroke-linejoin="round" d="M18 12H6" />
        </svg>

        <svg @click="Quit" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6 hover:text-primary-600 duration-300 ease-in-out">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </div>
    </header>

    <aside class="p-3 flex flex-col gap-1 bg-secondary-50 layout">
      <SidebarItem target="/">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
        </svg>
        <span>Home</span>
      </SidebarItem>
      <SidebarItem target="#search">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
        </svg>
        <span>Search</span>
      </SidebarItem>
      <SidebarItem @click="BrowserOpenURL('https://github.com/NoahOnFyre/scorpion/issues')">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
        </svg>
        <span>Report Problems</span>
      </SidebarItem>
    </aside>

    <section class="bg-secondary-50 layout">
      <slot></slot>
    </section>
  </main>
</template>

<script setup>
import SidebarItem from "./SidebarItem.vue";
import { WindowMinimise, Quit, BrowserOpenURL } from "../../wailsjs/runtime/runtime.js";
import NavLink from "./NavLink.vue";
</script>

<style scoped>
main.layout {
  display: grid;
  grid-template-areas:
        "header header header"
        "side content content"
        "side content content";
  grid-template-rows: 65px auto 75px;
  grid-template-columns: max-content auto auto;

  @apply w-screen h-screen
}

header.layout {
  grid-area: header;
}

aside.layout {
  grid-area: side;
}

section.layout {
  grid-area: content;
}
</style>