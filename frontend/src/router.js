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
import verifyUser from './components/verifyUser.vue';
import verifyToken from './components/verifyToken.vue';
import Token from './components/Token.vue'
import Profile from './views/Profile.vue'
import Admin from './views/Admin.vue'

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
        {path:'/verifyUser', name: 'verifyUser', component: verifyUser},
        {path:'/verifyToken', name: 'verifyToken', component: verifyToken},
        {path:'/Token', name: 'Token', component: Token},
        {path:'/Profile', name: 'Profile', component: Profile},
        {path:'/Admin', name: 'Admin', component: Admin},
    ]
})

export default router;
