<template>
<div id='app'>
<Navigation></Navigation>
<Header></Header> 
<router-view></router-view>
</div>
</template>

<script>
import Navigation from './components/Navigation.vue';
import Header from './components/Header.vue';
import Vue from'vue';

export default {
  name: 'App',
  components: {
    Navigation,
    Header
  },
  async created() {
    Vue.axios.get('http://localhost:4200/api/loggedin', {headers: {
      Authorization: 'Bearer' + localStorage.getItem('token')
    }})

    console.log(localStorage.getItem('token'))
  },
  data: () => ({

  }),
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Merienda&display=swap');
</style>
