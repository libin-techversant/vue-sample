import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count : 0
  },
  mutations: {
    updateCountMutation(state, value){
      state.count = value;
    }
  },
  actions: {
    updateCountAction (context, payload) {
      context.commit('updateCountMutation', payload)
    }
  }
})
