<template>
  <div class="tab-bar-item" @click="itemClick">
    <div  v-if="!isActive" >
    <slot name="item-icon"></slot>
    </div>
    <div v-else>
    <slot name="item-icon-active"></slot>  <!-- 传入第二张的图 -->
    </div>
    <div  :class="{active:isActive}" >
     <slot name="item-text"></slot>
    </div>
    </div>
</template>

<script>
  export default{
    name:"tabbaritem",
    props:{
      path:String
    },
    data(){
      return{
        // isActive:false
      }
    },
    computed:{
      isActive(){
        return this.$route.path ==this.path
        //return this.$route.path.indexOf(this.path)!==-1
      }
    },
    methods:{
      itemClick(){
        this.$router.replace(this.path)
      }
    }
  }
</script>

<style>
  .tab-bar-item{
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 14px;

  }
  .tab-bar-item img{
    width:24px ;
    height: 24px;
    margin-top: 3px;
    vertical-align: middle; /* 消除图片下面的空隙 */
    margin-bottom: 1px;
  }
  .active{
    color: red;
  }
</style>
