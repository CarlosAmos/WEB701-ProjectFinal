<template>
    <div >
        <!-- Listing cards. Each listing has their own card-->
      <div>
        <b-list-group v-for="item in list" v-bind:key="item.id">
          <!-- Listing listed here-->
  <b-list-group-item>
  <v-card :loading="loading" class="mx-auto my-12">
    <template slot="progress">
      <v-progress-linear color="deep-purple" height="10" indeterminate></v-progress-linear>
    </template>
    <v-card-title>{{item.listingName}}</v-card-title>
    <v-card-subtitle>{{item.donator}}</v-card-subtitle> 
    <v-card-text>
      <div class="row">
        <div class="col-md-6">
           {{item.description}}
        </div>
                <div class="col-md-6">
           {{item.items}}
        </div>
        </div>
    </v-card-text>
    <v-divider class="mx-4"></v-divider>
    <v-card-actions>
      <v-btn>View Listing</v-btn>
    </v-card-actions>
  </v-card>
  </b-list-group-item>
</b-list-group>
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
    return {list:undefined}
  },
  mounted()
  {
    Vue.axios.get('http://localhost:4200/api/listings')
    .then((res)=>{
      this.list=res.data;
        console.warn(res.data)
    })
  }
}
</script>

<style scoped>
.cardboxes {
    padding:20px;
    height: 20%;
}

</style>