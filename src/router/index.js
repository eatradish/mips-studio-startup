import { createRouter, createWebHistory } from "vue-router";
import WelcomeView from "@/views/WelcomeView.vue";
import NewProject from "@/views/NewProject.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
      {
        name: "home",
        path: "/",
        component: WelcomeView
      },
      {
        name: "newproject",
        path: "/newproject",
        component: NewProject
      }
    ]
});


export default router;