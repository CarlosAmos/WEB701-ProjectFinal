<template>
  <div class="container">
      <h1>Store</h1>
      <div>
        <b-list-group>
          <!-- Listing listed here-->
  <b-list-group-item>
  <v-card :loading="loading" class="mx-auto my-12">
    <template slot="progress">
      <v-progress-linear color="deep-purple" height="10" indeterminate></v-progress-linear>
    </template>
    <v-card-title>Item Name/Package Name</v-card-title>
    <v-card-subtitle>Donator Name</v-card-subtitle> 
    <v-card-text>
      <div class="row">
        <div class="col-md-6">
           Description of the Item/Package here
        </div>
                <div class="col-md-6">
           List of items in listing
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
export default {

}
</script>

<style>

</style>