<template>
  <div class="add-form">
    <div class="add-form-input">
      <input
        class="add-form-input__inner"
        type="text"
        v-model="text"
        placeholder="请输入"
      />
    </div>
    <button class="add-form__button" @click="$emit('add', text)">
      添加
    </button>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  name: "AddForm",
  setup() {
    const text = ref("");

    const resetTextValue = () => {
      text.value = "";
    };

    return {
      text,
      resetTextValue
    };
  }
};
</script>

<style lang="scss" scoped>
.add-form {
  text-align: left;

  &-input {
    position: relative;
    font-size: 14px;
    display: inline-block;
    margin-right: 10px;
    &__inner {
      -webkit-appearance: none;
      background-color: #fff;
      background-image: none;
      border-radius: 4px;
      border: 1px solid #dcdfe6;
      box-sizing: border-box;
      color: #606266;
      display: inline-block;
      font-size: inherit;
      height: 32px;
      line-height: 32px;
      outline: none;
      padding: 0 15px;
      transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
      width: 100%;
      &:hover {
        border-color: #c0c4cc;
      }
      &:focus {
        outline: none;
        border-color: #409eff;
      }
    }
  }

  &__button {
    display: inline-block;
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;
    background: #fff;
    border: 1px solid #dcdfe6;
    color: #606266;
    -webkit-appearance: none;
    text-align: center;
    box-sizing: border-box;
    outline: none;
    margin: 0;
    transition: 0.1s;
    font-weight: 500;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    font-size: 14px;
    border-radius: 4px;
    padding: 10px 20px;
    &:hover {
      color: #409eff;
      border-color: #c6e2ff;
      background-color: #ecf5ff;
    }
  }
}
</style>
