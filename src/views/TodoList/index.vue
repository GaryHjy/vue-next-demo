<template>
  <div class="todo-list">
    <add-form @add="handleAdd" ref="addForm" />
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
import AddForm from "./components/add-form";

export default {
  components: {
    AyTable,
    AddForm
  },
  setup() {
    const addForm = ref(null);
    const columns = ref([
      {
        prop: "content",
        label: "内容"
      }
    ]);
    const data = ref([]);
    const operationButtons = ref([
      {
        text: "完成",
        onClick: (row, index) => {
          console.log(index);
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

    const handleAdd = value => {
      data.value.unshift({ content: value });
      addForm.value.resetTextValue();
    };

    return {
      columns,
      data,
      operationButtons,
      addForm,
      handleAdd
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
