<template>
  <div class="goods">
    <a href="https://act.mogujie.com">
      <div class="goods-item">
      <img src="../../../assets/img/home/商品图片/1.jpg" />
      <img src="../../../assets/img/home/商品图片/2.jpg" />
      <img src="../../../assets/img/home/商品图片/3.jpg" />
      <img src="../../../assets/img/home/商品图片/4.jpg" />
      <img src="../../../assets/img/home/商品图片/5.jpg" />
      <img src="../../../assets/img/home/商品图片/6.jpg" />
      <img src="../../../assets/img/home/商品图片/7.jpg" />
      <img src="../../../assets/img/home/商品图片/8.jpg" />
      
      </div>
    </a>
  </div>
</template>

<script>
  export default{
    name:"Goods"

  }
</script>

<style>
  .goods{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 2px;
    width: 100%;
  }
  .goods-item{
      padding-bottom: 40px;
      width: 100%;
  }
  .goods-item img{
    width: 100%;
    border-radius: 5px;
  }
</style>
