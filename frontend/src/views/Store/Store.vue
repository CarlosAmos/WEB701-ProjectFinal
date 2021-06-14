<template>
  <div class="container">
      <h1>Store</h1>
      <div class='row'>
        <div class='col-12'>
          <div class="input-group">
           <input class="form-control me-sm-2 searchbox ml-auto" type="text" placeholder="Search">
           <span>
             <v-btn class="button">Search</v-btn>
             <v-btn class="button"><router-link class="buttonlink" to="/Store/EditListing">Add Listing</router-link></v-btn>
             <v-btn class="button">Filter</v-btn>
             </span>
          </div>
        </div>
      </div>
      <div class='row'>
      <div class='col-12'>
        <listing-card></listing-card>
      </div>
      </div>

  </div>
</template>

<script>
import ListingCard from "../../components/ListingCard"
export default {
components: {ListingCard}
}
</script>

<style>
.button {
  border-radius: 20px!important;
  font-size: 12px !important;
  color: #0dc4e0!important;
}

.buttonlink {
  text-decoration: none!important;
  color: #0dc4e0!important;
}
</style>