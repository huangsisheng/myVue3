import { createApp } from 'vue'
import App from './App.vue'
import router from "./router";
import store from "./store";

import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.less';
import "assets/css/index.less";

import VueParticles from 'vue-particles'

const app = createApp(App)

app.config.devtools = process.env.NODE_ENV === 'development'
app.config.productionTip = false;

app
    .use(router)
    .use(store)
    .use(Antd)
    .use(VueParticles)
    .mount('#app')
