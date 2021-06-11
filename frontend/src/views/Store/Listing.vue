<template>
  <div class="container">
      <h1>Listing</h1>
      <div>

          <!-- Listing listed here-->

  <v-card :loading="loading" elevation='0' class="mx-auto my-12">
    <template slot="progress">
      <v-progress-linear color="deep-purple" height="10" indeterminate></v-progress-linear>
    </template>
    <v-card-title class='title'>Item Name/Package Name<v-card-subtitle class='subtitle'>Donator Name</v-card-subtitle> </v-card-title>
    <v-card-text>

      <div class="row">
        <div class="col-md-6 content">
          <v-img height='100%' src="https://cdn.vuetifyjs.com/images/cards/cooking.png"></v-img>

        </div>
                <div class="col-md-6 content">
           Description of the Item/Package here
           <br>
           <br>
           <h3>Items</h3>
           List of items in listing
        </div>
        </div>
    </v-card-text>
    <v-divider class="mx-4"></v-divider>
    <v-card-actions>
      <v-btn>Purchase</v-btn>
    </v-card-actions>
  </v-card>

      </div>
  </div>
</template>

<script>
export default {

}
</script>

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