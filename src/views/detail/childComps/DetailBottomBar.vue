<template>
  <div class="bottom-bar">
    <div class="bar-item bar-left">
      <div>
        <i class="icon service"><img src="../../../assets/img/common/kefu.png" class="kefu"/></i>
        <span class="text">客服</span>
      </div>
      <div>
        <i class="icon shop">
          <img src="../../../assets/img/common/dianpu.png" class="dianpu" />
        </i>
        <span class="text">店铺</span>
      </div>
      <div>
        <i class="icon select"><img src="../../../assets/img/common/shoucang.png" class="shoucang"/></i>
        <span class="text">收藏</span>
      </div>
    </div>
    <div class="bar-item bar-right">
      <div class="cart" @click="addToCart">加入购物车</div>
      <div class="buy">购买</div>
    </div>
  </div>
</template>

<script>
  export default{
    name:"DetailBottomBar",
    methods:{
      addToCart(){
        this.$emit('addCart')
      }
    }
  }
</script>

<style scoped>
  .bottom-bar{
    height: 49px;
    background-color: #fff;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;

    display: flex;
    text-align: center;
  }
  .bar-item{
    flex: 1;
    display: flex;
  }
  .bar-item>div {
      flex: 1;
    }
    .bar-left .text {
      font-size: 13px;
    }
    .kefu{
      height: 20px;
      width: 20px;
    }
    .shoucang{
      margin-left: -5px;
    }
    .bar-left .icon {
      display: flex;
      width: 22px;
      height: 22px;
      margin: 6px auto 3px;
      /* background: url("~assets/img/common/bottom.jpg") 0 0/100%; */
    }

    .bar-left .service {
      background-position:0 -54px;
    }
    .bar-left .shop {
      background-position:0 -98px;
    }
    .bar-right {
      font-size: 15px;
      /* color: #fff; */
      line-height: 58px;
    }
    .bar-right .cart {
      background-color: #ffe817;
      color: #333;



    }
    .bar-right .buy {
      background-color: #f69;



    }

</style>
