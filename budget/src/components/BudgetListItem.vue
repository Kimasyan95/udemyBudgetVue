<template>
  <ElCard v-bind:header="header">
    <template v-if="!isEmpty">
      <div class="list-item" v-for="(item, prop) in list" v-bind:key="prop">
        <span class="budget-comment"> {{ item.comment }}</span>
        <span class="budget-value"> {{ item.value }} </span>
        <ElButton type="danger" size="mini" v-on:click="deleteListItem(item.id)">Delete</ElButton>
      </div>
    </template>
    <ElAlert v-else type="info" v-bind:title="emptyTitle" v-bind:closable="false" />
  </ElCard>
</template>

<script>
export default {
  name: 'BudgetListItem',
  data: () => ({
    header: "Budget List",
    emptyTitle: "Empty List",
  }),
  props: {
    list: {
      type: Object,
      default: () => ({}),
    }
  },
  computed: {
    isEmpty() {
      return !Object.keys(this.list).length;
    }
  },
  methods: {
    deleteListItem(id) {
      let result = confirm('Вы действительно хотите удалить?');
      if (result) {
        this.$emit('deleteItemFromList', id)
      }
    },
  }
};
</script>

<style scoped>
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
