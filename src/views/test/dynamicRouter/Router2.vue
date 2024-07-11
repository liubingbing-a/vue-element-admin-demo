<template>
    <div>
        <div>动态路由参数</div>
        <div>{{this.id}}</div>
    </div>
</template>

<script>
    export default {
        name: 'dynamicRouter2',
        data() {
            const id = this.$route.params.id
            return {
                id: id
            }
        },
        beforeRouteEnter(to, from, next) {
            if(to.params.id === '1'){
                return false;
            }
            // 在渲染该组件的对应路由被验证前调用
            // 不能获取组件实例 `this` ！
            // 因为当守卫执行时，组件实例还没被创建！
            next()
        },
        beforeRouteUpdate(to, from, next) {
            // 在当前路由改变，但是该组件被复用时调用
            // 举例来说，对于一个带有动态参数的路径 `/users/:id`，在 `/users/1` 和 `/users/2` 之间跳转的时候，
            // 由于会渲染同样的 `UserDetails` 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
            // 因为在这种情况发生的时候，组件已经挂载好了，导航守卫可以访问组件实例 `this`
            next()
            this.$message('路由参数：' + this.$route.params.id)
           
        },
        beforeRouteLeave(to, from, next) {
            // 在导航离开渲染该组件的对应路由时调用
            // 与 `beforeRouteUpdate` 一样，它可以访问组件实例 `this`
            next()
        },
        
    }
</script>

<style lang="scss" scoped>

</style>