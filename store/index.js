// import Vue from 'vue'
// import Vuex from 'vuex'
// import app from './modules/app'

// import getters from './getters'

// Vue.use(Vuex)
// const store = () => {  
//   return new Vuex.Store({
//     modules: {
//       app
//     },
//     getters,
//   })
// }



import Cookies from 'js-cookie'
// export const namespaced = true,
export const state =()=> ({
  windowHeight: Cookies.get('windowHeight')
})
export const mutations =  {
  HEIGHT_SET(state, height) {
    Cookies.set('windowHeight', height)
    state.windowHeight = height
  }
}
export const actions = {
  SetHeight({ commit }, height) {
    commit('HEIGHT_SET', height)
  }
}

export const getters = {
  windowHeight(state){
    return state.app.windowHeight
  } 
}


// export default store
