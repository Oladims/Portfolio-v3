<template>
   <section class="section experience">
        <div class=" animated slow section__title">Experience</div>
        <div class="section__content animated slow ">
          <div class="jobs">
            <div class="job" v-for="(job, index) in jobs" :key="job.time">
              <div class="time-place">
                <div class="job__company onTop">
                  <a rel="noreferrer noopener" :href="job.link" target="_blank"
                  >{{job.company}}</a
                  >
                </div>
                <div class="job__time">{{job.time}}</div>
              </div>
              <div class="job__position">{{job.role}}</div>
            </div>
          </div>
          <a rel="noreferrer noopener"
          href="https://oladims.github.io/portfolio/resume.pdf"
            target="_blank"
            class="arrow-link onTop"
            >View My Resume</a
            >
        </div>
      </section>
</template>

<script>
export default {
  data() {
    return {
      jobs:[{
        company: 'Sidmach',
        role: 'Front-End Engineer',
        time: 'Febuary 2019 - Present',
        link: 'www.sidmach.com.ng'
      },{
        company: 'Andela(Bootcamp)',
        role: 'Software Engineer',
        time: 'December- January 2019',
        link: 'www.andela.com '
      },{
        company: 'Sidmach',
        role: 'Software Engineer',
        time: 'June - October 2018',
        link: 'www.sidmach.com.ng'
      },{
        company: 'Microsoft AppFactory',
        role: 'Software Developer Intern',
        time: 'January - June 2018',
        link: 'www.sidmach.com.ng'
      }]
    }
  },
}
</script>

<style>

</style>