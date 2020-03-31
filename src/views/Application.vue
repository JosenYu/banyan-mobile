<template>
  <div class="application">
    <!-- application -->
    <div class="application__icon">
      <mt-header fixed title="应用">
        <mt-button icon="more" slot="right"></mt-button>
      </mt-header>
      <ul class="application__ul">
        <li
          class="application__ul__li"
          v-for="(item, index) in titleArr"
          :key="index"
        >
          <h4>{{ item.title }}</h4>
          <div class="application__ul__li__box">
            <div
              class="application__ul__li__box__item"
              v-for="(itemm, index) in item.context"
              :key="index"
              @click="go(itemm)"
            >
              <img :src="itemm.img" :alt="itemm.label" />
              <div>{{ itemm.label }}</div>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      titleArr: [
        {
          title: "模型",
          context: [
            {
              label: "模型查询",
              img: require("../assets/moxing.png"),
              path: "/model"
            },
            {
              label: "模型增加",
              img: require("../assets/zengjia.png"),
              path: "/addNew/model"
            }
          ]
        },
        {
          title: "库存",
          context: [
            {
              label: "库存查询",
              img: require("../assets/kucun.png"),
              path: "/application/model"
            },
            {
              label: "库存增加",
              img: require("../assets/zengjia.png"),
              path: "/application/model"
            },
            {
              label: "库存修改",
              img: require("../assets/xiugai.png"),
              path: "/application/model"
            }
          ]
        },
        {
          title: "综合",
          context: [
            {
              label: "销售额",
              img: require("../assets/xiaoshoue.png"),
              path: "/application/model"
            },
            {
              label: "日报",
              img: require("../assets/ribao.png"),
              path: "/application/model"
            }
          ]
        },
        {
          title: "客户",
          context: [
            {
              label: "客户查询",
              img: require("../assets/kehu.png"),
              path: "/model"
            },
            {
              label: "客户新增",
              img: require("../assets/kehuxinzeng.png"),
              path: "/application/model"
            }
          ]
        }
      ]
    };
  },
  methods: {
    go({ path }) {
      // debugger;
      this.$router.push(path);
    }
  }
};
</script>

<style lang="stylus" scoped>
.application
  margin .5rem 0
  .application__ul
    margin 0
    padding 0
    .application__ul__li
      padding 0 .1rem
      list-style none
      .application__ul__li__box
        display flex
        justify-content space-around
        flex-wrap wrap
        .application__ul__li__box__item
          width 25%
          text-align center
</style>
