import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router/router';
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import VueNativeSock from 'vue-native-websocket-vue3'

createApp(App)
    .use(VueNativeSock, 'wss://test.relabs.ru/event', { format: 'json' })
    .use(router)
    .use(ElementPlus)
    .mount('#app')
