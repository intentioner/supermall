<template>
  <nav-bar class="detail-nav">
    <img slot="left" class="back" @click="backClick" src="../../../assets/img/back.jpg">
    <div class="title" slot="center">
      <span class="title-item"
            v-for="(item, index) in titleInfos" :key="index"
            :class="{'active': index===currentIndex}" @click="itemClick(index)">
        {{item}}
      </span>
    </div>
  </nav-bar>
</template>

<script>
  import NavBar from '../../../components/common/navbar/NavBar.vue'
	export default {
		name: "DetailNavBar",
    components: {
		  NavBar
    },
    props: {
		  titleInfos: {
		    type: Array,
        default: () => {
          return ['商品', '参数', '评论', '推荐']
        }
      },
      currentIndex: {
		    type: Number,
        default: 0
      }
    },
    methods: {
      itemClick(index) {
        this.currentIndex = index
        this.$emit('itemClick', index)
      },   
      backClick() {
        this.$router.back()
      }
    }
	}
</script>

<style scoped>
  .detail-nav {
    background-color: #fff;
    font-weight: normal;
  }
  .title {
    display: flex;
    padding: 0 20px;
    font-size: 14px;
  }
  .title-item {
    flex: 1;
  }
  .title-item.active {
    color: var(--color-high-text);
  }
  .back {
    margin-top: 8px;
    height: 25px;
    width: 25px;
    margin-left: 15px;
  }
</style>
