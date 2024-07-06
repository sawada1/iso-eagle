

import './assets/styles/main.scss';
// import './assets/rtl/main-rtl.scss';

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import {i18n} from './plugins/i18n.js'
import Toast from "vue-toastification";

import App from './App.vue';
import router from './router';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "vue-toastification/dist/index.css";
const app = createApp(App)

app.use(createPinia())
app.use(router)

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives,
});
app.use(vuetify);
app.use(i18n);
const options = {
  // You can set your default options here
};

app.use(Toast, options);

app.mount('#app')
