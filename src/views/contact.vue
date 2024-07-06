<template>
    <div style="min-height: 100vh;">
        <div class="contact-page">
            <div class="background-container">
                <div class="text">
                    <div class="head-text">
                        <span> {{ $t('home') }} </span>
                        <i class="fa-solid fa-chevron-right arrow-rtl"></i>
                        <span> {{ $t('contact') }} </span>
                    </div>
                    <h3> {{ $t('ContactUs') }} </h3>
                </div>
            </div>

            <div class="form-container">
                <v-container>
                    <v-row>
                        <v-col cols="12" xl="6" lg="6">
                            <div class="main-text">
                                <h4> {{ $t('contact1') }} </h4>
                                <h4> {{ $t('contact2') }}
                                </h4>
                                <p class="mt-8">Cras a elit sit amet leo accumsan volutpat. Suspendisse hendreriast
                                    ehicula leo, vel
                                    efficitur felis ultrices non</p>

                                <div class="details d-flex flex-column gap-4 mt-16">
                                    <div class="item">
                                        <h6> {{ $t('CallUs') }} </h6>
                                        <div class="d-flex align-items-center gap-2">
                                            <i class="fa-solid fa-phone"></i>
                                            <span> 208 7898 809 - 207 997 7696
                                            </span>
                                        </div>
                                    </div>
                                    <div class="item">
                                        <h6> {{ $t('contact3') }} </h6>
                                        <div class="d-flex align-items-center gap-2">
                                            <i class="fa-solid fa-envelope"></i>
                                            <span> iso.procurement@gmail.com
                                            </span>
                                        </div>
                                    </div>
                                    <div class="item">
                                        <h6> {{ $t('CallUs') }} </h6>
                                        <div class="d-flex align-items-center gap-2">
                                            <i class="fa-solid fa-location-crosshairs"></i>
                                            <span> 5, off Mohamed Farid Street, Cairo
                                            </span>
                                        </div>
                                    </div>
                                    <img src="../assets/images/map.png" class="w-100 mt-5" alt="">
                                </div>
                            </div>
                        </v-col>

                        <v-col cols="12" xl="6" lg="6">
                            <div class="form">
                                <h5> {{ $t('contactForm') }}: </h5>
                                <p> Cras a elit sit amet leo accumsan volutpat. Suspendisse hendreriast ehicula leo, vel
                                    efficitur felis ultrices non. </p>

                                <div class="inputs">
                                    <v-row>
                                        <v-col cols="6">
                                            <div class="input">
                                                <label for=""> {{ $t('FullName') }} </label>
                                                <input type="text" v-model="contactObj.full_name" placeholder="Robot Fox">
                                            </div>
                                            <div>
                                                <span class="text-danger" v-if="errors.full_name"> {{ errors.full_name[0] }} </span>
                                            </div>
                                        </v-col>
                                        <v-col cols="6">
                                            <div class="input">
                                                <label for=""> {{ $t('Email') }} </label>
                                                <input type="email" v-model="contactObj.email" placeholder="example@mail.com">
                                            </div>
                                            <div>
                                                <span class="text-danger" v-if="errors.email"> {{ errors.email[0] }} </span>
                                            </div>
                                        </v-col>
                                        <v-col cols="12">
                                            <div class="input">
                                                <label for=""> {{ $t('FullAddress') }} </label>
                                                <input type="text" v-model="contactObj.full_address" placeholder="No of Street, City">
                                            </div>
                                            <div>
                                                <span class="text-danger" v-if="errors.full_address"> {{ errors.full_address[0] }} </span>
                                            </div>
                                        </v-col>
                                        <v-col cols="6">
                                            <div class="input">
                                                <label for=""> {{ $t('NumberPhone') }} </label>
                                                <input type="number" v-model="contactObj.phone" placeholder="+123 567 909">
                                            </div>
                                            <div>
                                                <span class="text-danger" v-if="errors.phone"> {{ errors.phone[0] }} </span>
                                            </div>
                                        </v-col>
                                        <v-col cols="6">
                                            <div class="input">
                                                <label for=""> {{ $t('ServiceType') }} </label>
                                                <input type="text" v-model="contactObj.service_type" placeholder="Services">
                                            </div>
                                            <div>
                                                <span class="text-danger" v-if="errors.service_type"> {{ errors.service_type[0] }} </span>

                                            </div>
                                        </v-col>
                                        <v-col cols="12">
                                            <div class="input">
                                                <label for=""> {{ $t('Message') }} </label>
                                                <textarea name="" v-model="contactObj.message" placeholder="Write Message" id="" cols="30"
                                                    rows="10"></textarea>
                                            </div>
                                            <div>
                                                <span class="text-danger" v-if="errors.message"> {{ errors.message[0] }} </span>

                                            </div>
                                        </v-col>
                                    </v-row>
                                    <button class="d-flex align-items-center gap-2" @click="sendContact()" :disabled="pendingBtn"> 
                                        {{ $t('Submit') }}
                              <v-progress-circular v-if="pendingBtn"  indeterminate :size="25" :width="4"></v-progress-circular>
                                    
                                    </button>
                                </div>
                            </div>
                        </v-col>
                    </v-row>
                </v-container>
            </div>
        </div>
    </div>
</template>

<script setup>
import axios from 'axios';
import { useToast } from "vue-toastification";
import {ref , onMounted} from 'vue';
import { useI18n } from 'vue-i18n';
const { locale, setLocale, localePath } = useI18n();
import {getUrl} from '../composables/url.js';
const toast = useToast();

let contactObj = ref({
    full_name:"",
    email:"",
    full_address:"",
    phone:"",
    service_type:"",
    message:"",
});

let errors = ref([]);
let pendingBtn = ref(false);

const sendContact = async()=>{
     pendingBtn.value = true;
     let formBody = new FormData();
     formBody.append("full_name" , contactObj.value.full_name);
     formBody.append("email" , contactObj.value.email);
     formBody.append("full_address" , contactObj.value.full_address);
     formBody.append("phone" , contactObj.value.phone);
     formBody.append("service_type" , contactObj.value.service_type);
     formBody.append("message" , contactObj.value.message);
     try{
         let result = await axios.post(`${getUrl()}/contact-us`, formBody , {
             headers:{
                 "Content-Language": `${locale.value}`
                }
            });
            if(result.status >= 200){
                pendingBtn.value = false;
                errors.value = undefined;
                toast.success(locale.value == 'ar' ? 'تم التواصل بنجاح' : 'Communication was successful', {
                    position: "top-right",
                    timeout: 5000,
                    closeOnClick: true,
                    pauseOnFocusLoss: true,
                    pauseOnHover: true,
                    draggable: true,
                    draggablePercent: 0.6,
                    showCloseButtonOnHover: false,
                    hideProgressBar: true,
                    closeButton: "button",
                    icon: true,
                    rtl: false
        });
        
    }
} catch(errorss){
    if(errorss.response){
        pendingBtn.value = false;
        errors.value = errorss.response.data.errors;
    }
    }
}
</script>

<style lang="scss" scoped>


</style>