<template>
    <div>
        <h2>我是首页</h2>
        <router-link to='/first/homeChild'>首页按钮</router-link>
        <router-link to='/first/aboutChild'>关于按钮</router-link>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    created() {
        document.title = '首页'
    }
}
</script>

<style scoped>

</style>