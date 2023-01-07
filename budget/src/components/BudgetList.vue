<template>
  <div class="buget-list-wrap">
    <BudgetListItem v-bind:list="list" v-on:deleteItemFromList="deleteItem" />
  </div>
</template>

<script>
import BudgetListItem from './BudgetListItem.vue'

export default {
  name: "BudgetList",
  components: {
    BudgetListItem
  },  
  props: {
    list: {
      type: Object,
      default: () => ({}),
    },
  },
  methods: {
    deleteItem(id) {
      this.$emit('deleteFromList', id)
    },
  }
};
</script>

<style scoped>
.buget-list-wrap {
  max-width: 500px;
  margin: auto;
}

</style>
