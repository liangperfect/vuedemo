<template>

  <div>
    <h1>我是父组件</h1>

    <child ref='child'></child>
    <input type="button" value="获取子组件的数据" @click="getChildData" />
    <router-view></router-view>
  </div>
</template>

<script>
  import child from '@/components/demo/Child.vue'

  export default {

    components: {
      child
    },

    methods: {
      getChildData() {

        // console.log("获取到的子组件的数据是-"+this.$refs.child.msg)

        // this.$refs.child.myFun()
        this.$router.push('/child')

      }
    }

  }
</script>

<style>
  html,
  body {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    text-align: center;
  }
</style>
