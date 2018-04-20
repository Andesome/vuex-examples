<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div class="links">
      <router-link to="/counter">vuex-计数器</router-link>
      <router-link to="/shop">vuex-购物车</router-link>
      <router-link to="/todo">vuex-todo</router-link>
    </div>
    
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app",
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.links{
  width: 500px;
  margin: 20px auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
</style>
