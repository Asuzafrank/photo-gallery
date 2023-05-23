import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginView from "../views/LoginView.vue";
import SignupView from "../views/SignupView.vue";
import ProfileUser from "../views/ProfileUser.vue";
import PhotoView from "../views/PhotoView.vue";
import AlbumView from "../views/AlbumView.vue";
import UpdateProfile from "../views/UpdateProfile.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
  },
  {
    path: "/signup",
    name: "signup",
    component: SignupView,
  },
  {
    path: "/userprofile/:id",
    name: "userprofile",
    component: ProfileUser,
  },
  {
    path: "/update",
    name: "update",
    component: UpdateProfile,
  },
  {
    path: "/album/:albumId",
    name: "photos",
    component: PhotoView,
  },
  {
    path: "/album",
    name: "album",
    component: AlbumView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
