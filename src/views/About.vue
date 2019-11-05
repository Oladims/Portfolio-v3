<template>
  <main>
    <h1>This is a Quote page</h1>
    <div class="parentBar">
      <div
        class="childBar"
        :style="{width: (quotes.length / maxNoOfQuotes) * 100 +'%'}"
      >{{quotes.length + '/' + maxNoOfQuotes}}</div>
    </div>

    <app-quote-form @quoteUpdated="updateQuote"></app-quote-form>
    <p class="errorMessage">{{message}}</p>
    <app-quotes :quotes="quotes"></app-quotes>
  </main>
</template>

<script>
import Quotes from "../components/Quotes";
import QuoteForm from "../components/QuoteForm";
export default {
  components: {
    appQuotes: Quotes,
    appQuoteForm: QuoteForm
  },
  data() {
    return {
      quotes: ["Testing", "Good", "Confidence"],
      // newQuote: "",
      maxNoOfQuotes: 10,
      message: ""
    };
  },
  methods: {
    updateQuote(newQuote) {
      if (this.quotes.length < this.maxNoOfQuotes) {
        this.quotes.push(newQuote);
      } else {
        this.message = "Max number of quote reached";
      }
    }
  }
};
</script>

<style lang="css" scoped>
main {
  width: 90%;
  /* max-width: 800px; */
  margin: 40px auto;
}

p {
  text-align: left;
}
.parentBar {
  position: relative;
  width: 100%;
  height: 40px;
  background-color: #d3d3d3;
  border-radius: 5px;
  border: #4f2f2f;
}
.childBar {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  color: white;
  background-color: #50b0d0;
  border-radius: 5px;
  /* vertical-align: middle; */
  text-align: center;
}
.inputArea {
  width: 100%;
  /* margin: auto; */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

textarea {
  width: 300px;
  margin: 30px auto;
}
.inputArea button {
  border-radius: 5px;
  padding: 10px;
  margin: 10px auto;
  background-color: green;
  border: none;
}
.errorMessage {
  background-color: #d3d727;
  color: red;
}
/* .quotes {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: #bada55;
}
.quote {
  padding: 20px;
  margin: 10px 5px;
  background-color: #f331f1;
  width: 20%;
} */
</style>
