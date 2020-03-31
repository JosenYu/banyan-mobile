<template>
  <!-- 新增 -->
  <div class="add-new">
    <mt-header :title="$route.name">
      <router-link to="/application" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
    </mt-header>
    <router-view class="add-new__view"></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: ""
    };
  },
  methods: {},
  mounted() {
    // 根据条件新增
    // console.log(this.$route.name);
  }
};
</script>

<style lang="stylus" scoped>
.add-new
  .add-new__view
    padding .1rem
</style>
