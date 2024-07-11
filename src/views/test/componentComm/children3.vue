<template>
    <div class="child">
        <div>这是子组件1</div>
        <div>公共参数：{{num}}</div>
        <el-button type="primary" @click="clickHandler">修改公共参数</el-button>
    </div>
</template>
<script>
export default {
    props:{
        callback:Function
    },
    computed: {
        num() {
            return this.$store.state.test.num;
        }
    },
    methods:{
        clickHandler(){
            let newNum = this.num + 1
            this.$store.dispatch('test/changeNum', newNum);
        }
    }
}
</script>

<style>
    .child{
        padding: 5px;
    }
</style>