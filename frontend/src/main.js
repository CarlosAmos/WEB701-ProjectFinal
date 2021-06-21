import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router.js'
import store from './store/'

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

//Import for Firebase
import firebase from 'firebase'
import "@firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCXiyHB4D02Hlv30B80WlhfSe2VofRUEf4",
  authDomain: "web701-proj.firebaseapp.com",
  databaseURL: "https://web701-proj-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "web701-proj",
  storageBucket: "web701-proj.appspot.com",
  messagingSenderId: "326037915574",
  appId: "1:326037915574:web:c165071c218a85f86d2317"
};
// init Firebase
firebase.initializeApp(firebaseConfig);


// Make BootstrapVue available throughout your project


Vue.use(VueRouter)

new Vue({
  vuetify,
  render: h => h(App),
  router,
  store
}).$mount('#app')
