import VueRouter from 'vue-router';
import Home from './views/Home.vue';
import Login from './views/Login.vue';
import LoginSelect from './views/LoginSelect.vue';
import Register from './components/Register.vue';
import Store from './views/Store/Store.vue';
import Listing from './views/Store/Listing.vue';
import Donate from './views/Donate';
import EditListing from './views/Store/EditListing.vue';
import News from './views/News.vue';

const router = new VueRouter({
    mode:'history',
    base: process.env.BASE_URL,
    routes:[
        {path:'/', name: 'Home', component: Home},
        {path:'/Login', name: 'Login', component: Login},
        {path:'/LoginSelect', name: 'LoginSelect', component: LoginSelect},
        {path:'/Register', name: 'Register', component: Register},
        {path:'/Store', name: 'Store', component: Store},
        {path:'/Store/ViewListing/:id', name: 'Listing', component: Listing},
        {path:'/Store/EditListing', name: 'EditListing', component: EditListing},
        {path:'/Donate', name: 'Donate', component: Donate},
        {path:'/EditListing/EditListing', name: 'EditListing', component: EditListing},
        {path:'/News', name: 'News', component: News},
    ]
})

export default router;
