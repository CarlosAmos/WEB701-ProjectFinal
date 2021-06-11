import VueRouter from 'vue-router';
import Home from './views/Home.vue';
import Login from './views/Login.vue';
import Store from './views/Store/Store.vue';
import Listing from './views/Store/Listing.vue';
import Donate from './views/Donate';
import EditListing from './views/Store/EditListing.vue';

const router = new VueRouter({
    mode:'history',
    base: process.env.BASE_URL,
    routes:[
        {path:'/', name: 'Home', component: Home},
        {path:'/Login', name: 'Login', component: Login},
        {path:'/Store', name: 'Store', component: Store},
        {path:'/Store/ViewListing', name: 'Listing', component: Listing},
        {path:'/Donate', name: 'Donate', component: Donate},
        {path:'/EditListing/EditListing', name: 'EditListing', component: EditListing},
    ]
})

export default router;
