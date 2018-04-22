<template>
  <div>
    <h1>商店</h1>
    <div 
      class="product-item"
      v-for="product in productList"
      :key="product.id"
    >
      {{product.title}} - ￥{{product.price}}&nbsp;&nbsp;&nbsp;&nbsp; 库存：{{product.inventory}}
      &nbsp;&nbsp;
      <button @click="addProductToCart(product)" :disabled="!product.inventory">加入购物车</button>
    </div>

    <!-- h2 购物车 -->
    <h2> 购物车商品</h2>
    <ul>
      <li v-for="cart in cartList" :key="cart.id">
        名称：{{cart.title}}   ，     
        数量：{{cart.quantity}}
      </li>
    </ul>

    <!-- 结算 -->
     <div>
       <span>总金额：{{cartTotalPrice}}</span>
       &nbsp;&nbsp;
       <button @click="checkout">结算</button>
     </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Shop",
  computed: {
    ...mapGetters({
      productList: "product/productList",
      cartList:"cart/cartList",
      cartTotalPrice:'cart/cartTotalPrice'
    })  
  },
  methods:{
    ...mapActions({
      addProductToCart:'cart/addProductToCart',
      checkout:'cart/checkout'
    })
  }
};
</script>

