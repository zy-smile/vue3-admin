import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
/* 浏览器初始化样式 */
import 'normalize.css'
/* 公共样式 */
import './style/index.less'

// element-plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const pinia = createPinia()

const app = createApp(App)
app.use(pinia)
app.use(router)
app.use(ElementPlus)
app.mount('#app')
