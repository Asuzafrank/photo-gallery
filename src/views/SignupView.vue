<template>
  <div class="container mt-3 mb-3">
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
        "
      >
        <div class="icon">
          <i class="fa-solid fa-camera"></i>
        </div>
        <h1 class="info">signup</h1>
        <h5 class="info">take memories to another level</h5>
      </div>
      <div class="col-md-6 col-lg-8" style="background-color: #f5f6f7">
        <p style="float: right">
          Already Have An Account <router-link to="/login">login</router-link>
        </p>

        <div
          class="input-fields d-flex flex-column align-items-center"
          style="margin-top: 40px"
        >
          <h1 class="info" style="color: black; font-size: 3em">
            photo-Gallery
          </h1>

          <div class="input-name">
            <label for="name">your name:</label>
            <input
              type="text"
              name=""
              id="name"
              placeholder="Enter Your Name"
              v-model="name"
            />
          </div>
          <div class="input-name">
            <label for="name">Username:</label>
            <input
              type="text"
              name=""
              id="username"
              placeholder="Enter your alias"
              v-model="username"
            />
          </div>
          <div class="input-name">
            <label for="email">Email:</label>
            <input
              type="email"
              name=""
              id="email"
              placeholder="...@gmail.com"
              v-model="email"
            />
          </div>
          <div class="input-name">
            <label for="password">Password</label>
            <input
              type="password"
              name=""
              id="password"
              placeholder="Enter Password"
              v-model="password"
            />
          </div>
          <div class="input-name">
            <label for="password">Confirm Password</label>
            <input
              type="password"
              name=""
              id="password"
              placeholder="Enter Password"
              v-model="confirm_password"
            />
          </div>
          <div class="btn mt-3">
            <button
              @click="signup"
              class="btn btn-primary"
              style="width: 300px"
            >
              Sign-up
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
      name: "",
      username: "",
      email: "",
      password: "",
      confirm_password: "",
    };
  },
  methods: {
    async signup() {
      if (
        !this.name ||
        !this.username ||
        !this.email ||
        !this.password ||
        !this.confirm_password
      ) {
        alert("please fill the required fields");
      } else if (this.password !== this.confirm_password) {
        alert("passwords do not match");
        return;
      }
      let result = await axios.post(" http://localhost:3000/users", {
        name: this.name,
        username: this.username,
        email: this.email,
        password: this.password,
        confirm_password: this.confirm_password,
        avatar: "https://mdbcdn.b-cdn.net/img/new/avatars/2.webp",
      });
      if (result.status === 201) {
        localStorage.setItem("user.info", JSON.stringify(result.data));
        alert("signed successfully! login");
        this.$router.push({ name: "login" });
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

