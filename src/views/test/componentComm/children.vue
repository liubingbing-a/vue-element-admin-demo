<template>
    <div class="child">
        <span>这是子组件</span>
        <br/>
        <br/>
        <span>props接收传递的数据：</span>
        <span>{{name}}</span>
        <br/>
        <br/>
        <span>$attrs接收传递的数据：</span>
        <span>{{$attrs.age}}</span>
        <br/>
        <br/>
        <span>父组件依赖注入传递的数据：</span>
        <span>{{foo}}</span>
    </div>
</template>
<script>
export default {
   props:{
        name:String,
    },
    inject:['foo'],
}
</script>
<style>
.child{
    background-color: burlywood;
}
</style>