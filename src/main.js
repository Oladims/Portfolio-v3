import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueConfetti from "vue-confetti";

Vue.config.productionTip = false;
Vue.use(VueConfetti)

export const eventBus = new Vue({
  methods: {
    toggleNightMode(status) {
      this.$emit("status", status);
    }
  }
});

new Vue({
  router,
  store,
  eventBus,
  render: h => h(App)
}).$mount("#app");
