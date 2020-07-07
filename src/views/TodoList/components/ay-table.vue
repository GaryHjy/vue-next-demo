<script>
import { h, computed } from "vue";

export default {
  name: "AyTable",
  props: {
    columns: {
      type: Array,
      default: () => []
    },
    data: {
      type: Array,
      default: () => []
    },
    operationButtons: {
      type: Array,
      default: () => []
    }
  },
  setup(props) {
    const isOperation = computed(() => !!props.operationButtons.length);

    const columns = isOperation.value
      ? props.columns.concat({
          prop: "operation",
          label: "操作"
        })
      : props.columns;

    const renderOperation = (row, index) =>
      h(
        "td",
        renderContent(
          props.operationButtons.map(item =>
            h(
              "a",
              {
                class: "operation__button",
                onclick: () => {
                  item.onClick && item.onClick(row, index);
                }
              },
              item.text
            )
          )
        )
      );

    const renderContent = val =>
      h(
        "div",
        {
          class: "cell"
        },
        val
      );

    const renderHeader = () =>
      h(
        "thead",
        {
          class: "ay-table__header"
        },
        h(
          "tr",
          columns.map(column => h("th", renderContent(column.label)))
        )
      );

    const renderBody = () =>
      h(
        "tbody",
        {
          class: "ay-table__body"
        },
        props.data.map((item, index) =>
          h(
            "tr",
            {
              class: "ay-table__row"
            },
            props.columns
              .map(column => h("td", renderContent(item[column.prop])))
              .concat(renderOperation(item, index))
          )
        )
      );

    return () =>
      h(
        "table",
        {
          class: "ay-table"
        },
        [renderHeader(), renderBody()]
      );
  }
};
</script>

// TODO scoped有bug
<style lang="scss">
.ay-table {
  width: 100%;
  box-sizing: border-box;
  font-size: 14px;
  color: #606266;

  .cell {
    box-sizing: border-box;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: normal;
    word-break: break-all;
    line-height: 23px;
    padding-left: 10px;
    padding-right: 10px;
  }

  .operation__button {
    color: #409eff;
    margin-right: 10px;
    cursor: pointer;
    user-select: none;
    &:hover {
      opacity: 0.8;
    }
  }

  &__header {
    color: #909399;
    font-weight: 500;
    th {
      padding: 12px 0;
      min-width: 0;
      box-sizing: border-box;
      text-overflow: ellipsis;
      vertical-align: middle;
      position: relative;
      text-align: left;
      border-bottom: 1px solid #ebeef5;
    }
    .cell {
      display: inline-block;
      box-sizing: border-box;
      position: relative;
      vertical-align: middle;
      padding-left: 10px;
      padding-right: 10px;
      width: 100%;
    }
  }

  &__body {
    tr {
      &:hover {
        td {
          background-color: #f5f7fa;
        }
      }
    }
    td {
      padding: 12px 0;
      min-width: 0;
      box-sizing: border-box;
      text-overflow: ellipsis;
      vertical-align: middle;
      position: relative;
      text-align: left;
      border-bottom: 1px solid #ebeef5;
      transition: background-color 0.25s ease;
    }
  }
}
</style>
