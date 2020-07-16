import Vue from "vue";
import Router from "vue-router";
import WelcomeSlide from "../components/WelcomeSlide";
import GetStartedSlide from "../components/GetStartedSlide";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "WelcomeSlide",
      component: WelcomeSlide,
    },
    {
      path: "/get-started",
      name: "GetStartedSlide",
      component: GetStartedSlide,
    },
  ],
});
