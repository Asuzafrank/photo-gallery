<template>
  <TopHeader />

  <div class="row" style="margin-top: 60px">
    <div class="col-lg-3" v-if="userProfile">
      <div class="profile">
        <div class="card profile">
          <h3 class="info text-center">profile info</h3>

          <hr />
          <img
            :src="userProfile.avatar"
            class="rounded-circle img-fluid custom-rounded-image mt-3"
            alt="profile-picture"
            style="radius: 10px; object-fit: cover"
          />
          <div class="card-body">
            <h2 class="card-title text-center">{{ userProfile.name }}</h2>
            <h2 class="card-title text-center">{{ userProfile.email }}</h2>

            <h2 class="card-text text-center">{{ userProfile.username }}</h2>
            <div class="icons text-center" style="font-size: 24px">
              <a href="https://github.com" target="_blank"
                ><i class="fab fa-github"></i
              ></a>
              <a href="https://www.instagram.com" target="_blank"
                ><i class="fab fa-instagram"></i
              ></a>
              <a href="https://twitter.com" target="_blank"
                ><i class="fab fa-twitter"></i
              ></a>
              <a href="https://www.facebook.com" target="_blank"
                ><i class="fab fa-facebook"></i
              ></a>
            </div>
            <div class="text-center mt-3">
              <button class="btn btn-primary">
                <i class="fa-solid fa-link">connect</i>
              </button>
            </div>
            <div class="text-center mt-3" style="color: white">
              <router-link
                :to="{ name: 'update', params: { user: currentUser } }"
                ><i class="fa fa-pen fa-xs edit">edit</i></router-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-lg-9 overflow-auto">
      <div class="d-flex flex-wrap gap-5">
        <div v-for="user in users" :key="user.id" class="card--">
          <div class="card" style="width: 300px">
            <div class="d-flex align-items-center">
              <img
                :src="user.avatar"
                class="rounded-circle img-fluid custom-image mt-3"
                alt="profile-picture"
                style="border-radius: 5px"
              />

              <router-link :to="'/userprofile/' + user.id"
                ><span class="ms-3 info">{{ user.username }}</span></router-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import TopHeader from "@/components/TopHeader.vue";
import axios from "axios";
export default {
  name: "HomeView",
  data() {
    return {
      userProfile: null,
      users: [],
    };
  },
  components: { TopHeader },
  async mounted() {
    this.userProfile = JSON.parse(localStorage.getItem("user.info"));

    let result = await axios.get("http://localhost:3000/users");
    this.users = result.data;
  },
};
</script>
<style scoped>
@import url(https://fonts.googleapis.com/css?family=Dancing+Script);
.custom-rounded-image {
  border-radius: 50%; /* Ensure a perfect circle */
  width: 100px; /* Adjust the width as desired */
  height: 100px; /* Adjust the height as desired */
  margin: 0 auto;
  border: 3px solid palevioletred;
}
.info {
  color: white;
  font-family: "Dancing Script", cursive;
}
hr {
  border: 3px solid pink;
}
.profile {
  background-color: black;
  height: 100vh;
}
h5,
p,
h2 {
  color: white;

  font-family: "Roboto", sans-serif;
  font-size: 18px;
  font-weight: 600;
}
.icons a {
  padding: 10px;
  margin-right: 10px;
}
button {
  width: 200px;
}
.card {
  background-color: black;
}
.custom-image {
  height: 50px;
  width: 50px;
  border: 3px solid palevioletred;
}
.card-user {
  width: 200px;
}
/* .col-lg-9 {
  background-image: url(https://cdn.pixabay.com/photo/2017/05/31/09/09/woman-2359562_640.jpg);
  background-repeat: no-repeat;
  background-size: cover;
} */
</style>
