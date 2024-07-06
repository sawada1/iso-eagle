<template>
    <div style="min-height: 10vh;">
        <div class="videos-page">
            <div class="background-container">
                <div class="text">
                    <div class="head-text">
                        <span> {{ $t('home') }} </span>
                        <i class="fa-solid fa-chevron-right arrow-rtl"></i>
                        <span> {{ $t('videos') }} </span>
                    </div>
                    <h3> {{ $t('videos') }} </h3>
                </div>
            </div>

            <v-container>

                <!-- <div class="sorting">
                    <div class="sort">
                        <img src="../assets/images/sort.svg" alt="">
                    </div>
                    <div class="sort active">
                        <img src="../assets/images/filter.svg" alt="">
                    </div>
                </div> -->

                <div class="videos-home page">
                    <h3 class=""> {{ $t('videos') }} </h3>
                    <v-row v-if="!pendingBtn">
                        <v-col v-for="item , index in videos" :key="index" cols="12" xl="4" lg="4" md="6">
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
        <div class="w-100 h-100" >
          <div class="w-100 h-100" v-html="item.link"></div>
          <!-- <iframe width="100%" height="100%" :src="item.link" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>      -->
        
        </div>
      </v-card>
    </v-dialog>
               
              </v-col>
                    </v-row>
                    <div class="w-100 d-flex align-items-center justify-content-center mt-10">
                                    <v-progress-circular v-if="pendingBtn" color="#FFDD00" indeterminate :size="55" :width="4"></v-progress-circular>
                                </div>
                               
                                <div class="d-flex align-items-center justify-content-center">
                        <div class="pagination">
                            <button @click="backPag()">
                                <i  class="fa-solid fa-chevron-left arrow-rtl"></i>
                            </button>
                            <div class="nums" v-if="pageCount">
                                <div class="num" v-for="i , index in pageCount" @click="page = index + 1 , pendingBtn = true ,  getProducts()" :class="{ 'active': page == index + 1 }">
                                    
                                    <span>{{ index + 1}}</span>
                                
                                </div>
                                        <!-- <span>...</span> -->
                            </div>
                            <button @click="addPag()">
                                <i  class="fa-solid fa-chevron-right arrow-rtl"></i>
                            </button>
                        </div>
                    </div>

                </div>

            </v-container>
        </div>
      <loader v-if="pending" />

    </div>
</template>

<script setup>
import loader from '../components/loader.vue';
import { ref , watch , onMounted , computed } from 'vue';
import { useI18n } from 'vue-i18n';
import axios from 'axios';
import {getUrl} from '../composables/url.js';
const { locale, setLocale, localePath } = useI18n();


let lengthItems = ref(3);
let paginate = ref(1);
let pending = ref(false);
let dialog = ref();
let total = ref();
let per_page = ref();
let page = ref(1);
let pendingBtn = ref(false);
let videos = ref([]);
const getVideos = async()=>{
  pending.value = true;
  let result = await axios.get(`${getUrl()}/all-videos`,{
    headers:{
      "Content-Language": `${locale.value}`,
    }
  });
  if(result.status == 200){
    pending.value = false;
     videos.value = result.data.data;
        per_page.value = result.data.meta.per_page;
        total.value = result.data.meta.total;
        pendingBtn.value = false;
     dialog.value = Array(videos.value.length).fill(false);
  }
}
getVideos();

const openDialog = (index) => {
  dialog.value[index] = true;
};

const closeDialog = (index) => {
  dialog.value[index] = false;
};

const pageCount = computed(() => {
  return Math.ceil(total.value / per_page.value);
});


const addPag = async () => {
    if (page.value < pageCount.value) {
        page.value++;
        pendingBtn.value = true;
        await getProducts();
        
    }
}
const backPag = async () => {
    if (page.value > 1) {
        page.value--;
        pendingBtn.value = true;
    await getProducts();

    }
}


watch(()=> locale.value , (lang)=>{
    getVideos();
})

</script>

<style lang="scss" scoped>


</style>