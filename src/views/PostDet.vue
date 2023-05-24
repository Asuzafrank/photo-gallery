<template>
  <TopHeader />
  <div
    class="container d-flex flex-row justify-content-center align-items-center"
    style="margin-top: 40px; height: 100vh"
  >
    <div
      class="card"
      style="
        width: 20rem;
        height: 30rem;
        background: radial-gradient(rgb(80, 128, 112), #ffffff);
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
      "
    >
      <div class="card-body">
        <div class="icon text-center">
          <i class="fa-solid fa-camera"></i>
        </div>
        <h6 class="card-subtitle mb-2 text-center info">
          Eager To Save Memories
        </h6>
        <p class="card-text" style="color: black">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum
          dolorem rerum animi repellendus numquam eveniet, doloremque deserunt,
          aperiam totam odio nemo eligendi, omnis nihil! Similique quis possimus
          aut placeat deserunt.
        </p>
        <p>want do you prefer to post?</p>
        <router-link to="/post" href="#" class="card-link">Album</router-link>
        <router-link to="/post-photo" href="#" class="card-link"
          >photo</router-link
        >
      </div>
    </div>
  </div>
</template>
<script>
import TopHeader from "@/components/TopHeader.vue";
export default {
  name: "PostDet",
  components: { TopHeader },
};
</script>
<style scoped>
.icon {
  font-size: 60px; /* Increase the size of the icon as per your requirement */
  color: black;
}
.card-link {
  color: rgb(44, 49, 53);
  text-decoration: none;
}
.card-link:hover {
  color: rgb(54, 22, 22);
}
h6 {
  color: black;
}
</style>
