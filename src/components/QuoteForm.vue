<template>
  <section class="inputArea">
    <form action="">
        <div class="textarea">
          <textarea v-model="newQuote" name placeholder="Enter  Quote here" id cols="5" rows="10"></textarea>
        </div>
        <button type="submit" @click.prevent="updateQuote">Add Quote</button>
    </form>
  </section>
</template>

<script>
export default {
    data() {
        return {
            newQuote: ''
        }
    },
  methods: {
    updateQuote() {
        this.$emit('quoteUpdated', this.newQuote);
        this.newQuote = '';
    }
  }
};
</script>

<style scoped>
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
</style>