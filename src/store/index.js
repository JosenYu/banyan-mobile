import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // 底部导航栏
    tabbarView: true,
    // 显示隐藏应用模块
    applicationView: false
  },
  mutations: {
    changeTabbar(state, view) {
      state.tabbarView = view;
    }
  },
  actions: {},
  modules: {}
});
