<template>
    <div>
        <input v-model="id"/>
        <button @click="pushRouter">切换路由</button>
        <br/>
        <button @click="query">query传参</button>
        <br/>
        <button @click="params">params传参</button>
    </div>
</template>

<script>
    export default {
        name:'dynamicRouter',
        data() {
            return {
                id: 12345
            }
        },
        methods: {
            pushRouter() {
                this.$router.push('/dynamicRouter2/' + this.id);
                // this.$router.push({ name: 'dynamicRouter2',params:{id:this.id} });
            },
            query(){
                this.$router.push({
                    path: '/dynamicRouter2/query',
                    query: {
                        id: 'query传递的参数',
                        name:'李四',
                    }
                }); 
            },
            params(){
                this.$router.push({
                    name: 'dynamicRouter2',
                    params: {
                        id: 'params传递的参数',
                        name:'张三',
                    }
                }); 
            },
        },
    }   
</script>

<style lang="scss" scoped>

</style>