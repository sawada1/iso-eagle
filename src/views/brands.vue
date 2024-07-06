<template>
    <div style="min-height: 100vh;">
        <div class="brands-container-page">
            <div class="background-container">
                <div class="text">
                    <div class="head-text">
                        <span> {{ $t('home') }} </span>
                        <i class="fa-solid fa-chevron-right arrow-rtl"></i>
                        <span> {{ $t('brands') }} </span>
                    </div>
                    <h3> {{ $t('brands') }} </h3>
                </div>
            </div>
            <v-container>
                <div class="brands-container  m-top">
                    <v-row class="">
                        <v-col v-for="item in brands" class="my-4" cols="6" xl="2" lg="2" md="4">
                            <img :src="item.image" alt="brand1" loading="lazy">
                        </v-col>
        
                    </v-row>
                </div>
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
let brands = ref([]);
const getBrands = async()=>{
  pending.value = true;
  let result = await axios.get(`${getUrl()}/all-brands`,{
    headers:{
      "Content-Language": `${locale.value}`,
    }
  });
  if(result.status == 200){
    pending.value = false;
    brands.value = result.data.data;
  }
}
getBrands();
</script>

<style lang="scss" scoped>


</style>