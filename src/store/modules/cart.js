
const state = {
  added: []
}

// 这里是实时计算后的state
const getters = {
  cartList: state => state.list
}


// 这里要被触发的动作
const actions = {
  addProductToCart: ({ commit }, product) => {
    commit('pushProductToCart',product)
  }
}

// 这里是等待被action触发的方法
const mutations = {
  pushProductToCart:(state,{id})=>{
    state.added.push({
      id:id,
      quantity: 1      
    })
  }
}


export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}

