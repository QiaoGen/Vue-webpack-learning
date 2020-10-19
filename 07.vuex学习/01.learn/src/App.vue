<template>
  <div id="app">
    <h2>{{$store.state.counter}}</h2>
    <h3>{{$store.getters.cacuCounter}}</h3>
    <button @click="add">+</button>
    <button @click="sub">-</button>
    <h2>{{$store.getters.getOld}}</h2>
    <h2>{{$store.getters.getByAge(13)}}</h2>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    //普通提交风格
    add() {
      this.$store.commit('increment');
    },
    sub() {
      this.$store.commit('decrement');
    }
  },
}
</script>

<style>

</style>
