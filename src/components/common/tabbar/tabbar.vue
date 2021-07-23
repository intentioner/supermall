<template>
    <div id="tab-bar">
      <slot></slot>
    </div>
</template>

<script>
  // import HelloWorld from './components/HelloWorld'

  export default {
    name: 'tabbar'
    // components: {
    //   // HelloWorld
    // }
  }
</script>

<style>
  #tab-bar{
    display: flex;
    background-color: #f6f6f6;
    position: fixed;
    left: 0;
    bottom: 0;
    right: 0;
    box-shadow: 0px -3px 1px rbga(100,100,100,0.8);
  }

</style>
