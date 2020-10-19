<template>
  <div id="app">
    <router-link to='/first' tag="button" replace active-class="active">首页</router-link>
    <router-link to='/about' tag="button" replace active-class="active">关于</router-link>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.active{
  color: red;
}
</style>
