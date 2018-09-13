<template>
  <div>
    <navbar :title="title"></navbar>
    <div class="contentbox" v-if="realySignup==false">
      <input class="input" type="text" placeholder="请输入用户名或绑定的手机号" v-model="username">
      <input class="input" type="password" placeholder="请输入密码" v-model="password">
      <div class="remember">
        <div class="remember_text">
          <input id="password" class="rdo" type="checkbox" value="5"><label for="password">自动登录</label>
        </div>
        <div class="remember_text forget_password" @click="toForgetPassword">忘记密码</div>
      </div>
      <div class="login" @click="loginNow">登录</div>
      <div class="to_signup">还没有账号？立即<span @click="toSignup">注册</span></div>
      <div class="line"><span>第三方登录</span></div>
      <div class="third_login">
        <div class="third">
          <img src="../../assets/img/wechat.png" alt="">
          <div>微信</div>
        </div>
        <div class="third">
          <img src="../../assets/img/qq.png" alt="">
          <div>QQ</div>
        </div>
        <div class="third">
          <img src="../../assets/img/microblog.png" alt="">
          <div>微博</div>
        </div>
      </div>
    </div>
    <div class="contentbox" v-if="realySignup==true" style="font-size:20px;">恭喜您登录成功，移动站正在开发中</div>
  </div>
</template>

<script>
import navbar from '@/components/navbar.vue';

export default {
  components: {
    navbar
  },
  data: function () {
    return {
      title: '登录',
      username: '',
      password: '',
      realySignup: false
    };
  },
  mounted: function () {},
  methods: {
    loginNow: function () {
      this.axios
        .post('url', {
          user_name: this.username,
          password: this.password
        })
        .then(response => {
          console.log(typeof (response.data.code));
          if (response.data.code === 100) {
            this.realySignup = true;
          } else {
            this.$toast(response.data.msg);
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    toForgetPassword: function () {
      this.$router.push({
        path: '/forgetpassword'
      });
    },
    toSignup: function () {
      this.$router.push({
        path: '/signup'
      });
    }
  }
};
</script>

<style lang="scss" scoped>
  .contentbox {
    display: flex;
    justify-content: center;
    flex:0 0 375px;
    flex-wrap:wrap;
  }

  .logo {
    flex: 0 0 285px;
    height: 70px;
    margin-top: 50px;
    margin-bottom:60px;
  }
  .input {
    flex: 0 0 285px;
    height: 40px;
    margin-top: 14px;
    background-color:#F6F5F5;
    color:#D6D6D6;
    border-radius: 20px;
    padding-left:16px;
    line-height:40px;
    font-size:12px;
    box-sizing: border-box;
  }
  .input::-webkit-input-placeholder {
    color: #D6D6D6;
    font-size: 12px;
  }
  .remember{
    flex: 0 0 285px;
    height: 40px;
    display: flex;
    justify-content: space-between;
  }
  .remember .remember_text{
    flex:0 0 50%;
    height:40px;
    line-height:40px;
  }
  .remember .forget_password{
    color:#C80E42;
    text-decoration: underline;
    text-align: right;
  }
  .remember .remember_text input{
    width:15px;
    height:15px;
    display: inline-block;
    box-sizing: border-box;
    vertical-align:middle;
  }
  .remember .remember_text label{
    display: inline-block;
    margin-left:4px;
    line-height:40px;
    font-size:13px;
    color:#666666;
    vertical-align:middle;
  }
  .login {
    flex: 0 0 285px;
    height: 40px;
    background-color:#258CE3;
    color:#FFFFFF;
    border-radius: 20px;
    line-height:40px;
    font-size:12px;
    box-sizing: border-box;
    font-size:13px;
    text-align: center;
  }
  .line{
    flex: 0 0 285px;
    height: 40px;
    line-height:40px;
    display: flex;
    justify-content: space-between;
    position: relative;
  }
  .line:before{
    height:1px;
    background-color:#D9D9D9;
    content: '';
    width: 33.33%;
    position: absolute;
    top:49%;
    left:0;
  }
  .line:after{
    height:1px;
    background-color:#D9D9D9;
    content: '';
    width:33.33%;
    position: absolute;
    top:49%;
    right:0;
  }
  .line span{
    width:33.33%;
    position: absolute;
    left:33.33%;
    text-align: center;
    font-size:12px;
    color:#999999;
  }
  .to_signup{
    flex: 0 0 285px;
    height: 40px;
    text-align: center;
    color:#D6D6D6;
    font-size:12px;
    line-height:40px;
  }
  .to_signup span{
    color:#C80E42;
    text-decoration: underline;
  }
  .third_login{
    flex: 0 0 285px;
    display: flex;
    justify-content: space-between;
  }
  .third{
    flex:0 0 33.33%;
    margin-top:16px;
  }
  .third img{
    width:35px;
    height:35px;
    margin:0 auto;
  }
  .third div{
    text-align: center;
    color:#6F788D;
    margin-top:8px;
  }
</style>
