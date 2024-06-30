<template>
    <div>
        <swiper dir="ltr" :pagination="{
          clickable: true,
        }" :modules="modules" class="mySwiper">
          <swiper-slide>
            <img src="../assets/images/hero1.png" alt="hero1" loading="lazy">
            <!-- <div class="text">
              <h3>Security of <br> your industrial investments </h3>
              <p> Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
                ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in
                hendrerit. </p>
            </div> -->
          </swiper-slide>
          <swiper-slide>
            <img src="../assets/images/hero2.png" alt="hero2" loading="lazy">
          </swiper-slide>
          <swiper-slide>
            <img src="../assets/images/hero3.png" alt="hero3" loading="lazy">
          </swiper-slide>
          <swiper-slide>
            <img src="../assets/images/hero4.png" alt="hero4" loading="lazy">
          </swiper-slide>
        </swiper>
    </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import { Pagination, FreeMode, Navigation, Thumbs } from 'swiper/modules';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import 'swiper/css/pagination';
import 'swiper/css';
import { computed, ref , watch } from 'vue';
import { useI18n } from 'vue-i18n';

const thumbsSwiper = ref(null);


const setThumbsSwiper = (swiper) => {
  thumbsSwiper.value = swiper;
};

let modules = ref([Pagination, FreeMode, Navigation, Thumbs]);
</script>