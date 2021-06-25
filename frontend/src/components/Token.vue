<template>
  <div class='container'>
      <div class='row'>
        <div class='col-12'>
          <h5>Be sure to write down the codes. Can be used for purchasing products</h5>
        <b-list-group v-for="token in list" v-bind:key="token.id">
          <div class='col-4'>
            Token: {{token.id}} - {{token.status}}
          </div>
          <div class='col-4'>

          </div>
          </b-list-group>
          </div>
          </div>
  </div>
</template>

<script>
import Vue from 'vue'
export default {
data() {
  return {
    id: '', 
    emailAddress: '',
    listingID: '',
    status: '',
    list:undefined
  }
},
mounted() {
  Vue.axios.get('http://localhost:4200/api/tokens')
  .then((res) => {
    const tokens = res.data
    var email = localStorage.getItem('userAccount')
    this.list = tokens.filter(token => token.emailAddress == email)
  })
},
methods: {

  
}
}
</script>

<style>

</style>