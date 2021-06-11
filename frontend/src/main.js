import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router.js'

//Import for vuetify
import vuetify from './plugins/vuetify'

//Import for vue material
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
Vue.use(VueMaterial)

//Import for vue Booststrap
import { BootstrapVue, IconsPlugin} from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

Vue.config.productionTip = false


// Make BootstrapVue available throughout your project


Vue.use(VueRouter)

new Vue({
  vuetify,
  render: h => h(App),
  router
}).$mount('#app')
