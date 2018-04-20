
const state = {
  added: []
}

// 这里是实时计算后的state
const getters = {
  cartList: state => state.list
}


// 这里要被触发的动作
const actions = {
  addProduct: ({ state, commit, ...rest }, product) => {
    console.log('添加商品', state, commit, rest, product)
  }
}

// 这里是等待被action触发的方法
const mutations = {

}


export default {
  state,
  getters,
  actions,
  mutations
}

