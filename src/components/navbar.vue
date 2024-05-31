<template>

  <div class="">
    <header class="navbar-container">
      <v-container class="">
        <div class="main-nav">
         <RouterLink to="/">
          <img src="../assets/images/nav-logo.png" alt="">
         </RouterLink>
          <nav class="mob" :class="{ 'active': navActive }">
            <i @click="navActive = !navActive" class="fa-solid fa-xmark close-icon"></i>
            <RouterLink @click="navActive = !navActive" to="/">Home</RouterLink>
            <RouterLink @click="navActive = !navActive" to="/about">About</RouterLink>
            <RouterLink @click="navActive = !navActive" to="/services">services</RouterLink>
            <RouterLink @click="navActive = !navActive" to="/products">products</RouterLink>
            <RouterLink @click="navActive = !navActive" to="/videos">videos</RouterLink>
            <RouterLink @click="navActive = !navActive" to="/contact">contact</RouterLink>
            <div class="search-container">
              <i v-if="!searchActive" @click="searchActive = !searchActive" class="fa-solid fa-magnifying-glass"></i>
              <i v-if="searchActive" @click="searchActive = !searchActive" class="fa-solid fa-xmark"></i>
              <div class="search-input" :class="{ 'active': searchActive }">
                <input type="text" placeholder="search">
                <i class="fa-solid fa-magnifying-glass"></i>
              </div>
            </div>
            <div class="lang">
              <select name="" id="">
                <option value="en">english</option>
                <option value="ar">arabic</option>
              </select>
              <i class="fa-solid fa-chevron-down"></i>

            </div>
          </nav>

          <div class="icons d-none d-xl-flex d-lg-flex d-md-flex">
            <div class="icon">
              <i class="fa-brands fa-facebook-f"></i>
            </div>
            <div class="icon">
              <i class="fa-brands fa-linkedin-in"></i>
            </div>
            <div class="icon">
              <i class="fa-brands fa-youtube"></i>
            </div>
          </div>

          <i @click="navActive = !navActive" class="fa-solid fa-bars-staggered open-bar-nav"></i>

        </div>
      </v-container>
    </header>
  </div>

</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router';
import { ref , onMounted , computed } from 'vue'
let searchActive = ref(false);
let navActive = ref(false);
</script>

<style lang="scss">
    
</style>