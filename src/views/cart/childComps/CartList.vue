<template>
  <div class="cart-list">
    <scroll class="content" ref="scroll">
      <cart-list-item v-for="(item,index) in cartList" :item-info="item" :key="index"></cart-list-item>
    </scroll>
  </div>
</template>

<script>
  import Scroll from '../../../components/common/scroll/Scroll.vue'
  import CartListItem from './CartListItem.vue'
  import {mapGetters} from 'vuex'
  export default{
    name:"CartList",
    components:{
      Scroll,
      CartListItem
    },
    computed:{
      ...mapGetters(['cartList'])
    },
    activated(){
      this.$refs.scroll.refresh()
    }
  }
</script>

<style scoped>
  .cart-list{
    height: 100%;
  }
 .content{
   height: calc(100% - 44px - 49px - 40px);
   overflow: hidden;
 }
</style>
