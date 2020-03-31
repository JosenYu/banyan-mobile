<template>
  <div class="home">
    <mt-header title="主页"> </mt-header>
    <!-- 轮播图 swipe -->
    <div class="home__swipe">
      <mt-swipe>
        <mt-swipe-item>
          <img
            class="home__swipe__swipe-img"
            src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=242778770,803441519&fm=26&gp=0.jpg"
            alt="/"
          />
        </mt-swipe-item>
        <mt-swipe-item>
          <img
            class="home__swipe__swipe-img"
            src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2495529684,2294388712&fm=26&gp=0.jpg"
            alt="/"
          />
        </mt-swipe-item>
      </mt-swipe>
    </div>
    <!--  -->
    <mt-actionsheet :actions="actions" v-model="sheetVisible"> </mt-actionsheet>
    <mt-button type="primary" @click="sheetVisible = true">
      primary
    </mt-button>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: "Home",
  components: {},
  data() {
    let self = this;
    return {
      selected: "1",
      actions: [
        {
          name: "a",
          method: () => {
            self.aa();
          }
        }
      ],
      sheetVisible: false
    };
  },
  methods: {
    aa() {
      console.log(1);
    }
  },
  mounted() {}
};
</script>
<style lang="stylus" scoped>
.home
  .home__swipe
    height 2.4rem
    .home__swipe__swipe-img
      width 100%
      height 100%
</style>
