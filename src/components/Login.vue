<template>

  <div class="login_bg">

    <el-form class="form-container b-p text_c" :model='form' ref='form' :rules="rules" label-position="left"
      label-width="80px">
      <h3 class="title">Fake Demo</h3>
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
            }).then(() => {
              this.$router.push('/home')
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

<style scoped>
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
    width: 100%;
    height: 100%;
  }

  .form-container {

    -webkit-border-radius: 5px;
    border-radius: 5px;
    -moz-border-radius: 5px;
    background-clip: padding-box;
    // margin: 0 auto;
    width: 330px;
    padding: 35px 35px 15px 35px;
    background: #fff;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 12px #cac6c6;
    text-align: center;
    margin: 0 auto;
    position: relative;
    top: 20%;
  }

  .title {

    margin: 0px auto 40px auto;
    text-align: center;
    color: #505458;
  }
</style>
