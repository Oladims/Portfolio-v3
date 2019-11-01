<template>
  <div id="app">
    <div id="content" :class="checked ? 'night' : ''">
      <router-view />
      <app-footer />
    </div>
  </div>
</template>

<script>
import AppNav from "@/components/AppNav.vue";
import AppFooter from "@/components/AppFooter.vue";
import { eventBus } from "./main.js"

export default {
  components: { AppNav, AppFooter },

  data: () => ({
    checked: false
  }),

  created(){
    eventBus.$on('status', (status) => {
        this.checked = status;
    })
  }
};
</script>

<style src="../public/main.css">
</style>