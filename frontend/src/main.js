import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import vueDebounce from 'vue-debounce'

Vue.config.productionTip = false

Vue.use(vueDebounce)

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
