<template>
<nav class="navbar navbar-expand-lg NavBar mx-auto">
  <div class="container-fluid">
    <a class="navbar-brand">Supplies4Schools</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <!-- Home Link -->
        <li class="nav-item">
          <v-btn depressed elevation="2" rounded><router-link class="nav-link NavLink" to="/">Home<span class="visually-hidden">(current)</span></router-link></v-btn>
        </li>
        <!-- Store Link -->
        <li class="nav-item">
          <v-btn depressed elevation="2" rounded><router-link class="nav-link NavLink" to="/Store">Store</router-link></v-btn>
        </li>
        <!-- News Link -->
        <li class="nav-item">
          <v-btn depressed elevation="2" rounded><router-link class="nav-link NavLink" to="/News">News</router-link></v-btn>
        </li>
        <!-- About Us Link -->
        <li class="nav-item">
          <v-btn depressed elevation="2" rounded><router-link class="nav-link NavLink" to="/AboutUs">About Us</router-link></v-btn>
        </li>
      </ul>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <!-- Donate Button -->
        <v-btn depressed elevation="2" rounded class='DonateBut nav-link'><router-link class="nav-link DonateLink" to="/Donate">Donate</router-link></v-btn>
        <!-- Login Button -->
        <v-btn depressed elevation="2" rounded><router-link class="nav-link" to="/Login">Login</router-link></v-btn>
      </form>
    </div>
  </div>
</nav>


</template>

<script>


export default {

}
</script>

<style>
.NavBar {
  width:90%;
  background-color: #0dc4e0!important;
  padding: 10px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
}

.NavBarButton {
  padding-left: 10px;
}

.NavRight {
  text-align: right;
  padding-left:100px;
}

.DonateBut{
  background-color: rgb(253, 53, 53) !important;
}

.NavLink {
    font-size: 14px !important;
  text-decoration: none !important;
  color:#0dc4e0!important;
}

.DonateLink{
  color: white !important;
  font-size: 12px !important;
  text-decoration: none !important;

    }

.nav-item{
  padding-left:5px;
}
</style>