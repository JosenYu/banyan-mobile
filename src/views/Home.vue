<template>
  <div class="home">
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
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {},
  data() {
    return {
      selected: "1"
    };
  }
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
