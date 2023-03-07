import Vue from 'vue'
import ElementUI from 'element-ui'
import App from '@/App'
//ElementUI相关
import 'element-ui/lib/theme-chalk/index.css'


Vue.use(ElementUI)
Vue.config.productionTip = false

new Vue({
    el: '#app', render: h => h(App)
})
