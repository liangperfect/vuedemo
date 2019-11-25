<template>

  <h3>我是子组件</h3>



</template>

<script>
  export default {

    data() {

      return {

        msg: '我是子组件的信息'

      }
    },

    methods:{

      myFun(){

          console.log("我是子组件中定义大方法")
      }

    }

  }
</script>

<style>
</style>
