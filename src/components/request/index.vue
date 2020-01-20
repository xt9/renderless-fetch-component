<template>
  <span />
</template>

<script>
import { requestService } from "@/helpers/axios";

export default {
  name: "Request",
  props: {
    endpoint: String
  },
  async mounted() {
    try {
      let { data } = await requestService.get(this.endpoint);
      this.$emit("finishedLoading", data);
    } catch (error) {
      console.table(error);
    }
  }
};
</script>
