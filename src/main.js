// import { createApp } from 'vue'
import AppVue from './AppVue.ce.vue'
import './style.css';

import './assets/main.css'
import { vueDefineCustomElement } from './shared/vueCreateCustomElement';

const app = vueDefineCustomElement(AppVue);

customElements.define("wc-form", app);
