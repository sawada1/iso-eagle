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
            <RouterLink @click="navActive = !navActive" to="/">{{ $t('home') }}</RouterLink>
            <RouterLink @click="navActive = !navActive" to="/about">{{ $t('about') }}</RouterLink>
            <RouterLink @click="navActive = !navActive" to="/services">{{ $t('services') }}</RouterLink>
            <RouterLink @click="navActive = !navActive" to="/products">{{ $t('products') }}</RouterLink>
            <RouterLink @click="navActive = !navActive" to="/videos">{{ $t('videos') }}</RouterLink>
            <RouterLink @click="navActive = !navActive" to="/contact">{{ $t('contact') }}</RouterLink>
            <div class="search-container">
              <i v-if="!searchActive" @click="searchActive = !searchActive" class="fa-solid fa-magnifying-glass"></i>
              <i v-if="searchActive" @click="searchActive = !searchActive" class="fa-solid fa-xmark"></i>
              <div class="search-input" :class="{ 'active': searchActive }">
                <input type="text" :placeholder="$t('search')">
                <i class="fa-solid fa-magnifying-glass"></i>
              </div>
            </div>
            <div class="lang">
              <select v-model="locale" name="" id="" @change="changeLang">
                <option value="en">{{ $t('english') }}</option>
                <option value="ar">{{ $t('arabic') }}</option>
              </select>
              <i class="fa-solid fa-chevron-down"></i>

            </div>
          </nav>

          <div class="icons d-none d-xl-flex d-lg-flex d-md-flex">
            <a v-if="general" :href="general.facebook_url" target="_blank" class="icon">
              <i class="fa-brands fa-facebook-f"></i>
            </a>
            <a v-if="general" :href="general.linkedin_url" target="_blank"  class="icon">
              <i class="fa-brands fa-linkedin-in"></i>
            </a>
            <a v-if="general" :href="general.youtube_url" target="_blank" class="icon">
              <i class="fa-brands fa-youtube"></i>
            </a>
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
import { useI18n } from 'vue-i18n';
const { locale, setLocale, localePath } = useI18n();
let props = defineProps(["general"]);
const changeLang = async () => {
  const cssPath = locale.value === 'ar' ? './src/assets/rtl/main-rtl.scss' : './src/assets/styles/main.scss';
      // const cssLink = document.createElement('link');
      // cssLink.rel = 'stylesheet';
      // cssLink.href = cssPath;
      let mainStyle = document.getElementById('styleid');
      if (mainStyle) {
        mainStyle.setAttribute("href", cssPath);
      }
      if (locale.value === "ar") {
        document.documentElement.lang = "ar";
        document.documentElement.dir = "rtl";
    } else {
        document.documentElement.lang = "en";
        document.documentElement.dir = "ltr";
    }

};
let searchActive = ref(false);
let navActive = ref(false);
</script>

<style lang="scss">
    
</style>