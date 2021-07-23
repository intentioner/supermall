<template>
  <div class="bottom-bar">
   <div class="check-content">
    <check-button  class="check-button"></check-button>
    <span>全选</span>
   </div>
   <div class="total-price">
     合计：{{totalPrice}}
   </div>

   <div class="calculate">去计算：{{checkLength}}</div>
  </div>
</template>

<script>
  import CheckButton from '../../../components/content/checkButton/CheckButton.vue'
  export default{
    name:"BottomBar",
    components:{
      CheckButton
    },
    computed:{
      totalPrice(){
        return '￥' + this.$store.getters.cartList.filter(item => {
          return item.checked
        }).reduce((preValue,item) =>{
          return preValue+item.price * item.count
        },0)
      },
      checkLength(){
        return this.$store.state.cartList.filter(item => item.checked).length
      }
    }
    
  }
</script>

<style scoped>
  .bottom-bar{
        width: 100%;
        height: 40px;
        background-color: #eee;
        position: fixed;
        bottom: 50px;
        left: 0;

        font-size: 14px;
        line-height: 44px;
        padding-left: 35px;

        color: #888;
        box-sizing: border-box;
        box-shadow: 0 -2px 3px rgba(0, 0, 0, .2);
  }
   .check-content{
     display: flex;
   }
   .check-button{
     width: 20px;
     height: 20px;
     margin-left: 75px;
   }
   .total-price {
       height: 40px;
       color: #666;
       position: fixed;
       bottom: 50px;
       left: 0;
       font-size: 14px;
       line-height: 44px;
     }
     .calculate{
           background-color: orangered;
           color: #fff;
           width: 100px;
           height: 40px;
           text-align: center;
           line-height: 44px;
           float: right;
           position: fixed;
           bottom: 50px;
           right: 0;
     }
</style>
