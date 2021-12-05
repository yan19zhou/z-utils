import Loading from "./loading.vue";
import Vue from 'vue';
export default {
    install(Vue) {
        Vue.prototype.$loading = this.loading;
        Vue.component(Loading.name, Loading);
        this.vLoad = null;
        this.el = null;
    },
    loading(props) {
        if (this.vLoad) return;

        this.vLoad = new Vue({
            render: (h) => h(Loading, { props }),
        }).$mount();

        this.el = this.vLoad.$el;
        document.body.appendChild(this.el);
        this.vLoad.remove = () => {
            document.body.removeChild(this.el);
            this.vLoad.$destroy();
            this.vLoad = null;
        };
        return this.vLoad;
    },
};