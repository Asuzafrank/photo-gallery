<!-- PostAlbum.vue -->
<template>
  <TopHeader />

  <div class="container" style="margin-top: 60px">
    <fieldset>
      <h1 class="info text-center" style="color: black">Post Album</h1>
      <div class="inputs">
        <label for="title">Title:</label>
        <input type="text" id="title" v-model="album.title" />
      </div>
      <div class="btn-1">
        <button @click="post_album" class="btn btn-primary">post</button>
      </div>
    </fieldset>
  </div>
</template>

<script>
import TopHeader from "@/components/TopHeader.vue";
import axios from "axios";
export default {
  name: "PostAlbum",
  data() {
    return {
      album: {
        title: "",
        userId: null,
      },
    };
  },
  components: { TopHeader },
  methods: {
    getUserId() {
      const userInfo = JSON.parse(localStorage.getItem("user.info"));
      return userInfo.id;
    },
    async post_album() {
      const uid = this.getUserId();
      let result = await axios.post(" http://localhost:3000/albums", {
        title: this.album.title,
        userId: uid,
      });
      console.log(result);
    },
  },
};
</script>
<style scoped>
label {
  display: block;
}
.btn-1 {
  text-align: center;
}
input {
  width: 300px;
  border-radius: 10px;
  padding: 10px;
  border: 2px solid rgb(167, 55, 55);
  background-color: black;
  color: #fff;
}
.inputs {
  margin-top: 30px;
}
button {
  margin-top: 10px;
  width: 300px;
  background-color: rgb(167, 55, 55);
}
fieldset {
  background-color: #f5f6f7;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  /* Adjust the height as needed */
}
</style>
