
const state = {
  added: [],
};

// 这里是实时计算后的state
const getters = {
  cartList: state => state.added,
  // 实时计算购物车总金额
  cartTotalPrice: (state) => {
    return state.added.reduce((total, product) => {
      return total + product.price * product.quantity;
    }, 0);
  },
};


// 这里要被触发的动作
const actions = {
  addProductToCart: ({ state, commit, rootState }, product) => {
    if (product.inventory > 0) { // 判断是否有库存
      // 判断当前商品是不是已经加入过购物车，如果加入过，给其数量+1
      const cartItem = state.added.find(item => item.id === product.id);
      if (!cartItem) {
        commit('pushProductToCart', product);
      } else {
        commit('incrementItemQuantity', product);
      }
      // console.log(rootState, rootState.product);
      // 减库存
      commit('decrementProductInventory', { id: product.id, productList: rootState.product }); // rootState是整棵store树
    }
  },
  checkout: ({ state, getters }) => {
    // console.log(state, rest);
    if (state.added.length > 0) {
      // 向服务器发起结算请求
      // some code ...
      alert(`您一共买了${state.added.length}件商品，总金额¥${getters.cartTotalPrice}`);
    } else {
      alert('先去买点什么东西吧，再来结算');
    }
  },
};

// 这里是等待被action触发的方法
const mutations = {
  pushProductToCart: (state, { id, title, price }) => {
    state.added.push({
      id,
      title,
      price,
      quantity: 1,      
    });
  },
  incrementItemQuantity: (state, { id }) => {
    const cartItem = state.added.find(item => item.id === id);
    cartItem.quantity++;
  },
   // 减库存
   decrementProductInventory: (state, { id, productList }) => {
    // console.log(productList);
    const productItem = productList.all.find(product => product.id === id);
    productItem.inventory--;
  },
};


export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};

