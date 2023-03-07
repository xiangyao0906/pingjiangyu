<template>

  <div class="login">


    <div class="login-box">
      <div class="top">
        <div class="logo"><img src="../assets/img/liaoning_basketball.png" alt="辽宁三生制药飞豹篮球俱乐部"
                               style="width: 40%;height: 40%"></div>
      </div>

      <div class="mid">

        <el-form :model="dataForm"
                 :rules="dataRule"
                 ref="dataForm"
                 status-icon>
          <el-form-item prop="username">
            <el-input class="info"
                      v-model="dataForm.username"
                      placeholder="帐号"></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input class="info"
                      v-model="dataForm.password"
                      type="password"
                      placeholder="密码"></el-input>
          </el-form-item>
          <el-form-item>
            <div class="item-btn"><input type="button"
                                         value="登录"
                                         @click="dataFormSubmit()"></div>
          </el-form-item>
        </el-form>


      </div>

      <div class="bottom">Copyright © 2023 长江实业有限公司</div>
    </div>


  </div>
</template>

<script>


export default {

  name: 'HelloWorld',
  props: {
    msg: String


  },
  data() {
    return {
      dataForm: {
        username: '',
        password: ''
      },
      dataRule: {
        username: [
          {required: true, message: '帐号不能为空', trigger: 'blur'}
        ],
        password: [
          {required: true, message: '密码不能为空', trigger: 'blur'}
        ]
      }
    }
  },
  methods: {
    dataFormSubmit: {}
  }

}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">

.login {
  width: 100%;
  height: 100%;
  background: url(~@/assets/img/login-bg.png) no-repeat;
  background-size: cover;
  position: fixed;
  top: 0;
  left: 0;

}

.login .login-box {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  height: 100%;
}

.login .login-box .top {
  text-align: center;
}

.login .login-box .top .logo {
  font-size: 0;
  width: fit-content;
}


.login .login-box .mid {
  font-size: 14px;
  width: 50%;
  margin: auto;


}

.login .login-box .mid .item-btn {
  margin-top: 20px;
}

.login .login-box .mid .item-btn input {
  border: 0;
  width: 100%;
  height: 40px;
  box-shadow: 0;
  background: #1f87e8;
  color: #fff;
  border-radius: 3px;
}

.info {
  width: 210px;
}

.login-captcha {
  height: 40px;
}

.login .login-box .bottom {
  position: absolute;
  bottom: 10%;
  width: 100%;
  color: #999;
  font-size: 12px;
  text-align: center;
}
</style>
