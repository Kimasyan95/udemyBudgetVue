<template>
  <div class="total-value" v-bind:class="setClass">
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
  computed: {
    setClass() {
      return {
        'green': this.total > 1,
        'red': this.total < 1,
        'black': this.total === 0,
      }
    }
  },
};
</script>

<style scoped>
.total-value {
  font-size: 26px;
  text-transform: uppercase;
  padding: 20px;
  text-align: center;
}

.red {
  color: red;
}

.green {
  color: green;
}

.black {
  color: initial;
}
</style>
