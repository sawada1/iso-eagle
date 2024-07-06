<template>
    <div style="min-height: 100vh;">
        <div class="products-container">
            <div class="background-container">
                <div class="text">
                    <div class="head-text">
                        <span> {{ $t('home') }} </span>
                        <i class="fa-solid fa-chevron-right arrow-rtl"></i>
                        <span> {{ $t('services') }} </span>
                    </div>
                    <h3> {{ $t('AllOurProducts') }} </h3>
                </div>
            </div>

            <v-container>
                <v-row>
                    <!-- <v-col cols="12" xl="4" lg="4">
                        <div class="filter-container">
                            <div class="filters">
                                <div class="filter line d-flex align-items-center gap-3">
                                    <img class="" src="../assets/images/filter.svg" alt="">
                                    <h6 class=" m-0"> {{ $t('Filters') }} </h6>
                                </div>
                                <div
                                    class="d-flex filter align-items-center flex-column mt-5 justify-content-center gap-3">
                                    <div class="d-flex align-items-center justify-content-center gap-3">
                                        <img class="" src="../assets/images/sort.svg" alt="">
                                        <h6 class=" m-0"> {{ $t('Sortby') }} </h6>
                                    </div>
                                    <div class="d-flex align-items-center gap-4">
                                        <div @click="sortActive = 1" class="sortBy"
                                            :class="{ 'active': sortActive  == 1}">
                                            <span> {{ $t('Recent') }} </span>
                                        </div>
                                        <div @click="sortActive = 2" class="sortBy"
                                            :class="{ 'active': sortActive  == 2}">
                                            <span> {{ $t('Trending') }} </span>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </v-col> -->
                    <v-col clos="12" xl="12" lg="12">
                        <div class="products">
                            <div class="d-flex justify-content-end">
                                <div class="search-container">
                                    <input type="text" v-model="search" :placeholder="$t('searchProduct')">
                                    <div class="line">
                                    </div>
                                    <i class="fa-solid fa-magnifying-glass"></i>
                                </div>

                            </div>

                            <div class="products-cards mt-10">
                                <v-row>
                                    <v-col v-for="item , index in filterdProducts" cols="12" xl="4" lg="4">
                                        <router-link :to="{ name:'product' , params:{id: item.id}}">
                                            <div class="product-card">
                                                <div class="image">
                                                    <img :src="item.images[0].image" alt="">
                                                </div>
                                                <div class="text-container p-3">
                                                    <div class="d-flex text-center align-items-center flex-column">
                                                        <h6> {{ item.name }} </h6>
                                                        <p> {{ item.description }} </p>

                                                    </div>
                                                    <div class="d-flex justify-content-end">
                                                        <span> {{ $t('viewmore') }} </span>

                                                    </div>
                                                </div>
                                            </div>

                                        </router-link>

                                    </v-col>
                                </v-row>
                            </div>
                        </div>
                    </v-col>
                </v-row>
            </v-container>
        </div>
      <loader v-if="pending" />
    </div>
</template>

<script setup>
import loader from '@/components/loader.vue';
import { ref , computed , onMounted, watch } from 'vue';
import axios from 'axios';
import { useI18n } from 'vue-i18n';
const { locale, setLocale, localePath } = useI18n();
import {getUrl} from '../composables/url.js';
let sortActive = ref(0);

let search = ref('');
let pending = ref(true);
let products = ref([]);

const getProducts = async()=>{
    let result = await axios.get(`${getUrl()}/all-products`,{
        headers:{
            "Content-Language": `${locale.value}`
        }
    });

    if(result.status >= 200){
        products.value = result.data.data;
    pending.value = false;
    }
}

getProducts();


const filterdProducts = computed(() => {
    return products.value.filter((ele) => {
        return ele.name.toLowerCase().includes(search.value.toLowerCase());
    });
});
watch(()=> locale.value , (lang)=>{
    getProducts();
})
onMounted(()=>{
    // pending.value = false;
})

</script>

<style lang="scss" scoped>


</style>