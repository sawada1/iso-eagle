<template>
    <div style="min-height: 100vh;" class="">
        <div class="services-container">
            <div class="overlay">
            </div>
            <div style="z-index: 11; height:100%; width:100%">
                <v-container>
                    <div class="text-container">
                        <div class="head-text">
                            <span> {{ $t('home') }} </span>
                            <i class="fa-solid fa-chevron-right arrow-rtl"></i>
                            <span> {{ $t('services') }} </span>
                        </div>
                        <h3> {{ $t('OurServices') }} </h3>
                        <h2> {{ $t('best') }} <br>
                            {{ $t('ForYou') }}</h2>
                        <div class="services mt-10">
                            
                            <div class="lines">
                                <v-row>
                                    <v-col v-for="item in services" class="mb-4" cols="12" xl="6" lg="6">
                                        <div class="line">
                                            <div class="item">
                                                <div class="d-flex flex-column align-items-center gap-2">
                                                    <div class="circle">
                                                        <!-- <img src="../assets/images/service1.svg" alt=""> -->
                                                        <img :src="item.icon" alt="">
                                                    </div>
                                                    <div class="seprator"></div>

                                                </div>
                                                <div class="text">
                                                    <h5> {{item.name}} </h5>
                                                    <p>
                                                        {{item.description}}
                                                    </p>

                                                </div>
                                            </div>
                                        </div>
                                    </v-col>
                                    <!-- <v-col class="" cols="12" xl="6" lg="6">
                                        <div class="line">
                                            <div class="item">
                                                <div class="d-flex flex-column align-items-center gap-2">
                                                    <div class="circle">
                                                        <img src="../assets/images/service5.svg" alt="">
                                                    </div>
                                                    <div class="seprator"></div>

                                                </div>
                                                <div class="text">
                                                    <h5> Transportation & Handling </h5>
                                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                                                        diam
                                                        nonummy
                                                        nibh euismod tincidunt ut laoreet dolore magna aliquam erat
                                                        volutpat.
                                                    </p>

                                                </div>
                                            </div>
                                        </div>
                                    </v-col>
                                    <v-col class="" cols="12" xl="6" lg="6">
                                        <div class="line">
                                            <div class="item">
                                                <div class="d-flex flex-column align-items-center gap-2">
                                                    <div class="circle">
                                                        <img src="../assets/images/service2.svg" alt="">
                                                    </div>
                                                    <div class="seprator"></div>

                                                </div>
                                                <div class="text">
                                                    <h5> Special sourcing for hard -to- find products</h5>
                                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                                                        diam
                                                        nonummy
                                                        nibh euismod tincidunt ut laoreet dolore magna aliquam erat
                                                        volutpat.
                                                    </p>

                                                </div>
                                            </div>
                                        </div>
                                    </v-col>
                                    <v-col class="" cols="12" xl="6" lg="6">
                                        <div class="line">
                                            <div class="item">
                                                <div class="d-flex flex-column align-items-center gap-2">
                                                    <div class="circle">
                                                        <img src="../assets/images/service6.svg" alt="">
                                                    </div>
                                                    <div class="seprator"></div>

                                                </div>
                                                <div class="text">
                                                    <h5> Warehousing </h5>
                                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                                                        diam
                                                        nonummy
                                                        nibh euismod tincidunt ut laoreet dolore magna aliquam erat
                                                        volutpat.
                                                    </p>

                                                </div>
                                            </div>
                                        </div>
                                    </v-col>
                                    <v-col class="" cols="12" xl="6" lg="6">
                                        <div class="line">
                                            <div class="item">
                                                <div class="d-flex flex-column align-items-center gap-2">
                                                    <div class="circle">
                                                        <img src="../assets/images/service3.svg" alt="">
                                                    </div>
                                                    <div class="seprator"></div>

                                                </div>
                                                <div class="text">
                                                    <h5> Freight & Clearance </h5>
                                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                                                        diam
                                                        nonummy
                                                        nibh euismod tincidunt ut laoreet dolore magna aliquam erat
                                                        volutpat.
                                                    </p>

                                                </div>
                                            </div>
                                        </div>
                                    </v-col>
                                    <v-col class="" cols="12" xl="6" lg="6">
                                        <div class="line">
                                            <div class="item">
                                                <div class="d-flex flex-column align-items-center gap-2">
                                                    <div class="circle">
                                                        <img src="../assets/images/service7.svg" alt="">
                                                    </div>
                                                    <div class="seprator mobile"></div>

                                                </div>
                                                <div class="text">
                                                    <h5> Representation </h5>
                                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                                                        diam
                                                        nonummy
                                                        nibh euismod tincidunt ut laoreet dolore magna aliquam erat
                                                        volutpat.
                                                    </p>

                                                </div>
                                            </div>
                                        </div>
                                    </v-col>
                                    <v-col class="" cols="12" xl="6" lg="6">
                                        <div class="line">
                                            <div class="item">
                                                <div class="d-flex flex-column align-items-center gap-2">
                                                    <div class="circle">
                                                        <img src="../assets/images/service4.svg" alt="">
                                                    </div>
                                                    <div class="seprator mobile"></div>

                                                </div>
                                                <div class="text">
                                                    <h5> Export-International Services </h5>
                                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                                                        diam
                                                        nonummy
                                                        nibh euismod tincidunt ut laoreet dolore magna aliquam erat
                                                        volutpat.
                                                    </p>

                                                </div>
                                            </div>
                                        </div>
                                    </v-col> -->
                                </v-row>
                            </div>
                        </div>
                    </div>
                </v-container>

            </div>
        </div>
      <loader v-if="pending" />
    </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n';
import axios from 'axios';
import loader from '@/components/loader.vue';
import {getUrl} from '../composables/url.js';
const { locale, setLocale, localePath } = useI18n();
import {ref , watch} from 'vue';
let services = ref();
let pending = ref(false);
const getGeneral = async()=>{
    pending.value = true;
    let result = await axios.get(`${getUrl()}/all-services`,{
        headers:{
            "Content-Language": `${locale.value}`,
        }
    });
    if(result.status == 200){
      pending.value = false;
    services.value = result.data.data;
  }
}
getGeneral();

watch(()=> locale.value , (lang)=>{
    getGeneral();
})
</script>

<style lang="scss" scoped>


</style>