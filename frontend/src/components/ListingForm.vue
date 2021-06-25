<template>
  <validation-observer
    ref="observer"
    v-slot="{ invalid }"
  >
    <form @submit.prevent="createListing">
        <!-- Listing Name input Field-->
      <validation-provider
        v-slot="{ errors }"
        name="Listing Name"
        rules="required|max:100"
      >
        <v-text-field
          v-model="listingData.listingName"
          :counter="100"
          :error-messages="errors"
          label="Listing Name"
          required
        ></v-text-field>
      </validation-provider>
      <!-- Donator Name input Field-->
        <validation-provider
        v-slot="{ errors }"
        name="Your Name"
        rules="required|max:60"
      >
        <v-text-field
          v-model="listingData.donator"
          :counter="60"
          :error-messages="errors"
          label="Your Name / Organisation"
          required
        ></v-text-field>
      </validation-provider>
      <!-- Items input Field-->
          <v-textarea v-model="listingData.items" clearable clear-icon="mdi-close-circle" label="List of items in listing"></v-textarea>
      <!-- Description Name input Field-->
          <v-textarea v-model="listingData.description" clearable clear-icon="mdi-close-circle" label="Description of listing"></v-textarea>
      <v-btn class="mr-4" type="submit" :disabled="invalid">Create Listing</v-btn>
      <v-btn @click="clear">
        clear
      </v-btn>
    </form>
  </validation-observer>
</template>

<script>
import axios from "axios"
  import { required, digits, email, max, regex } from 'vee-validate/dist/rules'
  import { extend, ValidationObserver, ValidationProvider, setInteractionMode } from 'vee-validate'

  setInteractionMode('eager')

  extend('digits', {
    ...digits,
    message: '{_field_} needs to be {length} digits. ({_value_})',
  })

  extend('required', {
    ...required,
    message: '{_field_} can not be empty',
  })

  extend('max', {
    ...max,
    message: '{_field_} may not be greater than {length} characters',
  })

  extend('regex', {
    ...regex,
    message: '{_field_} {_value_} does not match {regex}',
  })

  extend('email', {
    ...email,
    message: 'Email must be valid',
  })

  export default {
    components: {
      ValidationProvider,
      ValidationObserver,
    },
    data() {
        return {
            listingData :{
                listingName: '', 
                donator: '',
                items: '',
                description: ''
            }
        }
    },

    methods: {
      submit () {
        this.$refs.observer.validate()
      },
      createListing () {
          axios.post('http://localhost:4200/api/listing', this.listingData)
          .then()
          .catch(err => console.log(err))
          this.$router.push('/Store')
      },
      clear () {
        this.listingData.listingName = ''
        this.listingData.donator = ''
        this.listingData.items = ''
        this.listingData.description = ''
        this.$refs.observer.reset()
      },
    },
  }
</script>