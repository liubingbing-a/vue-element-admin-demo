<template>
    <div>
        <renderDom ref="renderDom"></renderDom>
        <button @click="changeDom">修改节点</button>
        <button @click="removeEvent">移除事件监听</button>
    </div>
</template>

<script>
    export default {
        components: {
            renderDom: {
                data(){
                    return {
                        num:1,
                    }
                },
                methods: {
                    eventHandler() {
                        this.$emit('my-event', this.num)
                    }
                },
                render(h,dom) {
                    return <div style="padding:20px;" >
                        <input type="number" v-model={this.num}/>
                        <button onClick={this.eventHandler}>显示当前数值</button>
                    </div>
                }
            }
        },
        mounted() {
            this.$refs.renderDom.$on('my-event', this.clickHandler)
        },
        methods: {
            clickHandler(num) {
                this.$message('节点被点击了,数值为：' + num)
            },
            removeEvent(){
                this.$refs.renderDom.$off('my-event');
                this.$message('节点my-event事件监听已被移除')
            },
            changeDom() {
                let num = this.$refs.renderDom.num
                this.$refs.renderDom.num = num * 1 +  1
            }
        }

    }
</script>

<style lang="scss" scoped>

</style>