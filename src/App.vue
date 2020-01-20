<template>
  <div id="app">
    <Smart :endpoint="endpoint" />
  </div>
</template>

<script>
import Smart from "./components/Smart.vue";

export default {
  name: "App",
  components: {
    Smart
  },
  data: () => ({
    endpoint: null
  }),
  mounted() {
    setTimeout(() => (this.endpoint = "/coins/btc-bitcoin"), 1500);
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
