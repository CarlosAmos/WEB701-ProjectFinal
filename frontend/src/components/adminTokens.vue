<template>
  <div class='container'>
      <div class='row header'>
                    <h3>Enter email of account to create token for</h3>
          <div class='col-12'>
              <div class='row'>
                  <div class='col-3'>
                      <v-form>

                      </v-form>
                  </div>
                      <div class='col-6'>
                      <v-form @submit.prevent="createToken">
                         <v-text-field v-model="emailAddress" :counter="60" label="Enter Token" required></v-text-field>
                         <v-btn elevation="2" type="submit">Create</v-btn>
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
        emailAddress:'',
        listingID: '',
        status: 'Created',
        message: "Hello"
    }
    
},
methods: {
    async createToken() {
        const data = {
            id: this.id,
            emailAddress: this.emailAddress,
            listingID: this.listingID,
            status: this.status
        } 
             
        Vue.axios.get(`http://localhost:4200/api/user/${data.emailAddress}`)
        .then((res) => {
            if(res.data.party == 'Beneficiary')
            {
                Vue.axios.post('http://localhost:4200/api/token', data)
                .then(() => {
                    
                })
            } else {
                alert("Tokens can only be generated for beneficaries")
            }
        })
        .catch(() => {
            alert("Email entered does not exist")
        })
    },
    rndToken(len) {
        let text = " "
        let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

        for( let i=0; i < len; i++) {
            text += chars.charAt(Math.floor(Math.random() * chars.length))
        }
    return text
    }
},
mounted () {
    setInterval(() => {
        let message = this.rndToken(10)

        this.id = message}, 1000)
    
}

}
</script>

<style>

</style>