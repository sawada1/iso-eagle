<template>
    <div>
        <div class="testimonial-container m-top">
          <v-container>
            <v-row>
              <v-col cols="12" xl="4" lg="4">
                <img class="w-100" src="../assets/images/what2.png">
              </v-col>
              <v-col cols="12" xl="8" lg="8" class="" style="overflow: hidden;">
                <div class="testi w-100 px-3">
                  <h3> {{ $t('clients') }} </h3>
                  <swiper :loop="true" :spaceBetween="70" :thumbs="{ swiper: thumbsSwiper }" :modules="modules"
                    class="testimonal1 w-100">
                    <swiper-slide class="" v-for="i in 6">
                      <div class="box">
                        <div class="img-container">
                          <div class="image">
                            <img src="../assets/images/person.png" alt="test" loading="lazy">
                          </div>
                          <div class="d-flex flex-column gap-3">
                            <span> name Client </span>
                            <div class="stars">
                              <img v-for="i in 5" src="../assets/images/star.svg" alt="">
                            </div>
                          </div>
                        </div>
                        <div class="text">
                          <div class="test1">
                            <img src="../assets/images/test1.png" alt="">
                          </div>
                          <div class="test2">
                            <img src="../assets/images/test2.png" alt="">
                          </div>
                          <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod
                            tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                            nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
                          </p>
                        </div>
                      </div>
                    </swiper-slide>
                  </swiper>
    
                  <swiper @swiper="setThumbsSwiper" :loop="true" :spaceBetween="10"  :freeMode="true"
                    :watchSlidesProgress="true" :modules="modules" :breakpoints="{
          '300': {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          '700': {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          '1024': {
            slidesPerView: 4,
            spaceBetween: 10,
          },
        }" class="persons px-3">
                    <swiper-slide v-for="i in 6">
                      <div class="box">
                        <img src="../assets/images/person.png" alt="">
                      </div>
                    </swiper-slide>
    
    
                  </swiper>
                </div>
              </v-col>
            </v-row>
          </v-container>
        </div>
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