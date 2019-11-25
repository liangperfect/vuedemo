<template>

  <div>
    <p>子类组件的值asd</p>
    <p>从父类获取到的数据是{{myName}}</p>
    <p>computeddsa返回的数据是:{{myChild}}</p>
    <p>data里面的数据{{myChild2}}</p>
  </div>
</template>

<script>
  export default {
    props: {
      myName: String
    },
    name: 'HelloWorld',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    computed: {

      myChild() {

        return this.myName + "props里面改变后的数据"
      },

      myChild2() {

        return this.msg + "data里面的数据"
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1,
  h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
