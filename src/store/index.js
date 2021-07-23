import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters.js'
//安装插件
Vue.use(Vuex)

//创建store对象
const store =new Vuex.Store({
  state:{
    cartList:[]
  },
  mutations:{
    addCounter(state,payload){
      payload.count++
    },
    addToCart(state,payload){
      state.cartList.push(payload)
    }
    //mutations 唯一的目的是修改state的状态
    //mutations 中每个方法尽可能完成的事件比较单一
    // addCart(state,payload){
    //   //payload新添加的商品
    //   // let oldProduct = null;
    //   // for(let item of state.cartList){
    //   //   if(item.iid === payload.iid){
    //   //     oldProduct = item;
    //   //   }
    //   // }

    //   let oldProduct = state.cartList.find(item => item.iid ===payload.iid)
    //   //判断oldProduct
    //   if(oldProduct){
    //     // let oldProduct =state.cartList[index]
    //     oldProduct.count += 1
    //   }else{
    //     payload.count = 1
    //     state.cartList.push(payload)
    //   }
    // }
  },
  actions:{
    addCart(context,payload){
      //payload新添加的商品
      // let oldProduct = null;
      // for(let item of state.cartList){
      //   if(item.iid === payload.iid){
      //     oldProduct = item;
      //   }
      // }
  return new Promise((resolve,reject) =>{
    let oldProduct = context.state.cartList.find(item => item.iid ===payload.iid)
    //判断oldProduct
    if(oldProduct){
      // let oldProduct =state.cartList[index]
      // oldProduct.count += 1
      context.commit('addCounter',oldProduct)
      resolve('当前的商品数量+1')
    }else{
      payload.count = 1
      // context.state.cartList.push(payload)
      payload.checked = true
      context.commit('addToCart',payload)
      resolve('添加了新的商品')
    }

  })
      // let oldProduct = context.state.cartList.find(item => item.iid ===payload.iid)
      // //判断oldProduct
      // if(oldProduct){
      //   // let oldProduct =state.cartList[index]
      //   // oldProduct.count += 1
      //   context.commit('addCounter',oldProduct)
      // }else{
      //   payload.count = 1
      //   // context.state.cartList.push(payload)
      //   payload.checked = true
      //   context.commit('addToCart',payload)
      // }

    }
  },
  getters
})

//挂载Vue实例上
export default store
