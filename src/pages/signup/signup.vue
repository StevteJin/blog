<template>
  <div>
    <navbar :title="title"></navbar>
    <div class="contentbox" v-if="realySignup==false">
      <input class="input" type="text" placeholder="请输入8-12位（英文+数字）用户名" v-model="username" @blur="isSameName">
      <div class="prompt" v-if="show0==true">用户名不符合规则</div>
      <div class="prompt" v-if="show4==true">该用户已注册</div>
      <input class="input" type="password" placeholder="6-12位（英文+数字）登录密码" v-model="password">
      <div class="prompt" v-if="show1==true">密码不符合规则</div>
      <input class="input" type="password" placeholder="确认登录密码" v-model="password1">
      <div class="prompt" v-if="show2==true">密码与上次不符</div>
      <input class="input" type="text" placeholder="请输入11位手机号" v-model="mobile">
      <div class="prompt" v-if="show3==true">手机号不符合规则</div>
      <div class="validation">
        <input class="validation_text" type="text" placeholder="请输入验证码" v-model="validation">
        <div v-if="validationShow==false" class="validation_button" @click="validationNow">{{second}}</div>
        <div v-if="validationShow==true" :class="{validation_button:true,validation_button1:validationShow==true}">{{second}}<span>{{count}}s</span></div>
      </div>
      <div class="validation">
        <input class="validation_text" type="text" placeholder="请输入图像验证码" v-model="validation1">
        <img class="validation_pictrue" :src="imgValidation" alt="" @click="picturevalidation">
      </div>
      <div class="signup" @click="signupNow">注册</div>
      <div class="to_login">已有账号？立即<span @click="toLogin">登录</span></div>
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
      title: '注册',
      username: '',
      password: '',
      password1: '',
      mobile: '',
      validation: '',
      validation1: '',
      imgValidation: '',
      second: '获取验证码',
      validationShow: false,
      count: 70,
      realySignup: false,
      timer: null,
      show0: false,
      show1: false,
      show2: false,
      show3: false,
      show4: false
    };
  },
  watch: {
    username: {
      handler: function (newValue, oldValue) {
        let reg = /(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]{8,12}/;
        if (newValue) {
          if (
            !reg.test(newValue.replace(/(^\s*)|(\s*$)/g, '')) || newValue.length > 12
          ) {
            this.show0 = true;
          } else {
            this.show0 = false;
          }
        }
      },
      deep: true
    },
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
  created: function () {
    this.picturevalidation();
  },
  mounted: function () {},
  methods: {
    // 验证用户名是否重名
    isSameName: function () {
      if (this.username !== '' & this.show0 === false) {
        this.axios
          .post(
            '/username',
            {
              user_name: this.username
            }
          )
          .then(response => {
            // console.log(JSON.stringify(response.data));
            if (response.data.code === 101) {
              this.show4 = true;
            } else {
              this.show4 = false;
            }
          })
          .catch(function (error) {
            console.log(error);
          });
      }
    },
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
    picturevalidation: function () {
      // this.axios
      //   .get('/getPicture')
      //   .then(response => {
      //     this.imgValidation = response.data.data;
      //   });
      let that = this;
      const instance = this.axios.create({
        url: '/getPicture',
        method: 'get',
        transformResponse: [function (data) {
          // 对 data 进行任意转换处理
          // console.log(typeof (data));
          that.imgValidation = JSON.parse(data).data;
          console.log(that.imgValidation);
        }],
        withCredentials: true
      });
      instance();
    },
    signupNow: function () {
      if (this.username !== '' && this.password1 !== '' && this.validation !== '' && this.mobile !== '' && this.show0 === false && this.show1 === false && this.show2 === false && this.show3 === false && this.show4 === false) {
        let url = '/signup';
        const params = {
          mobile: this.mobile,
          password: this.password1,
          mobile_code: this.validation,
          user_name: this.username
        };
        this.axios
          .post(url, params)
          .then(response => {
            // console.log(JSON.stringify(response.data));
            if (response.data.code === 100) {
              this.$toast('恭喜您注册成功，移动站正在开发中，敬请期待');
              this.realySignup = true;
              this.title = '公告';
            } else {
              this.$toast(response.data.msg);
            }
          })
          .catch(function (error) {
            console.log(error);
          });
      }
    },
    toLogin: function () {
      this.$router.push({
        path: '/login'
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
  .validation_pictrue{
    flex:0 0 100px;
    height:40px;
    border:1px solid #258CE3;
    line-height:40px;
    text-align: center;
    box-sizing: border-box;
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
  .to_login{
    flex: 0 0 285px;
    height: 40px;
    text-align: center;
    color:#D6D6D6;
    font-size:12px;
    line-height:40px;
  }
  .to_login span{
    color:#C80E42;
    text-decoration: underline;
  }
  /*单选框样式 s*/
  .rdo {
    width: 22px;
    height: 0px;
    background-color: #E1E1E1;
    border-radius: 50%;
    position: relative;
    top:9px;
}
.rdo:before,.rdo:after {
    content: '';
    display: block;
    position: absolute;
    border-radius: 50%;
    transition: .3s ease;
}
.rdo:before {
    top: 0px;
    left: 0px;
    width: 18px;
    height: 18px;
    background-color: #fff;
    border: 1px solid #E1E1E1;
}
.rdo:after {
    top: 6px;
    left: 6px;
    width: 8px;
    height: 8px;
    background-color: #fff;
}
.rdo:checked:after {
    top: 4px;
    left: 4px;
    width: 12px;
    height: 12px;
    background-color:#333333;
}
.rdo:checked:before {
    border-color:#333333;
}
/*单选框样式 e*/
</style>
