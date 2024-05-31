<script setup>
import { RouterLink, RouterView } from 'vue-router';
import { ref, onMounted } from 'vue';
import navbar from './components/navbar.vue';
import Footer from './components/footer.vue';

let upActive = ref(false);

window.addEventListener("scroll", function () {
  if (this.scrollY >= 1000) {
    upActive.value = true;
  } else if (this.scrollY < 300) {
    upActive.value = false;
  }
});

const upToPage = () => {
  window.scrollTo({
    top: 0,
    behavior:'smooth'
  })
}
</script>

<template>
  <div>
    <navbar />
    <div @click="upToPage()" class="up-page" :class="{ 'active': upActive }">
      <img src="./assets/images/up.svg" alt="">
    </div>
    <RouterView />
    <Footer />

  </div>

</template>

<style scoped>


</style>
