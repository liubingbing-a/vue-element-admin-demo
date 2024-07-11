const state = {
    num: 1
}

const mutations = {
  CHANGE_NUM: (state, value) => {
      state.num = value
  }
}

const actions = {
  changeNum({ commit }, data) {
    commit('CHANGE_NUM', data)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

