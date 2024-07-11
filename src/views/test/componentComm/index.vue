<template>
    <div>
        <el-card class="box-card" header="父 -> 子">
            <span>prop、$attrs和依赖注入</span>
            <children name="刘德华" :age="age" sex="男"></children>
        </el-card>
        <el-card class="box-card" header="子 -> 父">
            <div>v-on、$emit、$parent和callback</div>
            <children2 ref="child2" @fatherClick="handleChange" :callback="handleChange"></children2>
            <div>$children 和 $refs</div>
            <el-button @click="callChild2">父组件通过$children 和 $refs传递数据</el-button>
        </el-card>
        <el-card class="box-card" header="兄弟之间">
            <div>Vuex</div>
            <children3></children3>
            <br/>
            <children4></children4>
        </el-card>
    </div>
</template>

<script>
    import children from './children.vue'
    import children2 from './children2.vue'
    import children3 from './children3.vue'
    import children4 from './children4.vue'

    export default {
        components: {
            children,
            children2,
            children3,
            children4
        },
        provide:{
            foo: 'bar',
        },
        data(){
            return {
                age:18,
                name: '我是父组件'
            }
        },
        methods:{
            handleChange(type, date){
                this.$message("子组件通过"+ type +"传递数据：" + date)
            },
            callChild2(){
                const _this = this;
                this.$refs.child2.sayHello('ref调用');
                setTimeout(() => {
                    _this.$children[1].$children[0].sayHello('$children调用')
                }, 500);
            }
        }
        
    }
</script>

<style lang="scss" scoped>
    ::v-deep{
        .el-card__header{
            padding: 10px;
            font-weight: bold;
            border-left: 3px solid blue;
            background-color: darkgrey;
        }
    }
</style>