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

export default {
  name: 'App',

  components: {
    Navigation,
    Header
  },

  data: () => ({

  }),
};
</script>
