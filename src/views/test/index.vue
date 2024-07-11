<template>
    <div>
        <!-- v-bind -->
        <el-card class="box-card" header="v-bind">
           <div v-bind:class="divColor?'red':'blue'" style="height: 20px;">测试</div>
           <el-button type="primary" @click="divColor = !divColor" size="small">修改class</el-button>
        </el-card>
        <!-- v-text -->
        <el-card class="box-card" header="v-text">
            <p v-text="msg"></p>
            <p>{{msg}}</p>
        </el-card>
        <!-- v-html -->
        <el-card class="box-card" header="v-html">
            <div v-html="msg"></div>
        </el-card>
        <!-- v-on -->
        <el-card class="box-card" header="v-on">
            <button v-on:click="$message('按钮被点击')">点击我</button>
            <br/>
            <div style="display: flex;">
                <span style="line-height: 80px;">
                    冒泡测试：
                </span>
                <span>
                    <div @click="$message('父元素click事件')" style="width: 80px;height: 80px;background-color: yellow;">
                        <div @click="$message('子元素click事件')" style="width: 40px;height: 40px;background-color: blue;">
                            <div @click="$message('孙元素click事件')" style="width: 20px;height: 20px;background-color: black;"></div>
                        </div>
                    </div>
                </span>
            </div>
            <br/>
            <span>组件默认行为：<a href="https://www.baidu.com" @click.prevent="">百度</a></span>
            <br/>
            <br/>
            <span>按钮事件监听：
               <!-- 只有在 `key` 是 `Enter` 时调用 `vm.submit()` -->
                <input v-on:keyup.enter="$message('输入框按下回车')">
            </span>
        </el-card>
        <!-- v-if -->
        <el-card class="box-card" header="v-if与v-show">
            <el-button type="primary" @click="divColor = !divColor" size="small">修改状态</el-button>
            <h1 v-if="divColor">vIf</h1>
            <h1 v-else>Oh no 😢</h1>
            <h1 v-show="divColor">vShow</h1>
        </el-card>
        <!-- v-for -->
        <el-card class="box-card" header="v-for">
            <ul id="v-for-object" class="demo">
                <li v-for="(value, key) in object" :key="key">
                    {{ value }}
                </li>
            </ul>
        </el-card>
        <!-- v-model -->
        <el-card class="box-card" header="v-model">
            <input v-model="message" placeholder="edit me">
            <!-- <input :value="message" @input="message = $event.target.value" placeholder="edit me"> -->
            <p>Message is:{{ message }}</p>
        </el-card>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                divColor:false,
                object: {
                    title: 'How to do lists in Vue',
                    author: 'Jane Doe',
                    publishedAt: '2016-04-10'
                },
                msg: '<p style="color:blue">Hello Vue.js!</p>',
                message: ''
            }
        },
    }
</script>

<style lang="scss" scoped>
    .red{
        color: red;
    }
    .blue{
        color: blue;
    }

    ::v-deep{
        .el-card__header{
            padding: 10px;
            font-weight: bold;
            border-left: 3px solid blue;
            background-color: darkgrey;
        }
    }
</style>