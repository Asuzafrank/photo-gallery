<template>
  <TopHeader />
  <div class="container" style="margin-top: 60px">
    <div class="images">
      <div class="mtl" v-for="photo in photos" :key="photo.id">
        <img class="img-thumbnail" :src="photo.url" alt="" />
        <span class="image-title">{{ photo.title }}</span>
      </div>
    </div>

    <h1>photo</h1>
  </div>
</template>
<script>
import axios from "axios";
import TopHeader from "../components/TopHeader.vue";
export default {
  name: "PhotoView",
  components: {
    TopHeader,
  },
  data() {
    return {
      photos: [],
    };
  },
  async mounted() {
    try {
      const response = await axios.get("http://localhost:3000/photo");
      this.photos = response.data;
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  },
};
</script>
<style scoped>
.images {
  display: flex;
  flex-direction: row;
  gap: 20px;
  flex-wrap: wrap;
}
.mtl {
  display: block;
  position: relative;
}
.image-title {
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100%;
  text-align: center;
  font-size: 14px;
  display: block;
  background: rgba(0, 0, 0, 0.7);
  padding: 0 4px;
  box-sizing: border-box;
  color: silver;
  overflow: hidden;
  height: 30px;
  line-height: 30px;
}
img {
  width: 200px;
  height: 200px;
  object-fit: cover;
}
</style>
