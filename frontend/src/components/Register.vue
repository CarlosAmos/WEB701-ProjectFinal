<template>
  <div>
      <div class="container">
          <div class="row">
          <div class="col-lg-3">
          </div>
          <div class="col-lg-6 text">
    <b-form @submit="onSubmit" v-if="show">
      <b-form-group
        id="input-group-1"
        label="Email address"
        label-for="input-1"
        class='label'
      >
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="email"
          placeholder="Enter Emailddd"
          required
        ></b-form-input>
      </b-form-group>
        <br>
        <br>

      <b-form-group id="input-group-2" label="Your Password" label-for="input-2" class='label'>
        <b-form-input
          id="input-2"
          v-model="form.password"
          type="password"
          placeholder="Enter Password"
          required
        ></b-form-input>
      </b-form-group>
      <br>
      <b-form-group id="input-group-3" label="Who would like to login as?" label-for="input-3">
        <b-form-select
          id="input-3"
          v-model="form.party"
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
  export default {
    data() {
      return {
        form: {
          email: '',
          password: '',
          party: null
        },
        loginas: [{ text: 'Select One', value: null }, 'Beneficiary', 'Donator'],
        show: true
      }
    },
    methods: {
      onSubmit(event) {
        event.preventDefault()
        alert(JSON.stringify(this.form))
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
    font-size: 27px;
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