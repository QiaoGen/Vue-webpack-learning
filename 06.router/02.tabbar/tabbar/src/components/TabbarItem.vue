<template>
    <div class="tabbar-item" @click="itemClick">
        <slot name="item-icon"></slot>
        <div :style="activeStyle"><slot name="item-text"></slot></div>
    </div>
</template>

<script>
export default {
    name: 'TabbarItem',
    props: {
      path: String ,
      activeColor: {
          type: String,
          default: 'red'
      }
    },
    data() {
        return {
            // isActive: true
        }
    },
    computed: {
        isActive() {
            return this.$route.path.indexOf(this.path) !== -1
        },
        activeStyle() {
            return this.isActive ? {color: this.activeColor}:{}
        }
    },
    methods: {
        itemClick() {
            this.$router.replace(this.path);
        }
    },
}
</script>

<style scoped>
.tabbar-item {
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14px;
}
.tabbar-item img{
    width: 25px;
    height: 25px;
    margin-top: 5px;
    vertical-align: middle;
}

</style>