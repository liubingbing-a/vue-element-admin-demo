<template>
    <div>
        <span>{{msg}}</span>
        <div>
            <span>name：{{name}}</span>
        </div>
    </div>
</template>
<script>
    const mixin = {
        data(){
            return {
                msg:'我是混入的data',
                name: 'mixin1'
            }
        },
        created() {
            console.log('混入的created')
        }
    }

    export default {
        mixins: [mixin],
        data(){
            return {
                name: 'mixin2'
            }
        },
        created() {
            console.log('组件本身的created')
        }
    }
</script>

<style lang="scss" scoped>

</style>