<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <TabControl :titles="['流行','新款','精选']" class="tabControl" @tabClick="tabClick"
    ref="tabControl1" v-show="isTabFixed"></TabControl>
        <scroll class="content"
        ref="scroll" :probe-type="3"
        @scroll="contentScroll" :pull-up-load="true" @pullingUp="loadMore">
          <home-swiper :banners="banners" @swiperImageLoad.once="swiperImageLoad"></home-swiper>
          <recommend-view :recommends="recommend"></recommend-view>
          <feature-view></feature-view>
          <TabControl :titles="['流行','新款','精选']" @tabClick="tabClick" ref="tabControl2"></TabControl>
          <!-- <goods></goods> -->
          <good-list :goods="showGoods"/>
        </scroll>
        <back-top @click.native="backClick" v-show="isShowBackTop"></back-top>

  </div>
</template>

<script>

import HomeSwiper from './childComps/HomeSwiper.vue'
import RecommendView from './childComps/RecommendView.vue'
import FeatureView from './childComps/FeatureView.vue'


 import GoodList from '../../components/content/goods/GoodsList.vue'
// import Goods from './childComps/Goods.vue'
import NavBar from '../../components/common/navbar/NavBar.vue'
import TabControl from '../../components/content/tabControl/TabControl.vue'
import Scroll from '../../components/common/scroll/Scroll.vue'
import BackTop from '../../components/content/backtop/BackTop.vue'

import {getHomeMultidata,getHomeGoods} from '../../network/home.js'



export default{
  name:"Home",
  components:{
    NavBar,
    HomeSwiper,
    RecommendView,
    FeatureView,
    TabControl,
    GoodList,
    Scroll,
    BackTop,
    saveY:0
    // Goods
  },
  data(){
    return{
      banners:[],
      recommend:[],
      goods:{
        'pop':{page:0,list:[]},
        'new':{page:0,list:[]},
        'sell':{page:0,list:[]},
      },
      currentType:'pop',
      isShowBackTop: false,
      tabOffsetTop:0,
      isTabFixed:false
    }
  },
   computed: {
        showGoods() {
          return this.goods[this.currentType].list
        },
        // activated(){
        //   this.$refs.scroll.scrollTo(0,this.saveY,0)

        // },
        // disactivated(){
        //    this.saveY=this.$refs.scroll.scroll
        // }
      },
  created(){
    //1.  请求多个数据
    this.getHomeMultidata()
    // 请求商品数据
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')
    //监听item中图片加载完成
    // this.$bus.$on('itemImageLoad',()=>{
    //   this.$refs.scroll.refresh()
    // })
  },
  mounted() {
     //获取tabControl的offsetTop
     // console.log(this.$refs.tabControl.$el.offsetTop);
  },
  methods:{
    //事件监听相关的方法
     tabClick(index){
       switch(index){
         case 0:
         this.currentType ='pop'
         break
         case 1:
         this.currentType ='new'
         break
         case 2:
         this.currentType='sell'
         break
       }
       this.$refs.tabControl1.currentIndex = index;
       this.$refs.tabControl2.currentIndex = index;
     },
     backClick(){
       this.$refs.scroll.scrollTo(0,0)
     },
     contentScroll(position){
       // position.y > 1000
       this.isShowBackTop = (-position.y) >1000

       //决定tabControl是否吸顶(position:fixed)
       this.isTabFixed =(-position.y) > this.tabOffsetTop
     },
    loadMore(){
      // console.log('上拉加载更多');
      this.getHomeGoods(this.currentType)
      this.$refs.scroll.scroll.refresh()
    },

    //网络请求相关的方法
    getHomeMultidata(){
     getHomeMultidata().then(res =>{
      this.banners =res.data.banner.list;
      this.recommends = res.data.recommend.list;
    })
   },
    getHomeGoods(type){
      const page = this.goods[type].page +1
      getHomeGoods(type,page).then(res =>{
            this.goods[type].list.push(...res.data.list)
            this.goods[type].page += 1
              //完成上拉加载更多
            this.$refs.scroll.finishPullUp()
      })
    },
    swiperImageLoad(){
      this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop;
    }
  }
}
</script>

<style scoped>
  #home{
    /* padding-top: 44px; */
    height: 100vh;
    position: relative;
    }

  .home-nav{
    background-color: var(--color-tint);
    color: #F6F6F6;

   /* position:fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9; */
  }
  .tabControl{
    position: relative;
    z-index: 9;
    top: -1px;
  }
  .content{
    overflow: hidden;
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
    }
  /* .content {
        height: calc(100% - 93px);
        overflow: hidden;
        margin-top: 44px;
      } */

</style>
