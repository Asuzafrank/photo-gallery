<template>
  <TopHeader />
  <div class="container" style="margin-top: 60px">
    <div class="album-title d-flex justify-content-center flex-wrap gap-3">
      <div class="bk" v-for="album in albums" :key="album.id">
        <div class="s-album">
          <router-link
            :to="'/album/' + album.id"
            class="info"
            style="font-size: 20px; text-decoration: none; margin-left: 10px"
            >{{ album.title }}</router-link
          >
          <i @click="deleteAlbum(album)" class="fa-solid fa-trash"></i>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import TopHeader from "../components/TopHeader.vue";
export default {
  name: "AlbumView",
  components: {
    TopHeader,
  },
  data() {
    return {
      albums: [],
    };
  },

  async mounted() {
    let res = await axios.get("http://localhost:3000/albums");
    this.albums = res.data;
  },
  methods: {
    getUserId() {
      const userId = JSON.parse(localStorage.getItem("user.info"));
      return userId.id;
    },
    async deleteAlbum(album) {
      const loggedInUserId = this.getUserId(); // Assuming you have the logged-in user's ID stored in localStorage

      if (album.userId === loggedInUserId) {
        try {
          await axios.delete(`http://localhost:3000/albums/${album.id}`);
          alert("Album  deleted successfully.");
          this.albums = this.albums.filter((a) => a.id !== album.id);
        } catch (error) {
          console.error(`Error deleting album with ID ${album.id}:`, error);
        }
      } else {
        alert("You are not authorized to delete this album.");
      }
    },
  },
};
</script>
<style scoped>
.s-album {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  background-color: #482323;
  overflow: hidden;
  width: 350px;
  height: 60px;
  color: white;
  display: flex;
  border-radius: 5px;
}

.s-album {
  position: relative;
  display: inline-block;
  margin-right: 10px;
}

.s-album h5 {
  margin-bottom: 5px;
}

.s-album i.fa-trash {
  position: absolute;
  bottom: 0;
  right: 0;
}
</style>
