<template>
  <section class="quotes">
      <appQuote v-for="(quote, index) in quotes" :key="index" >{{quote}}</appQuote>
  </section>
</template>

<script>
import Quote from './Quote';

export default {
    props: ['quotes'],
    components: {
        appQuote : Quote
    }
};
</script>

<style scoped>
.quotes {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: #bada55;
}
/* .quote {
  padding: 20px;
  margin: 10px 5px;
  background-color: #f331f1;
  width: 20%;
} */
</style>