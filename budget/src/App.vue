<template>
  <div id="app">  
    <TotalBalance v-bind:totalList="list"/>
    <BudgetList v-bind:list="list" v-on:deleteFromList="deleteProp"/>
  </div>
</template>

<script>
import BudgetList from './components/BudgetList.vue'
import TotalBalance from './components/TotalBalance.vue'

export default {
  name: 'App',
  components: {
    BudgetList,
    TotalBalance
  },
  data: () => ({
    list: { //список расходов и доходов
      1: {
        type: 'INCOME',
        value: 100,
        comment: 'Some comment',
        id: 1,
      },
      2: {
        type: 'OUTCOME',
        value: -50,
        comment: 'Some outcomment comment',
        id: 2,
      },
    }
  }),
  methods: {
    deleteProp(id) {
      this.$delete(this.list, id)
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
