<template>
  <div class='container'>
      <div class='row header'>
                    <h3>Enter your token below</h3>
          <div class='col-12'>
              <div class='row'>
                  <div class='col-3'>
                      <v-form>

                      </v-form>
                  </div>
                      <div class='col-6'>
                      <v-form @submit.prevent="checkToken">
                         <v-text-field v-model="id" :counter="14" label="Enter Token" required></v-text-field>
                         <v-btn elevation="2" type="submit">Purchase</v-btn>
                      </v-form>
                  </div>
                  <div class='col-3'>

                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
import Vue from 'vue';
export default {
data() {
  return {
    id: '', 
    emailAddress: '',
    listingID: '',
    status: ''
  }
},
methods: {
  async checkToken() {
    const data = {
      id: this.id,
      emailAddress: localStorage.getItem('userAccount'),
      listingID: localStorage.getItem('userAccount'),
      status: 'Used'
    }
    Vue.axios.get(`http://localhost:4200/api/token/${data.id}`)
    .then((res) => {
        if(res.data.status == 'Used')
        {
          console.log('Token has already been used')
        } else {
          console.log('Success')
        }
    }).catch(() => {
      alert("Token entered does not exist")
    })
  }
}
}
</script>

<style>
.header {
    align-content: center!important;
    text-align: center;
}
</style>