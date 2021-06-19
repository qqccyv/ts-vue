const modulesA = {
  state() {
    return {
      count: 1
    }
  },
  mutations: {
    increment(state, num) {
      if (num) {
        state.count = state.count + num
      } else {
        state.count++
      }
    }
  },
  getters: {
    countGetter(state) {
      return state.count * 2
    }
  },
  actions: {
    subCount(context, num) {
      setTimeout(() => {
        context.commit('increment', num)
      }, 100)
    }
  }
}

export default modulesA