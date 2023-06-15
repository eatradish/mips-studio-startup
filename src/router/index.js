import { createRouter, createWebHistory } from "vue-router";
import WelcomeView from "@/views/WelcomeView.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
      {
        name: "home",
        path: "/",
        component: WelcomeView
      },
    ]
});


export default router;