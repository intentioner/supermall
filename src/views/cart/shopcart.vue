<template>
  <div class="shopcart">
    <!-- //导航 -->
    <nav-bar class="nav-bar">
      <div slot="center">购物车({{cartLength}})</div>
    </nav-bar>
    <!-- //商品列表 -->
    <cart-list></cart-list>
    <bottom-bar></bottom-bar>
  </div>
</template>

<script>
  import NavBar from '../../components/common/navbar/NavBar.vue'
  import CartList from './childComps/CartList.vue'
  import BottomBar from './childComps/BottomBar.vue'
  import {mapGetters} from 'vuex'
  export default{
    name:"shopcart",
    components:{
      NavBar,
      CartList,
      BottomBar
    },
    computed:{
      ...mapGetters(['cartLength','cartList'])
    }
  }
</script>

<style scoped>
  .shopcart{
    height: 100vh;
  }
  .nav-bar{
    background-color: var(--color-tint);
    color: #fff;
    /* position: relative;
    z-index: 9; */
    /* font-weight: 700; */
  }
</style>
