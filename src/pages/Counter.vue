<template>
  <div>
    <h1>计数器</h1>
    <span>当前数量是{{$store.state.counter.count}},为{{isOdd}}</span>
    <br/>
    <br/>
    <button @click="increment">增加+1</button>
    &nbsp;&nbsp;
    <button @click="decrement">减少-1</button>
     &nbsp;&nbsp;
    <button @click="incrementAsync">异步增加+1</button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Counter",
  computed: {
    ...mapGetters({
      isOdd: "counter/isOdd"
    })
  },
  methods: {
    ...mapActions({
      increment: "counter/increment",
      decrement: "counter/decrement",
      incrementAsync: "counter/incrementAsync"
    })
  }
};
</script>

