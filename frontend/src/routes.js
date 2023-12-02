import Home from "./components/pages/Home.vue";
import Search from "./components/pages/Search.vue";
import {createRouter, createWebHashHistory} from "vue-router";
import Download from "./components/pages/Download.vue";

export default new createRouter({
    history: createWebHashHistory(),
    routes: [
        { path: "/", component: Home },
        { path: "/search", component: Search },
        { path: "/search/:query", component: Search },
        { path: "/packages", component: Search },
        { path: "/download", component: Download },
        { path: "/settings", component: Search },
    ],
    linkActiveClass: "router-link-active",
    linkExactActiveClass: "router-link-exact-active",
    scrollBehavior() {
        return { top: 0 }
    }
})