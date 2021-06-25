<template>
  <div class="container ">
      <h1>Listing</h1>
      <div>

          <!-- Listing listed here-->

  <v-card v-if="listing" elevation='0' class="mx-auto my-12">
    <template slot="progress">
      <v-progress-linear color="deep-purple" height="10" indeterminate></v-progress-linear>
    </template>
    <v-card-title class='title'>{{listing.listingName}}<v-card-subtitle class='subtitle'>{{listing.donator}}</v-card-subtitle> </v-card-title>
    <v-card-text>

      <div class="row">
        <div class="col-md-6 content">
          <v-img height='100%' src="https://cdn.vuetifyjs.com/images/cards/cooking.png"></v-img>

        </div>
                <div class="col-md-6 content">
           {{listing.description}}
           <br>
           <br>
           <h3>Items</h3>
           {{listing.items}}
        </div>
        </div>
    </v-card-text>
    <v-divider class="mx-4"></v-divider>
    <v-card-actions>
      <v-btn><router-link class="buttonlink" to='/verifyUser'>Purchase</router-link></v-btn>
    </v-card-actions>
  </v-card>

      </div>
  </div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios,axios)
export default {
  data()
  {
    return {listing: undefined}
  },
  mounted()
  {    
    Vue.axios.get(`http://localhost:4200/api/listing/${this.$route.params.id}`)
    .then((res)=>{
      this.listing=res.data;
      localStorage.setItem('listingID', this.$route.params.id);
    })
    }
  }

</script>

<!-- 
    .then((res)=>{
      this.listing=res.data;    
    })
-->

<style>
.title{
  font-size: 30px;
}

.subtitle {
  font-size: 20px;
}
.content{
  font-size: 20px;
}
</style>