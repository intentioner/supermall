<template>
  <div class="check-button" :class="{check:isChecked}" @click="selectItem">
    <img src="../../../assets/img/common/tick.png" class="big"/>
  </div>
</template>

<script>
  export default{
    name:"CheckButton",
    props:{
      isChecked:{
        type:Boolean,
        default:false
      }
    },
    methods:{
      selectItem(){
        this.$emit('checkBtnClick')
      }
    }
  }
</script>

<style>
  .check-button img{
    border-radius: 50%;
    height: 15px;
    width: 15px;
    /* background-color: pink; */

  }
  /* .big{
    height: 20px;
    width: 20px;} */
    /* margin-left: 7px; */

  .check{
    background-color: pink;

  }
</style>
