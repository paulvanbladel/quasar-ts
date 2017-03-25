import  Vue from "vue"
import  VueRouter from "vue-router"
import HomeComponent from "./components/Index.vue";
import ErrorComponent from "./components/Error404.vue";

Vue.use(VueRouter)

export const AppRouter = new VueRouter({
  routes: [
    { path: '/', component: HomeComponent }, // Default
    { path: '*', component: ErrorComponent } // Not found
  ]
})

export default AppRouter;