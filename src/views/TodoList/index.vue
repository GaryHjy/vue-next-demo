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

const STATUS = {
  0: "未完成",
  1: "已完成"
};

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
      },
      {
        prop: "status",
        label: "状态",
        formatter: row => STATUS[row.status]
      }
    ]);
    const data = ref([]);
    const operationButtons = ref([
      {
        text: "完成",
        onClick: (_, index) => {
          data.value[index].status = 1;
        }
      },
      {
        text: "删除",
        style: {
          color: "red"
        },
        onClick: (_, index) => {
          data.value.splice(index, 1);
        }
      }
    ]);

    const handleAdd = value => {
      if (!value) return;
      data.value.unshift({ content: value, status: 0 });
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
