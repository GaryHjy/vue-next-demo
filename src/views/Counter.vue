<template>
  <div>
    count:
    {{ count }}
    doubleCount:
    {{ doubleCount }}
    <button @click="add">添加</button>
  </div>
</template>

<script>
import { ref, computed, watch } from "vue";

export default {
  setup() {
    const count = ref(0);
    const add = () => {
      count.value++;
    };
    const doubleCount = computed(() => count.value * 2);
    watch(
      () => count.value,
      val => {
        console.log("watch", val);
      }
    );
    return {
      count,
      doubleCount,
      add
    };
  }
};
</script>
