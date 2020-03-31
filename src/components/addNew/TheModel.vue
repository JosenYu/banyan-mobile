<template>
  <div class="the-model">
    <mt-field
      label="名称："
      placeholder="请输入。。。"
      v-model="form.name"
    ></mt-field>
    <mt-field
      label="模型/规格："
      placeholder="请输入。。。"
      v-model="form.model"
    ></mt-field>
    <mt-field
      label="品牌"
      placeholder="请输入。。。"
      v-model="form.brand"
    ></mt-field>
    <mt-button @click="click" type="primary" size="large">
      创 建
    </mt-button>
  </div>
</template>

<script>
import stock from "@/api/stock";
export default {
  data() {
    return {
      form: {
        name: "",
        model: "",
        brand: ""
      }
    };
  },
  methods: {
    click() {
      if (this.form.name && this.form.model &&   this.form.brand) return;
      stock.createModel(this.form).then(result => {
        result;
        this.$router.go(-1);
      });
    }
  }
};
</script>

<style lang="stylus" scoped></style>
