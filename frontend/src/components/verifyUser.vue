<template>
  <div>
      <div class="container">
          <div class="row">
          <div class="col-lg-3">
          </div>
          <div class="col-lg-6 text">
              <h1>Verify your account</h1>
    <b-form @submit.prevent="Login" v-if="show">
      <b-form-group id="input-group-1" label="Email address" label-for="input-1" class='label'>
        <b-form-input id="input-1" v-model="emailAddress" type="email" placeholder="Enter Email" required></b-form-input>
      </b-form-group>
        <br>
        <br>
      <b-form-group id="input-group-2" label="Your Password" label-for="input-2" class='label'>
        <b-form-input
          id="input-2"
          v-model="password"
          type="password"
          placeholder="Enter Password"
          required
        ></b-form-input>
      </b-form-group>
      <br>
        <br>
        
      <md-card-actions>
        <md-button class='md-primary md-raised login' type='submit'>Login</md-button>
      </md-card-actions>
      <md-card-actions>
                <router-link class='md-accent md-raised cancel' to="/Store"><md-button class='cancel'>Cancel</md-button></router-link>
      </md-card-actions>
    </b-form>
    </div>
    <div class="col-lg-3"></div>
    </div>
    </div>
  </div>
</template>

<script>
import "firebase/auth";
import Vue from 'vue';
//import axios from 'axios';

  export default {
    data() {
      return {
          emailAddress: '',
          password: '',        
        loginas: [{ text: 'Select One', value: null }, 'Beneficiary', 'Donator'],
        show: true
      }
    },
    mounted() {

    },
    methods: {
      async Login() {
        const data = {
          id: this.emailAddress,
          password: this.password
        };
        Vue.axios.get(`http://localhost:4200/api/user/${data.id}`, 
        {credentials: 'include'})
        .then((res) => {
          if(res.data.password == data.password)
          {
            alert("Credentials Correct")
            this.$router.push('verifyToken')

          } else {
            alert("Password was incorrect")
          }
        })
        .catch(() => {
            alert("Email entered does not exist")
        })
        
        ;
        
        
        
      }
    }
  }
</script>

<style scoped>
.text {
    align-content: center!important;
    text-align: center;
}

.label {
    font-size: 22px;
}

.buttons {
    align-content: center!important;
}

.md-raised
{
    width: 100%;
    border-radius: 20px;
}

.login{
    background-color:#0dc4e0!important;
    color:white!important;
}

.cancel{
    background-color:red;
    color:white!important;
}
</style>