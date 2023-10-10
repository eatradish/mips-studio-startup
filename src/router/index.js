import { createRouter, createWebHistory, createWebHashHistory } from "vue-router";
import WelcomeView from "@/views/WelcomeView.vue";
import NewProject from "@/views/NewProject.vue";
import CustomProject from "@/views/CustomProject.vue";
import ImportProject from '@/views/ImportProject.vue';

const router = createRouter({
  history: process.env.IS_ELECTRON ? createWebHashHistory(process.env.BASE_URL) : createWebHistory(process.env.BASE_URL),
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
    },
    {
      name: "importproject",
      path: "/import-project",
      component: ImportProject
    },
    {
      name: "customproject",
      path: "/custom-project",
      component: CustomProject
    }
  ]
});

export default router;
