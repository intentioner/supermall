<template>
  <div id="detail">
  <detail-nav-bar class="detail-nav"></detail-nav-bar>
  <scroll class="content" ref="scroll">
    <!-- <div>
      <li v-for="item in $store.state.cartList">{{item}}</li>
    </div> -->
    <detail-swiper :top-images="topImages"></detail-swiper>
    <detail-base-info :goods="goods"></detail-base-info>
    <detail-shop-info :shop="shop"></detail-shop-info>
    <detail-goods-info :detail-info="detailInfo" @imageLoad="imageLoad"></detail-goods-info>
    <detail-param-info :param-info="paramInfo" ref="params"></detail-param-info>
    <detail-comment-info ref="comment" :comment-info="commentInfo"></detail-comment-info>
    <goods-list :goods="recommends"></goods-list>
  </scroll>
  <detail-bottom-bar @addCart="addToCart"></detail-bottom-bar>
  <toast :message="message" :show="show"></toast>
  </div>
</template>

<script>

  import {mapActions} from 'vuex'
  import toast from '../../components/common/toast/toast.vue'
  import DetailNavBar from './childComps/DetailNavBar.vue'
  import {getDetail,Goods,Shop,GoodsParam,getRecommend} from '../../network/detail.js'
  import DetailSwiper from './childComps/DetailSwiper.vue'
  import DetailBaseInfo from './childComps/DetailBaseInfo.vue'
  import DetailShopInfo from './childComps/DetailShopInfo.vue'
  import Scroll from '../../components/common/scroll/Scroll.vue'
  import DetailGoodsInfo from './childComps/DetailGoodsInfo.vue'
  import DetailParamInfo from './childComps/DetailParamInfo.vue'
  import DetailCommentInfo from './childComps/DetailCommentInfo.vue'
  import DetailBottomBar from './childComps/DetailBottomBar.vue'

  import GoodsList from '../../components/content/goods/GoodsList.vue'
  import {debouce} from '../../common/utils.js'
  export default{
    name:"Detail",
    components:{
       DetailNavBar,
       DetailSwiper,
       DetailBaseInfo,
       DetailShopInfo,
       DetailGoodsInfo,
       DetailParamInfo,
       DetailCommentInfo,
       GoodsList,
       DetailBottomBar,
       Scroll,
       toast

    },
    // mixins:[itemListenerMixin],
    data(){
      return{
        iid:null,
        topImages:[],
        goods:{},
        shop:{},
        detailInfo:{},
        paramInfo:{},
        commentInfo:{},
        recommends:[],
        message:'',
        show:false
        // themeTopYs:[],
        // getThemeTopY:null
      }
    },
    created(){
      //保存传入的iid
      this.iid = this.$route.params.iid
      //根据iid请求详细数据
      getDetail(this.iid).then(res => {
        console.log(res);
        const data = res.result;
        this.topImages=res.result.itemInfo.topImages

        //获取商品信息
        this.goods = new Goods(data.itemInfo,data.columns,data.shopInfo.services)

        //创建店铺信息的对象
        this.shop = new Shop(data.shopInfo)

        //获取商品详细信息
        this.detailInfo =data.detailInfo

        //获取参数信息
        this.paramInfo = new GoodsParam(data.itemParams.info,data.itemParams.rule)

        //保存评论信息
         if (data.rate.list) {
                    this.commentInfo = data.rate.list[0];
          }
      })


      // this.getThemeTopY = debouce(() =>{
      //   this.themeTopYs =[]
      //   this.themeTopYs.push(0);
      //   this.themeTopYs.push(this.$refs.params.$el.offsetTop)
      //   this.themeTopYs.push(this.$refs.comment.$el.offsetTop)
      //   this.themeTopYs.push(this.$refs.recommend.$el.offsetTop)
      //   console.log(this.themeTopYs);
      // },100)

       //请求推荐数据
        getRecommend().then(res => {
          this.recommends = res.data.list
         })
    },
    // updatad(){

    //     this.themeTopYs.push(0);
    //     this.themeTopYs.push(this.$refs.params.$el.offsetTop)
    //     this.themeTopYs.push(this.$refs.comment.$el.offsetTop)
    //     this.themeTopYs.push(this.$refs.recommend.$el.offsetTop)
    //     console.log(this.themeTopYs);
    //   },
    methods:{
      ...mapActions(['addCart']),
      imageLoad(){
        this.$refs.scroll.refresh()
        // this.getThemeTopY()
      },
      addToCart(){
        //获取购物车需要展示的信息
        const product ={}
        product.image = this.topImages[0]
        product.title = this.goods.title
        product.desc = this.goods.desc
        product.price = this.goods.newPrice
        product.iid = this.iid

        //将商品添加购物车
        this.$store.dispatch('addCart',product).then(res =>{
          this.show = true
          this.message = res;
          
          
          setTimeout(() => {
            this.show = false
            this.message = ''
          },1500)
          // console.log(res);

          // this.$toast.show(res,20000)
          // console.log(this.$toast);
        })

        //添加购物车成功

      }
      // itemClick(index){
      //   console.log(index);
      //   this.$refs.scroll.scrollTo(0,-this.themeTopYs[index],200)
      // }
    }
  }
</script>

<style scoped>
  #detail{
    position: relative;
    z-index: 1;
    background-color: #fff;
    height: 100vh;

  }
  .content{
    position: absolute;
    top: 44px;
    bottom: 60px;
  }
  .detail-nav{
    position: relative;
    z-index: 9;
    background-color: #fff;
  }
</style>
