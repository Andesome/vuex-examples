<template>
  <div>
    <h1>商店</h1>
    {{productList}}
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name:'Shop',
  computed:mapGetters([
    'productList'
  ])
}
</script>

