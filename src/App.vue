<template>
  <div id="app">
    <router-view class="router-view" />
    <mt-tabbar fixed v-model="selected" v-show="$store.state.tabbarView">
      <mt-tab-item v-for="(item, index) in router" :key="index" :id="item.name">
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
  computed: {
    router() {
      return this.$router.options.routes.filter(v => v.show);
    }
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
      .router-view
        // margin-bottom .5rem
</style>
