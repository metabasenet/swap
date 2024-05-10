import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import App from './App.vue'
import router from './router';
import 'virtual:svg-icons-register'
import MyGlobalComponentsPlugin from './components/index.js';
import pinia from './store';
import './permisstion';
import ECharts from 'vue-echarts'
import 'echarts/lib/chart/bar'
import 'echarts/lib/component/tooltip'
const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.component('v-chart', ECharts)
app.use(ElementPlus, { size: 'small', zIndex: 3000 })
app.use(router);
app.use(pinia);
app.use(MyGlobalComponentsPlugin);
app.mount('#app')

