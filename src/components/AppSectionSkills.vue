<template>
    <section class="section skills">
        <div class=" animated slow section__title">Skills</div>
        <div class="section__content animated slow ">
          <p>{{message}}</p>
          <div class="skillz">
            <div class="skillz__category">
              <div class="skillz__category__label">Languages</div>
              <ul>
                <li class="skillz__category__item" v-for="(language, index) in Languages" :key="index">{{language}}</li>
              </ul>
            </div>
            <div class="skillz__category">
              <div class="skillz__category__label">Frameworks</div>
              <ul>
                <li class="skillz__category__item" v-for="(framework, index) in Frameworks" :key="index">{{framework}}</li>
              </ul>
            </div>
            <div class="skillz__category">
              <div class="skillz__category__label">database</div>
              <ul>
                <li class="skillz__category__item" v-for="(db, index) in Database" :key="index">{{db}}</li>
              </ul>
            </div>
            <div class="skillz__category">
              <div class="skillz__category__label">Tools</div>
              <ul>
                <li class="skillz__category__item" v-for="(tool, index) in Tools" :key="index">{{tool}}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
</template>

<script>
export default {
  data() {
    return {
      message: 'I am proficient in quite some skills and on my way to becoming a professional. Here are a few of the technologies I have experience with:',
      Languages:['HTML', 'CSS/Sass' , 'JavaScript(ES6)', 'C#', 'SQL' ],
      Frameworks:['Vue', 'Node Js' , '.NET' ],
      Database:['MongoDB', 'PostgreSql', 'MSSQL' ],
      Tools:['Bash', 'Git&Github' , 'AzureDevOps', 'Netlify', 'Lighthouse' ]
    }
  },
}
</script>

<style>

</style>