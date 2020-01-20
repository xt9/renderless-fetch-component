<template>
  <div>
    <h2>{{ name }}</h2>
    <p>Current Rank: {{ rank }}</p>
    <p>Shortcode: {{ symbol }}</p>
  </div>
</template>

<script>
export default {
  name: "Dumb",
  props: {
    name: String,
    rank: String,
    symbol: String
  }
};
</script>
