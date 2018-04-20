
const state = {
  all: [{
    id: 1,
    title: '小米5',
    price: 2999,
    inventory: 9
  }, {
    id: 2,
    title: 'iphone 8 plus',
    price: 5999,
    inventory: 5
  }, {
    id: 3,
    title: '锤子手机T1',
    price: 1999,
    inventory: 3
  }]
}

// 这里是实时计算后的state
const getters = {
  productList: state => state.all
}


// 这里要被触发的动作
const actions = {

}

// 这里是等待被action触发的方法
const mutations = {

}


export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}

