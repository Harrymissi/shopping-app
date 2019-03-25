const state = () => ({position: {}});

const mutations = {
  setPosition(state, val) {
    state.position = val;
  }
};

const actions = {
  setPosition: ({commit}, position) => {
    commit('setPosition', position)    // 其他地方触发actions里的setPosition后再触发mutations里的setPosition将state.position改为参数值
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
