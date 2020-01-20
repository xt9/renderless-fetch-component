<template>
  <div>
    <h2>Let's learn about Stock markets!</h2>

    <Request v-if="endpoint" :endpoint="endpoint" @finishedLoading="handleData" />
    <div v-if="finishedLoading">
      <Dumb :name="data.name" :symbol="data.symbol" :rank="data.rank" />
    </div>
    <p v-else>Loading info...</p>
  </div>
</template>

<script>
import Request from "@/components/request";
import Dumb from "@/components/Dumb";

export default {
  name: "Smart",
  components: {
    Request,
    Dumb
  },
  props: {
    endpoint: String
  },
  data: () => ({
    finishedLoading: false,
    data: {}
  }),
  methods: {
    handleData(data) {
      this.finishedLoading = true;
      this.data = data;
    }
  },
  mounted() {
    console.log("Endpoint value on SmartComponent mount: ", this.id);
  }
};
</script>
