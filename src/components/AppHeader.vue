<template>
  <header class="intro">
    <div class id="intro__info">
      <h1 class="intro__hello">
        Hello!
        <span class="emoji wave-hand animated slow"></span>
      </h1>
      <h2 class="intro__tagline">
        I'm
        <span class="name">Ibrahim Olufowora</span>, a design-minded
        front-end engineer focused on building responsive and accessible
        interfaces &amp; experiences on the web.
      </h2>
      <h3 class="intro__contact">
        <span>Get in touch</span>
        <span class="emoji pointer"></span>
        <span>
          <a
            rel="noreferrer noopener"
            href="mailto:olufoworaibrahim@gmail.com"
            target="_blank"
            class="highlight-link"
          >olufoworaibrahim@gmail.com</a>
          <!-- <a rel="noreferrer noopener"
            href="about.html"
            target=""
            class="highlight-link"
            >About</a
          >-->
        </span>
      </h3>
      <em id="tip">
        <span>(Click anywhere to interact)</span>
      </em>
    </div>
  </header>
</template>

<script>
export default {
  created() {
    this.$confetti.start({
      particles: [
        {
          type: "heart"
        }
        // {
        //   type: "circle"
        // }
      ],
      defaultColors: ["red", "pink", "#ba0000"],
      particlesPerFrame: 0.25
    });
  }
};
</script>

<style>
</style>