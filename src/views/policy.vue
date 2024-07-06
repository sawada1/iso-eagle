<template>
    <div style="min-height: 100vh;">
        <v-container v-if="general">
            <div class="terms-conditions">
                <h1> {{ $t('policy') }} </h1>
                <div v-html="general.privacy_policy_text"></div>
            </div>
        </v-container>
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

watch(()=> locale.value , (lang)=>{
    getGeneral();
})
</script>