<template>
  <div id="app">
    <router-view></router-view> 

    <tab-bar>
      <tabbar-item path="/home" activeColor="blue">
        <img slot="item-icon" src="./assets/img/tabbar/围巾.png" alt="">
        <div slot="item-text">首页</div>
      </tabbar-item>
      <tabbar-item path="/category">
        <img slot="item-icon" src="./assets/img/tabbar/太阳帽.png" alt="">
        <div slot="item-text">分类</div>
      </tabbar-item>
      <tabbar-item path="cart">
        <img slot="item-icon" src="./assets/img/tabbar/袜子.png" alt="">
        <div slot="item-text">购物车</div>
      </tabbar-item>
      <tabbar-item path="profile">
        <img slot="item-icon" src="./assets/img/tabbar/针织帽.png" alt="">
        <div slot="item-text">个人</div>
      </tabbar-item>
    </tab-bar>
  </div>
</template>

<script>
  import TabBar from './components/Tabbar' 
  import TabbarItem from './components/TabbarItem'

  export default {
    name: 'App',
    components: {
      TabBar,
      TabbarItem
    }
  }
</script>

<style>
@import "./assets/css/Base.css";



</style>
