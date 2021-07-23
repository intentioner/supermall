<template>
  <tabbar>
     <tabbaritem path="/home">
       <img slot="item-icon" src="../../../assets/img/ic_account_balance_48px.png" />
       <img slot="item-icon-active" src="../../../assets/img/home.png" />  <!--传入第二张图 将这个图片改为红色 -->
       <div slot="item-text">首页</div>
     </tabbaritem>
     <!-- <tabbaritem path="/category">
       <img slot="item-icon" src="../../../assets/img/ic_apps_48px.png" />
       <img slot="item-icon-active" src="../../../assets/img/catogocy.png" />
       <div slot="item-text">分类</div>
     </tabbaritem> -->
     <tabbaritem path="/shopcart">
       <img slot="item-icon" src="../../../assets/img/ic_account_balance_wallet_48px.png" />
       <img slot="item-icon-active" src="../../../assets/img/shopping.png" />
       <div slot="item-text">购物车</div>
     </tabbaritem>
     <tabbaritem path="/profile">
       <img slot="item-icon" src="../../../assets/img/ic_account_box_48px.png" />
       <img slot="item-icon-active" src="../../../assets/img/account.png" />
       <div slot="item-text">我的</div>
     </tabbaritem>
  </tabbar>
</template>

<script>
  import tabbar from '../../common/tabbar/tabbar.vue'
  import tabbaritem from '../../common/tabbar/tabbaritem.vue'
  export default{
    name:'Maintabbar',
    components:{
      tabbar,
      tabbaritem
    }
  }
</script>

<style>
</style>
