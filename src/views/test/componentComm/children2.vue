<template>
    <div class="child">
        <span>这是子组件</span>
        <br/>
        <el-button @click="emitClick">通过emit传递数据给父组件</el-button>
        <br/>
        <el-button @click="callbackClick">通过callback传递数据给父组件</el-button>
        <br/>
        <el-button @click="parentHandeer">通过$parent传递数据给父组件</el-button>
    </div>
</template>
<script>
export default {
    props:{
        callback:Function
    },
    methods:{
        emitClick(){
            this.$emit('fatherClick','emit', new Date())
        },
        callbackClick(){
            this.callback('callback',new Date())
        },
        sayHello(message){
            this.$message('你好，我是子组件   ' + message + '了我')
        },
        parentHandeer(){
            this.$parent.$parent.handleChange('$parent','啦啦啦')
        }
    }
}
</script>

<style>
    .child{
        padding: 5px;
    }
</style>