<template>
  <div class="model">
    <!-- 模型列表 -->
    <div class="model__list">
      <!-- header -->
      <mt-header fixed title="模型">
        <router-link to="/application" slot="left">
          <mt-button icon="back">返回</mt-button>
        </router-link>
        <mt-button
          @click="openSearch"
          icon="mint-toast-icon mintui mintui-search"
          slot="right"
        >
          查询
        </mt-button>
      </mt-header>
      <!-- content -->
      <div class="content__content">
        <mt-loadmore
          :top-method="loadTop"
          :bottom-method="loadBottom"
          ref="loadmore"
        >
          <ul class="content__ul">
            <li class="ul_li" v-for="(item, index) in modelList" :key="index">
              <p>编号: {{ item._id }}</p>
              <p>名称: {{ item.name }}</p>
              <p>模型/规格: {{ item.model }}</p>
              <p>品牌: {{ item.brand }}</p>
              <!-- 修改按钮 -->
              <p class="li__update-box">
                <mt-button
                  type="primary"
                  size="small"
                  @click="openUpdate(item)"
                >
                  修 改
                </mt-button>
              </p>
            </li>
          </ul>
        </mt-loadmore>
      </div>
    </div>
    <!-- 更新 弹出框 -->
    <mt-popup v-model="popupVisible" position="left">
      <TheModelUpdate
        class="popup__box"
        @close="popupVisible = false"
        :itemModel="itemModel"
        @handleUpdate="handleUpdate"
      />
    </mt-popup>
    <!-- 搜索 -->
    <mt-popup
      v-model="searchVisible"
      position="right"
      class="model__search-box"
    >
      <mt-search
        @keyup.enter.native="searchEnter"
        v-model="searchText"
        cancel-text="取消"
        placeholder="搜索"
        :result="searchResult"
      >
      </mt-search>
    </mt-popup>
  </div>
</template>

<script>
import stock from "@/api/stock";
export default {
  components: {
    TheModelUpdate: () => import("@/components/TheUpdateModel")
  },
  computed: {},
  data() {
    return {
      searchResult: [],
      searchText: "",
      searchVisible: false,
      modelList: [],
      popupVisible: false,
      itemModel: {
        _id: "123",
        name: "111",
        model: "233",
        brand: "666"
      },
      searchModel: {
        name: "",
        model: "",
        brand: ""
      }
    };
  },
  methods: {
    searchEnter() {
      this.getModel();
    },
    handleUpdate(form) {
      stock.updateModel(form).then(() => {
        this.getModel();
      });
    },
    openUpdate(item) {
      this.popupVisible = true;
      this.itemModel = item;
    },
    openSearch() {
      this.searchVisible = true;
    },
    // 下拉刷新
    loadTop() {
      this.getModel();
      setTimeout(() => {
        this.$refs.loadmore.onTopLoaded();
      }, 2000);
    },
    // 上拉加载更多
    loadBottom() {
      setTimeout(() => {
        // this.allLoaded = true; // 若数据已全部获取完毕
        this.$refs.loadmore.onBottomLoaded();
      }, 3000);
    },
    getModel() {
      stock.getModel(this.searchModel).then(result => {
        this.modelList = result.data.doc;
        this.searchResult = result.data.doc.map(v => v.name);
      });
    }
  },
  watch: {
    searchText(n) {
      this.searchModel.name = n;
      // 搜索框没有有内容 返回
      if (n.split("").length === 0) {
        this.searchVisible = false;
      }
    }
  },
  mounted() {
    this.getModel();
  }
};
</script>

<style lang="stylus" scoped>
:root
  --allHeight 100vh
.model
  .model__list
    .content__content
      // height calc(var(--allHeight) - .55rem - .4rem)
      margin .4rem 0 .55rem 0
      overflow scroll
      .content__ul
        padding 0.1rem
        margin 0
        list-style none
        .ul_li
          border-bottom 1px solid #ccc
  .model__search-box
    width 100vw
</style>
