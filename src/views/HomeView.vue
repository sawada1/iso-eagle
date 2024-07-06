<script setup>
import { computed, ref , watch } from 'vue';
import { useI18n } from 'vue-i18n';
import axios from 'axios';
import {getUrl} from '../composables/url.js';
import swiperHome from '../components/swiperHome.vue';
import swiper2 from '../components/swiper2.vue';
import loader from '../components/loader.vue';
const { locale, setLocale, localePath } = useI18n();
let pending = ref(false);
let dialog = ref();

let general = ref();
const getGeneral = async()=>{
  pending.value = true;
  let result = await axios.get(`${getUrl()}/home`,{
    headers:{
      "Content-Language": `${locale.value}`,
    }
  });
  if(result.status == 200){
    pending.value = false;
     general.value = result.data.data;
     dialog.value = Array(general.value.videos.length).fill(false);
  }
}
getGeneral();


const openDialog = (index) => {
  dialog.value[index] = true;
};

const closeDialog = (index) => {
  dialog.value[index] = false;
};

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
              <v-col v-for="item in general.brands" cols="6" xl="2" lg="2" md="4">
                <img :src="item.image" alt="brand1" loading="lazy">
              </v-col>
            </v-row>
            <div class="d-flex align-items-center justify-content-center">
            <router-link to="/brands">
              <button class="Btn mt-16"> {{ $t('viewmore') }} </button>
            </router-link>
            </div>
          </div>
        </v-container>
        <div class="about-home m-top" :style="{backgroundImage: `url(${general.about_us.background})`}">
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
              <div v-html="general.about_us.description"></div>
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
                <img  :src="general.what_we_do.photo" alt="what-img" loading="lazy">
              </div>
            </v-col>
            <v-col cols="12" xl="8" lg="8" class="main-text">
              <div class="text-container">
                <div class="text mb-5">
                  <h3> {{ $t('WhatWeDo') }} </h3>
                  <p> {{ general.what_we_do.description }} </p>
                </div>
                <div class="services">
                  <h3> {{ $t('OurServicesincludes') }}: </h3>
                  <div v-for="item , index in general.services.slice(0, 3)" :key="index" class="service">
                    <img :src="item.icon" alt="service1" loading="lazy">
                    <span> {{ item.name }} </span>
                  </div>
                  <!-- <div class="service">
                    <img src="../assets/images/icon2.svg" alt="service1" loading="lazy">
                    <span> Special sourcing for hard -to- find products </span>
                  </div>
                  <div class="service">
                    <img src="../assets/images/icon3.svg" alt="service1" loading="lazy">
                    <span> Freight & Clearance </span>
                  </div> -->
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
              <v-col v-for="item , index in general.videos" :key="index" cols="12" xl="4" lg="4" md="6">
                <v-dialog
      v-model="dialog[index]"
      transition="dialog-bottom-transition"
      fullscreen
    >
      <template v-slot:activator="{ props: activatorProps }" @click="openDialog(index)">
      
          <div v-bind="activatorProps" class="box video">
                  <div class="image">
                    <img :src="item.cover" alt="product1" loading="lazy">
                    <img class="play" src="../assets/images/play.svg" alt="">
                  </div>
                  <span> {{ item.title }} </span>
                </div>
      </template>

      <v-card>
        <v-toolbar class="  px-4">
          <div class="d-flex align-items-center w-100 h-100 justify-content-end">
            <button class="" @click="closeDialog(index)">
              <i class="fa-solid fa-xmark" style="font-size: 25px;"></i>
            </button>
          </div>
              
        </v-toolbar>
        <div class="w-100 h-100">
          <iframe width="100%" height="100%" :src="item.link" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>        </div>
      </v-card>
    </v-dialog>
               
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


