<template>
  <div class="container mt-5 mb-3">
    <div class="row">
      <div
        class="col-md-6 col-lg-4 d-flex flex-column justify-content-center align-items-center"
        style="
          background: linear-gradient(
            to right,
            rgb(198, 51, 51),
            rgb(25, 25, 208)
          );
          transition: background-color 1s ease;
          height: 80vh;
        "
      >
        <div class="icon">
          <i class="fa-solid fa-camera"></i>
        </div>
        <h1 class="info">Login</h1>
        <h5 class="info">take memories to another level</h5>
      </div>
      <div class="col-md-6 col-lg-8" style="background-color: #f5f6f7">
        <p style="float: right">
          Dont Have An Account <router-link to="/signup">Signup</router-link>
        </p>

        <div
          class="input-fields d-flex flex-column align-items-center"
          style="margin-top: 40px"
        >
          <h1 class="info" style="color: black; font-size: 3em">login</h1>
          <i class="fa-solid fa-right-to-bracket" style="font-size: 50px"></i>

          <div class="input-name">
            <label for="name">Email:</label>
            <input
              type="text"
              name=""
              id="name"
              placeholder="...@gmail.com"
              v-model="email"
            />
          </div>
          <div class="input-name">
            <label for="name">Password</label>
            <input
              type="text"
              name=""
              id="name"
              placeholder="Enter Password"
              v-model="password"
            />
          </div>

          <div class="btn mt-3">
            <button @click="login" class="btn btn-primary" style="width: 300px">
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "SignupView",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async login() {
      let result = await axios.get(
        `http://localhost:3000/users?email=${this.email}&password=${this.password}`
      );
      if (result.status === 200 && result.data.length > 0) {
        localStorage.setItem("user.info", JSON.stringify(result.data[0]));
        alert("welcome to home page");
        this.$router.push({ name: "home" });
      }
    },
  },
};
</script>
<style scoped>
@import url(https://fonts.googleapis.com/css?family=Dancing+Script);

.container {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  height: 80vh;
}
input {
  padding: 10px;
  width: 300px;
  margin-top: 10px;
  border: 3px solid skyblue;
  border-radius: 5px;
}
.input-name {
  display: block;
}
label {
  font-weight: bold;
  display: block;
}

.info {
  color: white;
  font-family: "Dancing Script", cursive;
}
.icon {
  font-size: 60px; /* Increase the size of the icon as per your requirement */
}

.icon i {
  color: white; /* Set the color of the icon to white */
}
hr {
  border: 1px solid black;
}
</style>

