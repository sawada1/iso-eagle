

// import './assets/styles/main.scss';
// import './assets/rtl/main-rtl.scss';

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import {i18n} from './plugins/i18n.js'

import App from './App.vue';
import router from './router';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
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

app.mount('#app')
