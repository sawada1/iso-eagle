<script setup>
import axios from 'axios';
import { RouterLink, RouterView } from 'vue-router';
import { ref, onMounted , onBeforeMount , computed , watchEffect} from 'vue';
import navbar from './components/navbar.vue';
import Footer from './components/footer.vue';
import network from './components/network.vue';
import { useI18n } from 'vue-i18n';
const { locale } = useI18n();
import { Vue3Lottie } from "vue3-lottie";
import {getUrl} from './composables/url.js';
let general = ref();
const direction = ref('rtl');
const getGeneral = async()=>{
  let result = await axios.get(`${getUrl()}/general`,{
    headers:{
      "Content-Language": `${locale.value}`,
    }
  });
  if(result.status == 200){
     general.value = result.data.data;
  }
}
getGeneral();
let upActive = ref(false);

window.addEventListener("scroll", function () {
  if (this.scrollY >= 1000) {
    upActive.value = true;
  } else if (this.scrollY < 300) {
    upActive.value = false;
  }
});

let checkInt = ref(false);
window.addEventListener("online", function () {
    checkInt.value = false;
  });
  window.addEventListener("offline", function () {
    checkInt.value = true;
  });

const upToPage = () => {
  window.scrollTo({
    top: 0,
    behavior:'smooth'
  })
}
</script>

<template>
  <div :class="locale == 'ar' ? 'rtl' : 'ltr'">
    <navbar :general="general" />
    <div @click="upToPage()" class="up-page" :class="{ 'active': upActive }">
      <img src="./assets/images/up.svg" alt="">
    </div>
    <RouterView />
    <Footer :general="general" />
    <network v-if="checkInt" />

  </div>

</template>

<style lang="scss">
//  .rtl{
//   @import './assets/rtl/main-rtl.scss';
// }
// .ltr{
//    @import './assets/styles/main.scss';
//  }

.v-overlay-container{
    iframe{
        width: 100% !important;
        height: 100% !important;
    }
}

html[dir="rtl"] .v-container{
  direction: rtl !important;
}
html[dir="ltr"] .v-container{
  direction: ltr !important;
}
html[dir="rtl"] .arrow-rtl{
  transform: scaleX(-1);
}

</style>
