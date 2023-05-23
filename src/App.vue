<template>
  <router-view />
</template>

<style>
@import url(https://fonts.googleapis.com/css?family=Dancing+Script);
#app {
  background-color: #f5f6f7;
}
.info {
  color: white;
  font-family: "Dancing Script", cursive;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
