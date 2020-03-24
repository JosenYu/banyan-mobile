<template>
  <div id="app">
    <router-view class="router-view" />
    <h5 class="bottom-text">我也是有底线的..</h5>
    <mt-tabbar fixed v-model="selected">
      <mt-tab-item
        v-for="(item, index) in $router.options.routes"
        :key="index"
        :id="item.name"
      >
        <i slot="icon" :class="item.icon"></i>
        {{ item.name }}
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>
<script>
export default {
  data() {
    return {
      selected: "主页"
    };
  },
  watch: {
    selected(n) {
      this.$router.push({ name: n });
    }
  },
  mounted() {
    // debugger;
    this.$router.push("/");
    this.$route;
    this.$router.options.routes;
  }
};
</script>
<style lang="stylus">
@import url('~mint-ui/lib/style.css');
@import url('//at.alicdn.com/t/font_1707183_xymubts8jbi.css');
html
  font-size 100px
  body
    margin 0
    #app
      font-size .16rem
      .bottom-text
        margin-bottom .6rem
        text-align center
        position relative
        color #bbb
        &:before, &:after
          content ''
          display block
          position absolute
          top 0
          bottom 0
          width 30%
          height .01rem
          background-color #ccc
          margin auto
        &:after
          right 0
</style>
