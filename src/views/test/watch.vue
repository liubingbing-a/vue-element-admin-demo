<template>
    <div>
      <button @click="addItem">Add Item</button>
      <div>数组长度：{{ listSize }}</div>
      <ul>
        <li v-for="item in items" :key="item.id" v-text="item.name + ':' + (item.age? item.age : '')"></li>
      </ul>
      
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        items: [
          { id: 1, name: 'Item 1' },
          { id: 2, name: 'Item 2' }
        ]
      };
    },
    computed: {
      listSize() {
        return this.items.length;
      }
    },
    watch: {
      items: {
        handler(newVal) {
          this.$message('数组发生了变化，长度为:' + newVal.length);
        },
        deep: true
      }
    },
    methods: {
      addItem() {
        this.items.push({ id: this.items.length + 1, name: `Item ${this.items.length + 1}` });
        //对象元素添加属性
        // this.items[0].age = 24;
        // this.$set(this.items[0], 'age', 24);

        //数组元素替换
        // this.items[0] = { id: 1, name: 'Item update' };
        // this.$set(this.items, 0, { id: 1, name: 'Item update' },);
      }
    }
  };
  </script>
  