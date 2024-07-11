<template>
    <div>
        <button @click="show =!show">组件显示控制</button>
        <children v-if="show"></children>
        keepAlive功能演示：<input type="text" >
        <div>生命周期图示</div>
        <div style="text-align: center;">
            <img src="@/assets/lifecycle2.png" height="1000px" alt="生命周期图示">
        </div>
    </div>
</template>

<script>
    export default {
        name: 'lifeCycle',
        components: {
            children: {
                created() {
                    console.log('子组件 created 加载数据')
                },
                mounted() {
                    console.log('子组件 mounted 操作DOM')
                },
                destroyed() {
                    console.log('子组件 destroyed 销毁组件')

                },
                render(h) {
                    return <div style="background-color: #f0f0f0;padding: 10px;margin-bottom: 10px;">生命周期演示组件</div>
                }
            }
        },
        data() {
            return {
                show: true
            }
        },
        created() {
            console.log('父组件 created')
        },
        activated() {
            // 在首次挂载、
            // 以及每次从缓存中被重新插入的时候调用
            console.log('keepAlice生命周期-activated')
        },
        deactivated() {
            // 在从 DOM 上移除、进入缓存
            // 以及组件卸载时调用
            console.log('keepAlice生命周期-deactivated')
        },
    }
</script>

<style lang="scss" scoped>

</style>