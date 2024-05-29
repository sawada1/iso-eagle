<script setup>
import { RouterLink, RouterView } from 'vue-router'
import navbar from './components/navbar.vue';
import Footer from './components/footer.vue';
</script>

<template>
  <div>
  <navbar />

  <RouterView />
  <Footer />
    
  </div>

</template>

<style scoped>

</style>
