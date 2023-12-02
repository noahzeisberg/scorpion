<template>
  <section class="w-full h-full flex gap-1 flex-col justify-center items-center">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-12 h-12">
      <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
    <h1 class="font-extrabold text-3xl">Page Not Found!</h1>
    <p>There's currently no page called {{ $route.name }}!</p>
    <a class="text-primary-600 font-bold" href="/">Back to home.</a>
  </section>
</template>