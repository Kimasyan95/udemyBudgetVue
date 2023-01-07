<template>
  <div class="total-value">
    Balance: {{ total }}
  </div>
</template>

<script>
export default {
  name: "TotalBalance",
  data: () => ({
  }),
  props: {
    total: {
      type: Number,
      default: 0,
    },
  },
};

fetch('el.json').then(data => console.log(data))
</script>

<style scoped>
.total-value {
  font-size: 26px;
  text-transform: uppercase;
  padding: 20px;
  text-align: center;
}
</style>
