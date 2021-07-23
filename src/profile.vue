<template>
  <div id="profile">
    <nav-bar class="profile-nav">
      <div slot="center">我的账户</div>
    </nav-bar>
    <h2 class="idname">我的id：{{id}}</h2>
    <div>
      <h2 class="ordershop">我的订阅店铺</h2>
      <img src="../../assets/img/common/profile/ordershop.png" class="orderimg"/>
    </div>
    <div class="border">
      <h2 class="mine">我的订单</h2>
      <div class="myorder">
        <img src="../../assets/img/common/profile/2.png" />
        <img src="../../assets/img/common/profile/3.png" />
        <img src="../../assets/img/common/profile/4.png" />
        <img src="../../assets/img/common/profile/5.png" />
      </div>
    </div>
     <!-- <div class="setter">
       <h2 class="setname">设置</h2>
      <img src="../../assets/img/common/profile/setter.png" />
     </div> -->
  </div>
</template>

<script>
  import NavBar from '../../components/common/navbar/NavBar.vue'
  export default{
    name:"profile",
    components:{
      NavBar
    },
    data(){
      return {
        id:'id0527',
      }
    }
  }
</script>

<style scoped>
  #profile{
    height: 100vh;
    position: relative;
    line-height: 45px;
  }
  .profile-nav{
      background-color: var(--color-tint);
      color: #F6F6F6;
  }
  .idname{
    font-weight: 100;
    font-family:华文楷体;

  }
  .ordershop{

    font-weight: 100;
    font-family: 华文楷体;
    display: inline-flex;
  }
  .orderimg{
    display: inline-flex;
    height: 40px;
    width: 40px;
    float: right;
    right: 30;
  }
  .border{
    border-style: dashed;
    border-color: #FF5777;
  }
  .myorder{
    height: 65px;
    width: 65px;
    display: flex;
  }
  .mine{
    text-align: center;
  }
  /* .setter{
    height: 50px;
    width: 50px;
    display: inline-block;

  }
  .setter .setname{
    display: inline-block;
  }
  .setter img{
    height: 40px;
    width: 40px;
  } */
</style>
