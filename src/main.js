import Vue from "vue";
import App from "./App.vue";
import "@/assets/svg/svg.js";
import Loading from "@/pages/loading.js";
Vue.config.productionTip = false;
Vue.use(Loading);
new Vue({
    render: (h) => h(App),
}).$mount("#app");