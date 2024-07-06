<script setup>
import { computed, ref , watch } from 'vue';
import { useI18n } from 'vue-i18n';
import axios from 'axios';
import {getUrl} from '../composables/url.js';
import swiperHome from '../components/swiperHome.vue';
import swiper2 from '../components/swiper2.vue';
import loader from '../components/loader.vue';
const { locale, setLocale, localePath } = useI18n();
let sliderArr = ref([]);
let brandsArr = ref([]);
let aboutArr = ref([]);
let doArr = ref([]);
let productsArr = ref([]);
let videosArr = ref([]);
let pending = ref(false);

let general = ref();
const getGeneral = async()=>{
  pending.value = true;
  let result = await axios.get(`${getUrl()}/general`,{
    headers:{
      "Content-Language": `${locale.value}`,
    }
  });
  if(result.status == 200){
    pending.value = false;
     general.value = result.data.data;
  }
}
getGeneral();

// watch(locale, (newLocale, oldLocale) => {
  //       console.log(`Locale changed from ${oldLocale} to ${newLocale}`);
  //       // getBrands();
  //     });
  let dirSwiper = ref('rtl');
  watch(()=> locale.value , (lang)=>{
    console.log(lang)
    dirSwiper.value = lang == 'ar' ? 'rtl' : 'ltr'
    getGeneral();
  })


</script>
<style scoped>
 /* html[dir="rtl"] .swiper{
  direction: rtl !important;
}
html[dir="ltr"] .swiper{
  direction: ltr !important;
} */
</style>

<template>
  <div style="min-height:100vh;">
    <!-- {{ dirSwiper }} -->
      <div v-if="general">
   
      <swiperHome />
        <v-container>
          <div class="brands-container p-4 m-top">
            <v-row >
              <v-col v-for="i in 6" cols="6" xl="2" lg="2" md="4">
                <img src="../assets/images/brand1.svg" alt="brand1" loading="lazy">
              </v-col>
            </v-row>
            <div class="d-flex align-items-center justify-content-center">
            <router-link to="/brands">
              <button class="Btn mt-16"> {{ $t('viewmore') }} </button>
            </router-link>
            </div>
          </div>
        </v-container>
        <div class="about-home m-top" :style="{backgroundImage: `url(${general.about_us_home_background})`}">
          <div class="text-container">
            <div class="d-flex flex-column gap-5 text-center">
              <h3> {{ $t('AboutISOEagle') }} </h3>
              <!-- <p> Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                laoreet
                dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper
                suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in
                vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et
                accumsan
                et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla
                facilisi.
                Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                laoreet
                dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper
                suscipit lobortis nisl ut aliquip ex ea commodo consequat.
              </p> -->
              <div v-html="general.about_us_text"></div>
            </div>
            <div class="">
            <router-link to="/about">
              <button class="Btn"> {{ $t('knowmore') }} </button>
            </router-link>
            </div>
          </div>
        </div>
    
        <div class="what-we-do-container">
          <v-row no-gutters class="h-100">
            <v-col class="d-none d-xl-block d-lg-block h-100" cols="4">
              <div class="img-container">
                <!-- <img src="../assets/images/what1.png" alt="what-img" loading="lazy"> -->
                <img  :src="general.what_we_do_photo" alt="what-img" loading="lazy">
              </div>
            </v-col>
            <v-col cols="12" xl="8" lg="8" class="main-text">
              <div class="text-container">
                <div class="text mb-5">
                  <h3> {{ $t('WhatWeDo') }} </h3>
                  <p> {{ general.what_we_do }} </p>
                </div>
                <div class="services">
                  <h3> {{ $t('OurServicesincludes') }}: </h3>
                  <div class="service">
                    <img src="../assets/images/icon1.svg" alt="service1" loading="lazy">
                    <span> Procurement </span>
                  </div>
                  <div class="service">
                    <img src="../assets/images/icon2.svg" alt="service1" loading="lazy">
                    <span> Special sourcing for hard -to- find products </span>
                  </div>
                  <div class="service">
                    <img src="../assets/images/icon3.svg" alt="service1" loading="lazy">
                    <span> Freight & Clearance </span>
                  </div>
                  <router-link to="/services">
                  <button class="Btn primary"> {{ $t('knowmore') }} </button>
                  </router-link>
                </div>
              </div>
            </v-col>
          </v-row>
        </div>
    
        <div class="products-home">
          <v-container>
            <h3 class=""> {{ $t('OurProducts') }} </h3>
            <v-row>
              <v-col cols="12" xl="4" lg="4" md="6">
                <div class="box">
                  <img src="../assets/images/product-icon1.svg" alt="product1" loading="lazy">
                  <span> Health, Safety and Environment
                    (HSE) </span>
                </div>
              </v-col>
              <v-col cols="12" xl="4" lg="4" md="6">
                <div class="box">
                  <img src="../assets/images/product-icon2.svg" alt="product1" loading="lazy">
                  <span> Industrial Tools & Machinery
                    Equipment </span>
                </div>
              </v-col>
              <v-col cols="12" xl="4" lg="4" md="6">
                <div class="box">
                  <img src="../assets/images/product-icon3.svg" alt="product1" loading="lazy">
                  <span> Piping Package & Valves </span>
                </div>
              </v-col>
              <v-col cols="12" xl="4" lg="4" md="6">
                <div class="box">
                  <img src="../assets/images/product-icon4.svg" alt="product1" loading="lazy">
                  <span> Monolithic Isolation Joints </span>
                </div>
              </v-col>
              <v-col cols="12" xl="4" lg="4" md="6">
                <div class="box">
                  <img src="../assets/images/product-icon5.svg" alt="product1" loading="lazy">
                  <span> Process Control Instruments </span>
                </div>
              </v-col>
              <v-col cols="12" xl="4" lg="4" md="6">
                <div class="box">
                  <img src="../assets/images/product-icon6.svg" alt="product1" loading="lazy">
                  <span> Measuring, Sampling and
                    Inspecting Instruments</span>
                </div>
              </v-col>
              <v-col cols="12" xl="4" lg="4" md="6">
                <div class="box">
                  <img src="../assets/images/product-icon7.svg" alt="product1" loading="lazy">
                  <span>Welding & Cutting Technology </span>
                </div>
              </v-col>
              <v-col cols="12" xl="4" lg="4" md="6">
                <div class="box">
                  <img src="../assets/images/product-icon8.svg" alt="product1" loading="lazy">
                  <span> Rescue & Lifting Equipment </span>
                </div>
              </v-col>
              <v-col cols="12" xl="4" lg="4" md="6">
                <div class="box">
                  <img src="../assets/images/product-icon9.svg" alt="product1" loading="lazy">
                  <span>Cathodic Protection Materials </span>
                </div>
              </v-col>
            </v-row>
          </v-container>
        </div>
        <div class="videos-home">
          <v-container>
            <h3 class=""> {{$t('videos')}} </h3>
            <v-row>
              <v-col cols="12" xl="4" lg="4" md="6">
                <div class="box video">
                  <div class="image">
                    <img src="../assets/images/hero1.png" alt="product1" loading="lazy">
                    <img class="play" src="../assets/images/play.svg" alt="">
                  </div>
                  <span> Lorem ipsum dolor sit amet </span>
                </div>
              </v-col>
              <v-col cols="12" xl="4" lg="4" md="6">
                <div class="box video">
                  <div class="image">
                    <img src="../assets/images/video2.png" alt="product1" loading="lazy">
                    <img class="play" src="../assets/images/play.svg" alt="">
                  </div>
                  <span> Lorem ipsum dolor sit amet</span>
                </div>
              </v-col>
              <v-col cols="12" xl="4" lg="4" md="6">
                <div class="box video">
                  <div class="image">
                    <img src="../assets/images/video3.png" alt="product1" loading="lazy">
                    <img class="play" src="../assets/images/play.svg" alt="">
                  </div>
                  <span> Lorem ipsum dolor sit amet </span>
                </div>
              </v-col>
              <v-col cols="12" xl="4" lg="4" md="6">
                <div class="box video">
                  <div class="image">
                    <img src="../assets/images/video4.png" alt="product1" loading="lazy">
                    <img class="play" src="../assets/images/play.svg" alt="">
                  </div>
                  <span> Lorem ipsum dolor sit amet </span>
                </div>
              </v-col>
              <v-col cols="12" xl="4" lg="4" md="6">
                <div class="box video">
                  <div class="image">
                    <img src="../assets/images/video5.png" alt="product1" loading="lazy">
                    <img class="play" src="../assets/images/play.svg" alt="">
                  </div>
                  <span> Lorem ipsum dolor sit amet </span>
                </div>
              </v-col>
              <v-col cols="12" xl="4" lg="4" md="6">
                <div class="box video">
                  <div class="image">
                    <img src="../assets/images/video6.png" alt="product1" loading="lazy">
                    <img class="play" src="../assets/images/play.svg" alt="">
                  </div>
                  <span> Lorem ipsum dolor sit amet </span>
                </div>
              </v-col>
    
            </v-row>
            <div class="d-flex align-items-center justify-content-center">
            <router-link to="/videos">
              <button class="Btn mt-16"> {{$t('viewmore')}} </button>
            </router-link>
            </div>
          </v-container>
        </div>
    
        <!-- <swiper2 /> -->

      </div>
      <loader v-if="pending" />
  </div>
</template>


