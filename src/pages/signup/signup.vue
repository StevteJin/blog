<template>
  <v-app>
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card>
              <v-toolbar dark color="primary">
                <v-toolbar-title>注册</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <!--这里为了防止浏览器自动填充表单 s-->
                  <input type="text" style="display:none;" name="username">
                  <input type="password" style="display:none;" name="password">
                  <!--这里为了防止浏览器自动填充表单 e-->
                  <v-text-field prepend-icon="person" label="用户名8-12位（英文+数字）" type="text" v-model="username" ref="username" :rules="[rules.required, rules.counter,rules.username]"></v-text-field>
                  <v-text-field prepend-icon="lock" label="密码" type="password" v-model="password" ref="password" :rules="[rules.required, rules.counter,rules.password]"></v-text-field>
                  <v-text-field prepend-icon="lock" label="确认密码" type="password" v-model="password1" ref="password1" :rules="[rules.required, rules.counter,rules.password1]"></v-text-field>
                  <v-text-field prepend-icon="phonelink_ring" label="手机号" type="text"  v-model="mobile" ref="mobile" :rules="[rules.required, rules.counter,rules.mobile]"></v-text-field>
                  <v-layout row justify-space-between>
                    <v-text-field prepend-icon="phonelink_setup" label="手机验证码" type="text"  v-model="validation" ref="validation" :rules="[rules.required]"></v-text-field>
                    <v-btn color="primary" block depressed class="button-right"  @click="validationNow"  v-if="validationShow==false">{{second}}</v-btn>
                    <v-btn disabled block depressed class="button-right"  @click="validationNow"  v-if="validationShow==true">{{second}}<span>{{count}}s</span></v-btn>
                  </v-layout>
                  <v-layout row justify-space-between>
                    <v-text-field prepend-icon="insert_photo" label="图形证码" type="text"  v-model="validation1" ref="validation1" :rules="[rules.required]"></v-text-field>
                    <img src="" alt="">
                    <v-btn color="primary" block depressed class="button-right"></v-btn>
                  </v-layout>
                </v-form>
              </v-card-text>
              <v-layout>
                <v-btn color="primary" block class="regist" @click="submit">注册</v-btn>
              </v-layout>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  data: function () {
    return {
      username: '',
      password: '',
      password1: '',
      mobile: '',
      validation: '',
      validation1: '',
      rules: {
        required: value => !!value || '内容不能为空',
        counter: value => value.length <= 20 || '长度不得超过12位',
        username: value => {
          const pattern = /(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]{8,12}/;
          return pattern.test(value) || '用户名不符合规则';
        },
        password: value => {
          const pattern = /(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]{6,12}/;
          return pattern.test(value) || '密码不符合规则';
        },
        password1: value => {
          return value === this.password || '两次密码必须一致';
        },
        mobile: value => {
          const pattern = /^[1][3,4,5,7,8][0-9]{9}$/;
          return pattern.test(value) || '手机号不符合规则';
        }
      },
      second: '获取验证码',
      validationShow: false,
      count: 70,
      imgValidation: '',
      formHasErrors: false
    };
  },
  computed: {
    form () {
      return {
        username: this.username,
        password: this.password,
        password1: this.password1,
        mobile: this.mobile,
        validation: this.validation,
        validation1: this.validation1
      };
    }
  },
  methods: {
    validationNow: function () {
      if (this.mobile !== '') {
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
        // 前后端分离请求要携带cookie必须带这个
        withCredentials: true
      });
      instance();
    },
    submit () {
      console.log(222);
      this.formHasErrors = false;
      Object.keys(this.form).forEach(f => {
        console.log(f);
        if (!this.form[f]) {
          this.formHasErrors = true;
          this.$refs[f].validate(true);
        };
      });
    }
  }
};
</script>

<style scoped>
.button-right {
  height: 43px;
  margin-left: 10px;
}
.regist {
  margin-left: 18px;
  margin-right: 18px;
  margin-bottom:40px;
}
</style>
