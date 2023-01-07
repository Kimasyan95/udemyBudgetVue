<template>
  <div class="total-value">
    <h2>BALANCE: {{ countTotal }}</h2>
  </div>
</template>

<script>
export default {
  name: "TotalBalance",
  data: () => ({
  }),
  props: {
    totalList: {
      type: Object,
      default: () => ({}),
    },
  },
  computed: {
    countTotal() {
      let total = 0;

      for (let key in this.totalList) {
        total += this.totalList[key].value
      }

      return total;
    }
  }
};
</script>

<style scoped>
</style>
