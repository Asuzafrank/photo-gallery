<template>
  <div class="navbar-top">
    <div class="title">
      <h1>Profile</h1>
    </div>

    <!-- Navbar -->

    <!-- End -->
  </div>
  <!-- End -->

  <!-- Sidenav -->

  <!-- End -->

  <!-- Main -->
  <div class="main">
    <h2>IDENTITY</h2>
    <div class="card">
      <div class="card-body">
        <table>
          <tbody>
            <tr>
              <td>Name</td>
              <td>:</td>
              <td>{{ user.name }}</td>
            </tr>
            <tr>
              <td>Email</td>
              <td>:</td>
              <td>{{ user.email }}</td>
            </tr>
            <tr>
              <td>username</td>
              <td>:</td>
              <td>{{ user.username }}</td>
            </tr>

            <tr>
              <td>avatar</td>
              <td>:</td>
              <td>{{ user.avatar }}</td>
            </tr>
            <tr>
              <td>Bio</td>
              <td>:</td>
              <td>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Reiciendis architecto ipsa deleniti natus. Doloremque eveniet
                facere fuga cupiditate molestiae laudantium impedit voluptas
                excepturi perferendis sunt ullam nostrum labore, beatae quos!
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "ProfileUser",
  data() {
    return {
      user: {},
    };
  },
  async mounted() {
    let result = await axios.get(
      "http://localhost:3000/users/" + this.$route.params.id
    );
    this.user = result.data;
  },
};
</script>
<style scoped>
/* Import Font Dancing Script */
@import url(https://fonts.googleapis.com/css?family=Dancing+Script);

* {
  margin: 0;
}

body {
  font-family: Arial;
  background-color: #f5f6f7;
}

/* NavbarTop */
.navbar-top {
  background-color: #fff;
  color: #333;
  box-shadow: 0px 4px 8px 0px grey;
  height: 70px;
}

.title {
  font-family: "Dancing Script", cursive;
  padding-top: 15px;
  position: absolute;
  left: 45%;
}

.navbar-top ul {
  float: right;
  list-style-type: none;
  margin: 0;
  overflow: hidden;
  padding: 18px 50px 0 40px;
}

.navbar-top ul li {
  float: left;
}

.navbar-top ul li a {
  color: #333;
  padding: 14px 16px;
  text-align: center;
  text-decoration: none;
}

.icon-count {
  background-color: #ff0000;
  color: #fff;
  float: right;
  font-size: 11px;
  left: -25px;
  padding: 2px;
  position: relative;
}

/* End */

/* Sidenav */

.profile {
  margin-bottom: 20px;
  margin-top: -12px;
  text-align: center;
}

.profile img {
  border-radius: 50%;
  box-shadow: 0px 0px 5px 1px grey;
}

/* End */

/* Main */
.main {
  margin-top: 2%;
  margin-left: 29%;
  font-size: 28px;
  padding: 0 10px;
  width: 58%;
}

.main h2 {
  color: #333;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-size: 24px;
  margin-bottom: 10px;
}

.main .card {
  background-color: #fff;
  border-radius: 18px;
  box-shadow: 1px 1px 8px 0 grey;
  height: auto;
  margin-bottom: 20px;
  padding: 20px 0 20px 50px;
}

.main .card table {
  border: none;
  font-size: 16px;
  height: 270px;
  width: 80%;
}

.edit {
  position: absolute;
  color: #e7e7e8;
  right: 14%;
}

.social-media {
  text-align: center;
  width: 90%;
}

.social-media span {
  margin: 0 10px;
}

.fa-facebook:hover {
  color: #4267b3 !important;
}

.fa-twitter:hover {
  color: #1da1f2 !important;
}

.fa-instagram:hover {
  color: #ce2b94 !important;
}

.fa-invision:hover {
  color: #f83263 !important;
}

.fa-github:hover {
  color: #161414 !important;
}

.fa-whatsapp:hover {
  color: #25d366 !important;
}

.fa-snapchat:hover {
  color: #fffb01 !important;
}
.card {
  background-color: blue;
}

/* End */
</style>
