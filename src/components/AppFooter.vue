<template>
  <footer class="footer">
    <div class="footer__copyright">
      <div class="top">
        <span>Developed by Ibrahim</span>
      </div>
      <div class="bottom">
        <span>
          Inspired by
          <a
            rel="noreferrer noopener"
            href="https://brittanychiang.com/"
            target="_blank"
            class="onTop underline-link"
          >Brittany</a> &amp
          <a
            rel="noreferrer noopener"
            href="https://github.com/aspittel/aspittel.github.io/"
            target="_blank"
            class="onTop underline-link"
          >Ali</a>
        </span>
        <!-- <img class="emoji" src="/img/emojis/rockon.png" alt="emoji"> -->
        <!-- <span>2018</span> -->
      </div>
    </div>
    <div class="footer__links">
      <a
        rel="noreferrer noopener"
        href="mailto:olufoworaibrahim@gmail.com"
        target="_blank"
        title="email"
      >
        <span class="text">email</span>
        <img src="/img/social/email.svg" alt="email" />
      </a>
      <a
        rel="noreferrer noopener"
        href="https://twitter.com/holla_dimeji"
        target="_blank"
        title="twitter"
      >
        <span class="text">twitter</span>
        <img src="/img/social/twitter.svg" alt="twitter" />
      </a>
      <a
        rel="noreferrer noopener"
        href="https://instagram.com/holla_dimeji"
        target="_blank"
        title="instagram"
      >
        <span class="text">instagram</span>
        <img src="/img/social/instagram.svg" alt="instagram" />
      </a>
      <a
        rel="noreferrer noopener"
        href="https://codepen.io/holla_dimeji"
        target="_blank"
        title="codepen"
      >
        <span class="text">codepen</span>
        <img src="/img/social/codepen.svg" alt="codepen" />
      </a>

      <a rel="noreferrer noopener" href="https://github.com/oladims" target="_blank" title="github">
        <span class="text">github</span>
        <img src="/img/social/github.svg" alt="github" />
      </a>
      <a
        rel="noreferrer noopener"
        href="https://www.linkedin.com/in/olufowora-ibrahim"
        target="_blank"
        title="linkedin"
      >
        <span class="text">linkedin</span>
        <img src="/img/social/linkedin.svg" alt="linkedin" />
      </a>
    </div>
  </footer>
</template>

<script>
import IconTwitter from "./icons/IconTwitter.vue";
import IconGithub from "./icons/IconGithub.vue";
import IconCodepen from "./icons/IconCodepen.vue";

export default {
  components: {
    IconTwitter,
    IconGithub,
    IconCodepen
  },
  data() {
    return {
      codepen: null,
      github: null,
      twitter: null
    };
  }
};
</script>

<style lang="scss" scoped>
// footer {
//   width: 100vw;
//   padding: 50px 8vw 30px;
//   div {
//     margin-bottom: 30px;
//   }
//   hr {
//     opacity: 0.1;
//     margin-bottom: 30px;
//   }
//   p {
//     opacity: 0.7;
//     margin-bottom: 30px;
//   }
// }
</style>