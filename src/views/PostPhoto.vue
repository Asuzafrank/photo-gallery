<template>
  <TopHeader />
  <div class="container" style="margin-top: 60px">
    <h1 class="info text-center" style="color: rgb(167, 55, 55)">
      Save Your Memories
    </h1>
    <hr />
    <fieldset class="center-fieldset">
      <legend class="text-center">post photo</legend>
      <div class="icon">
        <i class="fa-solid fa-signs-post"></i>
      </div>
      <div class="inputs">
        <label for="albumId">Album:</label>
        <select class="input" id="albumId" v-model="photo.albumId" required>
          <option v-for="album in albums" :value="album.id" :key="album.id">
            {{ album.title }}
          </option>
        </select>
      </div>
      <div class="inputs">
        <label for="title">Photo Title:</label>
        <input type="text" id="title" v-model="photo.title" />
      </div>
      <div class="inputs">
        <label for="url">Photo Url:</label>
        <input type="url" id="url" v-model="photo.url" />
      </div>
      <div class="btn-1">
        <button @click="post_photo" class="btn btn-primary">
          <i class="fa-solid fa-pen">post photo</i>
        </button>
      </div>
    </fieldset>
  </div>
</template>
<script>
import axios from "axios";
import TopHeader from "@/components/TopHeader.vue";
export default {
  name: "UpdateProfile",
  components: { TopHeader },
  data() {
    return {
      photo: {
        title: "",
        albumId: null,
        url: "",
      },
      albums: [],
    };
  },
  methods: {
    getUserId() {
      const userInfo = JSON.parse(localStorage.getItem("user.info"));
      return userInfo.id;
    },
    async post_photo() {
      let result = await axios.post("http://localhost:3000/photo", {
        title: this.photo.title,
        albumId: this.photo.albumId,
        url: this.photo.url,
      });
      if (result.status === 201) {
        alert("photo posted successfully");
        this.$router.push({
          name: "photos",
          params: { albumId: this.photo.albumId },
        });
      }
    },
  },
  async mounted() {
    // Retrieve user data from route params
    let res = await axios.get("http://localhost:3000/albums");
    this.albums = res.data;
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
.input {
  width: 300px;
  border-radius: 10px;
  padding: 10px;
  border: 2px solid rgb(167, 55, 55);
  background-color: black;
  color: #fff;
}
</style>
