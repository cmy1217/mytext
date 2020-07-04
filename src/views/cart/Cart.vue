<template>
  <div class="cart">
    <nav-bar class="nav-bar"><div slot="center">购物车({{getLength}})</div></nav-bar>
    <cart-list></cart-list>
    <MarketBottomBar></MarketBottomBar>
  </div>
  
</template>

<script>
  import NavBar from 'components/common/nacbar/NavBar'
  import {mapGetters} from 'vuex'
  import CartList from './childcom/CartList'
  import MarketBottomBar from './childcom/BottomBar'
  export default {
    name: "Cart",
    components:{
      NavBar,
      CartList,
      MarketBottomBar
    },
    computed: {
      ...mapGetters(['getLength'])
    },
  }
</script>

<style scoped>
  .cart{
    height: calc(100vh - 49px);
  }
  .nav-bar{
    background-color: var(--color-tint);
    color: white;
  }
</style>
