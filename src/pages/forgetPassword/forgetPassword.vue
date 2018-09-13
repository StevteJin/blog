<template>
  <div>
    <navbar :title="title"></navbar>
    <div class="contentbox" v-if="realySignup==false">
      <input class="input" type="text" placeholder="请输入11位手机号" v-model="mobile">
      <div class="prompt" v-if="show3==true">手机号不符合规则</div>
      <div class="validation">
        <input class="validation_text" type="text" placeholder="请输入验证码" v-model="validation" @blur="rightValidation">
        <div v-if="validationShow==false" class="validation_button" @click="validationNow">{{second}}</div>
        <div v-if="validationShow==true" :class="{validation_button:true,validation_button1:validationShow==true}">{{second}}<span>{{count}}s</span></div>
      </div>
      <input class="input" type="password" placeholder="6-12位（英文+数字）登录密码" v-model="password">
      <div class="prompt" v-if="show1==true">密码不符合规则</div>
      <input class="input" type="password" placeholder="确认登录密码" v-model="password1">
      <div class="prompt" v-if="show2==true">密码与上次不符</div>
      <div class="signup" @click="changePassword">确认</div>
    </div>
    <div class="contentbox" v-if="realySignup==true" style="font-size:20px;">恭喜您注册成功，移动站正在开发中</div>
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
      title: '忘记密码',
      password: '',
      password1: '',
      mobile: '',
      validation: '',
      second: '获取验证码',
      validationShow: false,
      count: 70,
      realySignup: false,
      timer: null,
      show1: false,
      show2: false,
      show3: false
    };
  },
  watch: {
    password: {
      handler: function (newValue, oldValue) {
        let reg = /(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]{6,12}/;
        if (newValue) {
          if (
            !reg.test(newValue.replace(/(^\s*)|(\s*$)/g, '')) || newValue.length > 12
          ) {
            this.show1 = true;
          } else {
            this.show1 = false;
          }
        }
      },
      deep: true
    },
    password1: {
      handler: function (newValue, oldValue) {
        if (newValue) {
          if (
            newValue !== this.password
          ) {
            this.show2 = true;
          } else {
            this.show2 = false;
          }
        }
      },
      deep: true
    },
    mobile: {
      handler: function (newValue, oldValue) {
        let reg = /^[1][3,4,5,7,8][0-9]{9}$/;
        if (newValue) {
          if (!reg.test(newValue)) {
            this.show3 = true;
          } else {
            this.show3 = false;
          }
        }
      },
      deep: true
    }
  },
  mounted: function () {},
  methods: {
    validationNow: function () {
      if (this.mobile !== '' && this.show3 === false) {
        this.axios
          .post('/getregmsg', {
            mobile: this.mobile
          })
          .then(response => {
            // console.log(JSON.stringify(response.data));
            console.log(typeof (response.data.code));
            if (response.data.code === 100) {
              this.second = '已发送';
              this.validationShow = true;
              this.timer = setInterval(() => {
                if (this.count > 0 && this.count <= 70) {
                  this.count--;
                } else {
                  clearInterval(this.timer);
                  this.validationShow = false;
                  this.second = '获取验证码';
                  this.timer = null;
                  this.count = 70;
                }
              }, 1000);
            } else { this.$toast(response.data.msg); }
          })
          .catch(function (error) {
            console.log(error);
          });
      }
    },
    rightValidation: function () {
      if (this.mobile !== '' && this.validation !== '') {
        this.axios
          .post('url', {
            mobile: this.mobile,
            captcha: this.validation
          })
          .then(response => {
            // console.log(JSON.stringify(response.data));
            this.$toast(response.data.msg);
          })
          .catch(function (error) {
            console.log(error);
          });
      }
    },
    changePassword: function () {
      if (
        this.password1 !== '' && this.validation !== '' && this.mobile !== '' && this.show1 === false && this.show2 === false && this.show3 === false
      ) {
        this.axios
          .post('url', {
            mobile: this.mobile,
            captcha: this.validation,
            password: this.password1
          })
          .then(response => {
            // console.log(JSON.stringify(response.data));
            if (response.data.code === 100) {
              this.$toast(response.data.msg);
              this.realySignup = true;
            } else {
              this.$toast(response.data.msg);
            }
          })
          .catch(function (error) {
            console.log(error);
          });
      }
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
  .prompt {
    flex: 0 0 285px;
    height: 40px;
    padding-left:16px;
    line-height:40px;
    font-size:12px;
    color:#C80E42;
  }
  .input::-webkit-input-placeholder {
    color: #D6D6D6;
    font-size: 12px;
  }
  .validation{
    flex: 0 0 285px;
    height: 40px;
    margin-top: 14px;
    display: flex;
    justify-content: space-between;
  }
  .validation_text::-webkit-input-placeholder {
    color: #D6D6D6;
    font-size: 12px;
  }
  .validation_text{
    flex:0 0 170px;
    height:40px;
    color: #D6D6D6;
    background-color:#F6F5F5;
    border-radius: 20px;
    line-height:40px;
    box-sizing: border-box;
    padding-left:16px;
  }
  .validation_button{
    flex:0 0 100px;
    height:40px;
    border:1px solid #258CE3;
    color:#258CE3;
    border-radius: 20px;
    line-height:40px;
    text-align: center;
    box-sizing: border-box;
    font-size:13px;
  }
  .validation_button1{
    border:1px solid #D6D6D6;
    color:#D6D6D6;
  }
  .signup {
    flex: 0 0 285px;
    height: 40px;
    margin-top: 14px;
    background-color:#258CE3;
    color:#FFFFFF;
    border-radius: 20px;
    line-height:40px;
    font-size:12px;
    box-sizing: border-box;
    font-size:13px;
    text-align: center;
  }
</style>
