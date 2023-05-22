<template>
  <div class="container mt-5">
    <h1 class="info text-center" style="color: rgb(167, 55, 55)">
      Update Your Profile
    </h1>
    <hr />
    <fieldset class="center-fieldset">
      <legend class="text-center">preference</legend>
      <div class="icon">
        <i class="fa-solid fa-address-card"></i>
      </div>

      <div class="inputs">
        <label for="avatar">avatar:</label>
        <input type="url" id="avatar" v-model="user.avatar" />
      </div>
      <div class="inputs">
        <label for="username">Username:</label>
        <input type="text" id="username" v-model="user.username" />
      </div>
      <div class="inputs">
        <label for="name">name:</label>
        <input type="text" id="name" v-model="user.name" />
      </div>
      <div class="inputs">
        <label for="email">email:</label>
        <input type="email" id="email" v-model="user.email" />
      </div>
      <div class="btn-1">
        <button @click="update" class="btn btn-primary">
          <i class="fa-solid fa-pen">update</i>
        </button>
      </div>
    </fieldset>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "UpdateProfile",
  data() {
    return {
      user: {
        name: "",
        username: "",
        email: "",
        avatar: "",
      },
    };
  },
  methods: {
    getUserId() {
      const userInfo = JSON.parse(localStorage.getItem("user.info"));
      return userInfo.id;
    },
    async update() {
      const userId = this.getUserId();
      let res = await axios.patch(`http://localhost:3000/users/${userId}`, {
        name: this.user.name,
        username: this.user.username,
        email: this.user.email,
        avatar: this.user.avatar,
      });
      if (res.status == 200) {
        const userInfo = JSON.parse(localStorage.getItem("user.info"));
        userInfo.name = this.user.name;
        userInfo.username = this.user.username;
        userInfo.email = this.user.email;
        userInfo.avatar = this.user.avatar;
        localStorage.setItem("user.info", JSON.stringify(userInfo));
        this.$router.push({ name: "home" });
        alert("profile updated successfully");
      }
    },
  },
  async mounted() {
    // Retrieve user data from route params
    const userId = this.getUserId();
    let result = await axios.get(`http://localhost:3000/users/${userId}`);
    this.user = result.data;
  },
};
</script>
<style scoped>
body {
  background-color: #f5f6f7;
}
.center-fieldset {
  background-color: #f5f6f7;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* Adjust the height as needed */
}
.inputs {
  margin-top: 10px;
}
label {
  display: block;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
}
input {
  width: 300px;
  border-radius: 10px;
  padding: 10px;
  border: 2px solid rgb(167, 55, 55);
  background-color: black;
  color: #fff;
}
.btn {
  margin-top: 10px;
  width: 300px;
  background-color: rgb(167, 55, 55);
}
.btn:hover {
  background-color: steelblue;
}
hr {
  border: 1px solid brown;
}
.icon {
  font-size: 40px;
}
</style>
