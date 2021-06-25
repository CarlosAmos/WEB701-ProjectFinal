<template>
<div id='app'>
<Navigation></Navigation>
<Header></Header> 
<router-view></router-view>
<Footer></Footer>
</div>
</template>

<script>
import Navigation from './components/Navigation.vue';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    Navigation,
    Header,
    Footer
  },
  async created() {


  },
  mounted(){
    //Clear local storage when website is closed.
    window.onbeforeunload = function () {
      var storage = window.localStorage;
      storage.clear();
    }
  },
  data: () => ({

  }),
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Merienda&display=swap');
</style>
