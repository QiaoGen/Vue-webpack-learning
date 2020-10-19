<template>
    <div>
        <ul>
            <li>关于1</li>
            <li>关于2</li>
            <li>关于3</li>
        </ul>    
        <h2>{{message}}</h2>
    </div>
</template>
<script>
export default {
    name: "AboutChild",
    data() {
        return {
            message: '你好'
        }
    },
    created() {
        console.log('关于子组件');
    },
    // mounted() {
    //     //挂载之后回调
    // },
    // updated() {
    //     //刷新之后回调
    // }
}
</script>
<style scoped>

</style>