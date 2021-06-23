<template>
    <div class='container'>
      <div class='row'>
          <div class='col-12' v-if="user">
            <div class='row'>
           <div class='col-4'>
            <v-card elevation="2">
                  <v-img height="350" src="https://cdn.vuetifyjs.com/images/cards/cooking.png" ></v-img>
            </v-card>
          </div>
          <div class='col-8'>
            <h4>{{user.fullName}}</h4>
            <v-card-subtitle>{{user.emailAddress}}</v-card-subtitle>
            <h6>Party: {{user.party}}</h6>
          </div>
          </div>
          <div class='row'>
           <div class='col-4'>
             <v-btn disabled class='buttons'> Change Profile Pic </v-btn>
             <br>
             <div v-if="user.party == 'Beneficiary'">
             <v-btn class='buttons' v-on:click="component ='token-card'"> Aquire Tokens</v-btn>
             </div>
          </div>
          <div class='col-8'>

                <component v-bind:is="component"></component>

          </div>
          </div>

          </div>
      </div>
  </div>
</template>

<script>
import TokenCard from '../components/Token.vue'
import Vue from 'vue'

export default {
  components: {
    'token-card': TokenCard
  },
data() {
  return {
    component: 'a',
    user: undefined
  }
  },
    mounted()
    {    
    var id = localStorage.getItem('userAccount')
    Vue.axios.get(`http://localhost:4200/api/user/${id}`)
    .then((res)=>{
      this.user=res.data;
    })
    }
}

</script>

<style>
.buttons{
  width:100%;
}
</style>