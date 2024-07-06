<template>
    <div style="min-height: 100vh;">
        <div class="product-page">
            <div class="background-container">
                <div class="text">
                    <div class="head-text">
                        <span> {{ $t('home') }} </span>
                        <i class="fa-solid fa-chevron-right arrow-rtl"></i>
                        <span> {{ $t('products') }} </span>
                    </div>
                    <h3> {{ product.category }} </h3>
                </div>
            </div>
            <v-container>
                <div class="slider-container">
                    <h3> {{ product.name }} </h3>
                    <v-row>
                        <v-col cols="12" xl="6" lg="6">
                            <div class="image h-100">
                                <!-- <img src="../assets/images/slide-product.png" alt=""> -->
                                <swiper dir="ltr" :pagination="{
          clickable: true,
        }" :modules="modules" class="mySwiper h-100">
          <swiper-slide v-for="image in product.images">
            <img :src="image.image" alt="hero1" loading="lazy">
          </swiper-slide>
       
        </swiper>
                            </div>
                        </v-col>
                        <v-col cols="12" xl="6" lg="6">
                            <div class="text-container">
                                <div v-for="i in 8" class="item">
                                    <img src="../assets/images/shape.svg" alt="">
                                    <h6> Smoke & Heat detector With (Common, Deep, Isolator and Stand-alone Bases).
                                    </h6>
                                </div>
                            </div>
                        </v-col>
                    </v-row>
                </div>
                <div class="system-container">
                    <div class="title">
                        <span> {{ $t('ConventionalSystem') }} </span>
                    </div>
                    <p> {{ product.description }} </p>
                    <!-- <img src="../assets/images/img-product1.png" alt=""> -->
                    <img :src="product.structure_image" alt="">
                </div>

                <div class="features">
                    <h4 class="text-center mb-8"> {{ $t('Features') }} </h4>
                    <v-row>
                        <v-col v-for="item in product.features" cols="12" xl="4" lg="4" md="4">
                            <div class="item">
                                <img :src="item.icon" alt="">
                                <p> {{ item.name }} </p>
                            </div>
                        </v-col>
                    </v-row>
                </div>

                <!-- <div class="system-container mt-16">
                    <div class="title">
                        <span> {{ $t('Addressablesystem') }} </span>
                    </div>
                    <p> Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod
                        tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                        nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
                        Duis autem vel eum iriure dolor in hendrerit . </p>
                    <img class="mt-9" src="../assets/images/img-product2.png" alt="">
                </div> -->


                <div class="features mt-10">
                    <h4 class="text-center mb-8"> {{ $t('Features') }} </h4>
                    <v-row>
                        <v-col v-for="item in product.features" cols="12" xl="4" lg="4" md="4">
                            <div class="item">
                                <img :src="item.icon" alt="">
                                <p> {{ item.details }} </p>
                            </div>
                        </v-col>

                    </v-row>
                </div>
            </v-container>
        </div>
        <loader v-if="pending" />

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
import loader from '@/components/loader.vue';
import { ref , computed , onMounted, watch } from 'vue';
import axios from 'axios';
import { useI18n } from 'vue-i18n';
const { locale, setLocale, localePath } = useI18n();
import {getUrl} from '../composables/url.js';
let sortActive = ref(0);
let props = defineProps(["id"]);
let search = ref('');
let pending = ref(true);
let product = ref([]);
let modules = ref([Pagination, FreeMode, Navigation, Thumbs]);

const getProduct = async()=>{
    let result = await axios.get(`${getUrl()}/products/${props.id}`,{
        headers:{
            "Content-Language": `${locale.value}`
        }
    });

    if(result.status >= 200){
        product.value = result.data.data;
       pending.value = false;
    }
}

getProduct();


watch(()=> locale.value , (lang)=>{
    getProduct();
})
</script>

<style lang="scss" scoped>


</style>