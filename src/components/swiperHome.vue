<template>
    <div>
        <swiper dir="ltr" :autoplay="{
      delay: 2000,
      disableOnInteraction: false,
    }" :pagination="{
          clickable: true,
        }" :modules="modules" class="mySwiper">
          <swiper-slide v-for="item in images">
            <img :src="item" alt="hero1" loading="lazy">
  
          </swiper-slide>
          <!-- <swiper-slide>
            <img src="../assets/images/hero2.png" alt="hero2" loading="lazy">
          </swiper-slide>
          <swiper-slide>
            <img src="../assets/images/hero3.png" alt="hero3" loading="lazy">
          </swiper-slide>
          <swiper-slide>
            <img src="../assets/images/hero4.png" alt="hero4" loading="lazy">
          </swiper-slide> -->
        </swiper>
    </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import 'swiper/css/pagination';
import 'swiper/css';
import { computed, ref , watch } from 'vue';
import { useI18n } from 'vue-i18n';

let props = defineProps(["images"])
const thumbsSwiper = ref(null);


const setThumbsSwiper = (swiper) => {
  thumbsSwiper.value = swiper;
};

let modules = ref([Pagination, Autoplay]);
</script>