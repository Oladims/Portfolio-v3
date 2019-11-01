<template>
  <section class="section other-projects">
    <div class="animated slow section__title">{{sectionHeader}}</div>
    <div class="section__content animated slow">
      <div class="project"  v-for='(project, index) in other_projects' :key="index">
        <div class="project__name">
          <a
            rel="noreferrer noopener"
            :href="project.link"
            target="_blank"
            class="arrow-link"
          >{{project.name}}</a>
        </div>
        <p>{{project.description}}</p>
        <div class="project__used">
          <span class="project__used__item" v-for="(tag, index) in project.tags" :key="index">{{tag}}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      sectionHeader: "Other Projects",
      other_projects: [
        {
          name: "Bizkit",
          link: "www.bizkit.com.ng",
          description:"A platform that offers a complete business solution for every SME Manager...",
          tags: ["C#", "JavaScript", ".Net", "Vue js", "MsSQL"]
        },
        {
          name: "Questioner",
          link: "www.oladims-questioner.herokuapp.com",
          description:"An application that helps meetup organizers crowd-source question for a meetup.",
          tags: ["JavaScript", "Node", "Express", "PostgreSQL"]
        }
      ]
    };
  }
};
</script>

<style>
</style>