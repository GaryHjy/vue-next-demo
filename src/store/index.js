import Vuex from "vuex";

export default Vuex.createStore({
  state: {
    storeCount: 0
  },
  mutations: {
    changeStoreCount(state, value) {
      state.storeCount = value;
    }
  },
  actions: {},
  modules: {}
});
