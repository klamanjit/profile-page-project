import { createRouter, createWebHistory } from "vue-router";

import Home from "./page/Home.vue";
import AboutMe from "./page/AboutMe.vue";
import Resume from "./page/Resume.vue";
import Projects from "./page/Projects.vue";
import Contact from "./page/Contact.vue";

const router = createRouter({
  history: createWebHistory("/profile-page-project"),
  routes: [
    { path: "/", component: "/home" },
    // { path: "/home", component: Home },
    { path: "/about", component: AboutMe },
    { path: "/resume", component: Resume },
    { path: "/projects", component: Projects },
    { path: "/contact", component: Contact },
  ],
});

export default router;
