<template>
  <div class="todo-list">
    <button>添加</button>
    <ay-table
      :columns="columns"
      :data="data"
      :operationButtons="operationButtons"
    />
  </div>
</template>

<script>
import { ref } from "vue";
import AyTable from "./components/ay-table";

export default {
  components: {
    AyTable
  },
  setup() {
    const columns = ref([
      {
        prop: "content",
        label: "内容"
      }
    ]);
    const data = ref([
      {
        content: "hhhhhhhhhhhh"
      }
    ]);
    const operationButtons = ref([
      {
        text: "完成",
        onClick: row => {
          console.log(row.content);
        }
      },
      {
        text: "删除",
        style: {
          color: "red"
        },
        onClick: row => {
          console.log(row.content);
        }
      }
    ]);

    return {
      columns,
      data,
      operationButtons
    };
  }
};
</script>

<style lang="scss" scoped>
.todo-list {
  width: 800px;
  margin: 0 auto;
}
</style>
