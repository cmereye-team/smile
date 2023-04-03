import Cookies from 'js-cookie'
const app = {
  namespaced: true,
  state: {
    windowHeight: Cookies.get('windowHeight')
  },
  mutations: {
    HEIGHT_SET: (state, height) => {
      Cookies.set('windowHeight', height)
      state.windowHeight = height
    }
  },
  actions: {
    SetHeight({ commit }, height) {
      commit('HEIGHT_SET', height)
    }
  }
}

export default app
