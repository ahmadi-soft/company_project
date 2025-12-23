<template>
  <div class="app-container h-full">
    <NavBar />
    <div class="min-h-[80vh]">
      <slot />
    </div>
    <Footer />
  </div>
</template>

<script setup>
import Footer from "./Footer.vue";
import NavBar from "./TopNavbar.vue";
</script>

<style scoped></style>
