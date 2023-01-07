<template>
  <div class="buget-list-wrap">
    <ElCard v-bind:header="header">
      <template v-if="!isEmpty">
        <div class="list-item" v-for="(item, prop) in list" v-bind:key="prop">
          <span class="budget-comment"> {{ item.comment }}</span>
          <span class="budget-value"> {{ item.value }} </span>
          <ElButton type="danger" size="mini" v-on:click="deleteValue(item.id)">Delete</ElButton>
        </div>
      </template>
      <ElAlert v-else type="info" v-bind:title="emptyTitle" v-bind:closable="false"></ElAlert>
    </ElCard>
  </div>
</template>

<script>
export default {
  name: "BudgetList",
  props: {
    list: {
      type: Object,
      default: () => ({}),
    },
  },
  data: () => ({
    header: "Budget List",
    emptyTitle: "Empty List",
  }),
  computed: {
    isEmpty() {
      return !Object.keys(this.list).length;
    }
  },
  methods: {
    deleteValue(id) {
      this.$emit('deleteFromList', id)
    }
  }
};
</script>

<style scoped>
.buget-list-wrap {
  max-width: 500px;
  margin: auto;
}

.list-item {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 15px;
}

.budget-value {
  font-weight: bold;
  margin-left: auto;
  margin-right: 20px;
}
</style>
