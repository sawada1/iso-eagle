<template>
    <div style="min-height: 100vh;">
        <div v-if="about" class="about-page">
            <!-- about.about_us_page_background -->
            <div class="background-container" :style="{ 'background-image': 'url(' + about.about_us_page_background + ')' }">
                <div class="text">
                    <div class="head-text">
                        <span> {{ $t('home') }} </span>
                        <i class="fa-solid fa-chevron-right arrow-rtl"></i>
                        <span> {{ $t('about') }} </span>
                    </div>
                    <h3> {{ $t('AboutISOEagle') }} </h3>
                    <div v-html="about.about_us_text" class=" mt-10"></div>    
                </div>
            </div>
            <v-container>
                <div class="our-div mt-10">
                    <div class="d-flex justify-content-center">
                        <h3> {{ $t('Ourvision') }} </h3>

                    </div>
                    <p> {{ about.our_vision }} </p>
                </div>
                <div class="our-div mt-16">
                    <div class="d-flex justify-content-center">
                        <h3> {{ $t('Oursectors') }} </h3>

                    </div>
                    <p> {{ about.our_sectors }} </p>
                </div>

                <!-- <div class="text-container">
                    <v-row class="">
                        <v-col class="d-flex justify-content-center" v-for="i in 30" cols="12" xl="4" lg="4" md="6">
                            <div class="item">
                                <div class="dot"></div>
                                <span> Lorem ipsum dolor. </span>
                            </div>
                        </v-col>
                    </v-row>
                </div> -->

            </v-container>
        </div>
        <loader v-if="pending" />

    </div>
</template>

<script setup>
import { computed, ref , watch } from 'vue';
import { useI18n } from 'vue-i18n';
import axios from 'axios';
import {getUrl} from '../composables/url.js';
import loader from '../components/loader.vue';
const { locale, setLocale, localePath } = useI18n();
let pending = ref(false);
let about = ref();
const getAbout = async()=>{
  pending.value = true;
  let result = await axios.get(`${getUrl()}/general`,{
    headers:{
      "Content-Language": `${locale.value}`,
    }
  });
  if(result.status == 200){
    pending.value = false;
    about.value = result.data.data;
  }
}
getAbout();

watch(()=> locale.value , (lang)=>{
    getAbout();
})
</script>

<style lang="scss" scoped>


</style>