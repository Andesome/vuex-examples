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
      <button @click="addProductToCart(product)">加入购物车</button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Shop",
  computed: {
    ...mapGetters({
      productList: "product/productList"
    })  
  },
  methods:{
    ...mapActions({
      addProductToCart:'cart/addProductToCart'
    })
  }
};
</script>

