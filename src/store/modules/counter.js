
const state = {
  count: 0
}

// 这里是实时计算后的state
const getters = {
  isOdd: state => state.count % 2 === 0 ? '偶数' : '奇数',
}


// 这里要被触发的动作
const actions = {
  increment: ({ commit }) => commit('increment'),  //计数器+1
  decrement: ({ commit }) => commit('decrement'),   //计数器-1
  incrementAsync: ({ commit }) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        commit('increment');
        resolve();
      }, 1000)
    })
  }
}

// 这里是等待被action触发的方法
const mutations = {
  increment(state) {
    state.count++;
  },
  decrement(state) {
    state.count--
  }
}


export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}

