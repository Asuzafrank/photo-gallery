<template>
  <nav
    class="navbar navbar-expand-lg fixed-top"
    style="background-color: rgb(103, 120, 120)"
  >
    <div class="container-fluid">
      <a class="navbar-brand" href="#"
        ><i class="fa-solid fa-camera" style="font-size: 30px"></i
      ></a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/" class="nav-link" aria-current="page" href="#"
              >Home</router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/album" class="nav-link" href="#"
              >Albums</router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/photos" class="nav-link" href="#"
              >photos</router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/det" class="nav-link">Post</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/login" class="nav-link">logout</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  name: "TopHeader",
};
</script>
<style scoped>
a {
  color: white;
}
</style>
