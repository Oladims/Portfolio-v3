<template>
  <main>
    <div class="site">
      <!-- <app-header /> -->
      <div class="switch-wrapper">
        <div class="sun"></div>
        <div class="toggle-wrapper">
          <input @click="toggleCheck" id="switch" type="checkbox" />
          <label for="switch" id="toggle">Toggle</label>
        </div>
        <div class="moon"></div>
      </div>
      <app-header />
      <app-section-background />
      <app-section-skills />
      <app-section-experience />
      <app-section-featured />
      <app-section-Other-projects />
      <!-- <app-masthead /> -->
    </div>
  </main>
</template>

<script>
import AppHeader from "@/components/AppHeader.vue";
import AppSectionBackground from "@/components/AppSectionBackground.vue";
import AppSectionSkills from "@/components/AppSectionSkills.vue";
import AppSectionExperience from "@/components/AppSectionExperience.vue";
import AppSectionFeatured from "@/components/AppSectionFeatured.vue";
import AppSectionOtherProjects from "@/components/AppSectionOtherProjects.vue";
// import Bound from "bounds.js";
import { eventBus } from "../main.js";

export default {
  components: {
    AppHeader,
    AppSectionBackground,
    AppSectionSkills,
    AppSectionExperience,
    AppSectionFeatured,
    AppSectionOtherProjects
  },

  data() {
    return {
      toggle: "",
      // boundary: Bound(),
      isChecked: false
    };
  },

  methods: {
    toggleCheck() {
      this.isChecked ? (this.isChecked = false) : (this.isChecked = true);
      eventBus.toggleNightMode(this.isChecked);
    }

    // handleIntersectImg: function (entries, observer) {
    // entries.forEach(entry => {
    //   if (entry.isIntersecting) {
    //     entry.target.src = entry.target.dataset.src;
    //     // console.log(entry.target);
    //     observer.unobserve(entry.target);
    //   }
    // });
    // },

    // forImage: function () {
    //   images.forEach(image => {
    //   observeImg.observe(image);
    //   });
  },


};
</script>

<style lang="css">
</style>