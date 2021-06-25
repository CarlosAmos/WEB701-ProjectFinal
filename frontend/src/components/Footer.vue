<template>
    <v-footer
    dark
    padless
    class='footer mx-auto'
  >
    <v-card
      flat
      tile
      class="indigo lighten-1 white--text text-center"
    >
      <v-card-text class='icons'>
        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4 white--text"
          icon
        >
          <v-icon size="24px">
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
  export default {
    data: () => ({
      icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-instagram'
      ],
    }),
  }
</script>

<style>
.footer {
    width: 80%;
    justify-content: center;
    background-color: #0dc4e0!important;
    position:fixed;
}

.icons {
    padding-inline:  200px;
    background-color: #0dc4e0!important
}
</style>