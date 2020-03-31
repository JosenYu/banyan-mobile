<template>
  <div class="the-update-model">
    <div class="form">
      <mt-field label="编号" v-model="itemModel._id" disabled></mt-field>
      <mt-field
        label="名称"
        placeholder="请输入。。。"
        v-model="itemModel.name"
      ></mt-field>
      <mt-field
        label="模型/规格"
        placeholder="请输入。。。"
        v-model="itemModel.model"
      ></mt-field>
      <mt-field
        label="品牌"
        placeholder="请输入。。。"
        v-model="itemModel.brand"
      ></mt-field>
      <mt-button type="primary" size="large" @click="update">
        修 改
      </mt-button>
      <br />
      <mt-button size="large" plain @click="close">取 消</mt-button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    itemModel: {
      type: Object,
      default: () => ({
        _id: "123",
        name: "111",
        model: "233",
        brand: "666"
      })
    }
  },
  data() {
    return {};
  },
  methods: {
    update() {
      this.$emit("handleUpdate", this.itemModel);
      this.$emit("close");
    },
    close() {
      this.$emit("close");
    }
  }
};
</script>

<style lang="stylus" scoped>
.the-update-model
  width 100vw
  height 100vh
  .form
    padding .1rem
</style>
