<template>
  <div>
      <div class="container">
          <div class="row">
          <div class="col-lg-3">
          </div>
          <div class="col-lg-6 text">
    <b-form class='inputform' @submit.prevent="GetEmail ">
      <b-form-group id="input-group-1" label="Email address" label-for="emailAddress" class='label'>
        <b-form-input v-model="emailAddress" type="email" placeholder="Enter Email Address" required></b-form-input>
      </b-form-group>
        <br>
            <b-form-group id="input-group-4" label="Your Full Name" label-for="input-4" class='label'>
        <b-form-input id="input-4" v-model="fullName" placeholder="Enter Full Name" required></b-form-input>
      </b-form-group>
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

      <b-form-group id="input-group-3" label="What party do you belong to?" label-for="input-3">
        <b-form-select
          id="input-3"
          v-model="party"
          :options="loginas"          
          required
        ></b-form-select>
      </b-form-group>
        <br>

      <md-card-actions>
        <md-button class='md-primary md-raised login' type='submit'>Register</md-button>
      </md-card-actions>
      <md-card-actions>
                <md-button class='md-accent md-raised'>Cancel</md-button>
      </md-card-actions>
    </b-form>
    </div>
    <div class="col-lg-3"></div>
    </div>
    </div>
  </div>
</template>

<script>
//import * as firebase from 'firebase';
import "firebase/auth";
import Vue from 'vue'


  export default({
    data() {
      return {
        
          emailAddress: '',
          fullName: '',
          password: '',
          party: [],
        
        loginas: [{ text: 'Select One', value: null }, 'Beneficiary', 'Donator'],
        show: true
      }
    },
    methods: {
      async GetEmail(){
        const data = {
          id: this.emailAddress,
          fullName: this.fullName,
          emailAddress: this.emailAddress,
          password: this.password,
          party: this.party
      };
      Vue.axios.get(`http://localhost:4200/api/user/${data.emailAddress}`)
      .then(() => {
        console.log("User Exists")
        alert("Email already in use. Please login on the login page.")
      })
      .catch((err) => {
        console.log(err)
        Vue.axios.post('http://localhost:4200/api/user', data)
        alert("Hello")
      })
      
      },
      async Register(){
        const data = {
          id: this.emailAddress,
          fullName: this.fullName,
          emailAddress: this.emailAddress,
          password: this.password,
          party: this.party
      };
      Vue.axios.post('http://localhost:4200/api/user', data)
      .then(
        res => {
          console.log(res)
        }
      ).catch (
        err => {
          console.log(err)
        }
      )
      }
    }
  })
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
}
</style>