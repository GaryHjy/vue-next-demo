<template>
  <div class="counter">
    <p>count: {{ count }}</p>
    <p>doubleCount: {{ doubleCount }}</p>
    <p>storeCount: {{ storeCount }}</p>
    <button @click="add">添加</button>
    <button @click="changeStoreCount">修改store count</button>
  </div>
</template>

<script>
import { ref, computed, watch, getCurrentInstance } from "vue";

export default {
  setup() {
    const count = ref(0); // ref() 函数用来根据给定的值创建一个响应式的数据对象，ref() 函数调用的返回值是一个对象，这个对象上只包含一个 .value 属性
    const { ctx } = getCurrentInstance(); // 获取当前组件的实例
    // computed接收一个回调函数，当我们访问计算属性返回结果时，会自动获取回调函数的值
    const doubleCount = computed(() => count.value * 2);
    const storeCount = computed(() => ctx.$store.state.storeCount);
    // watch是一个函数，接受收两个参数（函数），第一个函数返回要监听的变量，第二个函数触发监听
    watch(
      () => count.value,
      (val, oldVal) => {
        console.log("watch count", val, oldVal);
      }
    );
    watch(
      () => storeCount.value,
      val => {
        console.log("watch storeCount", val);
      }
    );
    const add = () => {
      count.value++;
    };
    const changeStoreCount = () => {
      const randomCount = Math.round(Math.random() * 10);
      ctx.$store.commit("changeStoreCount", randomCount);
    };
    return {
      count,
      doubleCount,
      storeCount,
      add,
      changeStoreCount
    };
  }
};
</script>
