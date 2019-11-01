<template>
   <section class="section featured-projects">
        <div class=" animated slow section__title">{{sectionHeader}}</div>
        <div class="section__content animated slow ">
          <div class="project blistabloc" v-for="(project, index) in featured_projects" :key="index">
            <figure class="project__pic">
              <a rel="noreferrer noopener" :href="project.link" target="_blank">
                <img class="images"
                :src='"./img/featured/" + project.img_src'
                alt="Engage Website Image"
                :data-src="project.img_src" />
              </a>
            <figcaption class="project__caption">
              <div class="project__name">
                <a rel="noreferrer noopener" :href="project.link" target="_blank">{{project.name}}</a>
              </div>
              <p>
                  {{project.description}}
              </p>
            </figcaption>
            </figure>
          </div>
         
        </div>
      </section>
</template>

<script>
export default {
  data() {
    return {
      sectionHeader: "Featured Projects",
      featured_projects: [
        {
          name: "NYSC Engage",
          link: "www.marketplace.nyscengage.com.ng",
          description:" A platform that connects corp members to buy and sell goods from one another.",
          img_src:'engage/engage.png',
        },
        {
          name: "Bizkit",
          link: "www.bizkit.com.ng",
          description:"A platform that offers a complete business solution for every SME Manager...",
          img_src:'bizkit/bizkit.png'
        },
        {
          name: "Questioner",
          link: "www.oladims-questioner.herokuapp.com",
          description:"An application that helps meetup organizers crowd-source question for a meetup.",
          img_src:'questioner/questioner.png'
        }
      ]
    }
  },
}
</script>

<style>

</style>