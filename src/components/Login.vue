<template>

  <div class="login_bg">

    <h1>Fake Demo</h1>
    <el-form :model='form' ref='form' :rules="rules" label-width="80px">
      <el-form-item prop='userName' label="用户名:">
        <el-input v-model="form.userName"></el-input>
      </el-form-item>

      <el-form-item prop='password' label="密码:">
        <el-input v-model="form.password"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="login('form')">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  import helloworld from '@/components/demo/HelloWorld.vue'

  export default {

    data() {

      return {
        form: {
          userName: "",
          password: ""
        },
        rules: {
          userName: [{
            required: true,
            message: '请输入用户名',
            trigger: 'blur'
          }],
          password: [{
            required: true,
            message: '请输入密码',
            trigger: 'change'
          }]
        }
      }
    },
    components: {
      helloworld
    },
    methods: {

      login(formName) {

        this.$refs[formName].validate((valid) => {

          if (valid) {
            console.log('valid' + valid)
            this.$confirm('是否确认提交', {
              confirmButtonText: '确定',
              cancelButtonText: '取消'
            })
          } else {

            this.$message({

              showClose: true,
              message: '账号或者密码不能为空',
              type: 'error'
            })
          }
        })
      }
    },
  }
</script>

<style>
  html,
  body {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    /* background-color: #42B983; */
    text-align: center;
  }

  .login_bg {

    /* background-color: #42B983; */
    width: 50%;
  }
</style>
