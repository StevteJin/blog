<template>
  <v-app>
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card>
              <v-toolbar dark color="primary">
                <v-toolbar-title>登录</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-form ref="form">
                  <!--这里为了防止浏览器自动填充表单 s-->
                  <input type="text" style="display:none;" name="username">
                  <input type="password" style="display:none;" name="password">
                  <!--这里为了防止浏览器自动填充表单 e-->
                  <v-text-field prepend-icon="person" label="用户名或者手机号" type="text" v-model="username" ref="username" :rules="[rules.required, rules.counter]"></v-text-field>
                  <v-text-field prepend-icon="lock" label="密码" type="password" v-model="password" ref="password" :rules="[rules.required, rules.counter]"></v-text-field>
                  <v-layout row justify-space-between>
                    <v-text-field prepend-icon="insert_photo" label="图形证码" type="text"  v-model="validation" ref="validation" :rules="[rules.required]"></v-text-field>
                    <v-btn block depressed class="button-right" @click="picturevalidation"><img :src="imgValidation" alt="" @click="picturevalidation"></v-btn>
                  </v-layout>
                </v-form>
              </v-card-text>
              <v-layout>
                <v-btn color="primary" block class="regist" @click="submit">登录</v-btn>
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
      rules: {
        required: value => !!value || '内容不能为空',
        counter: value => value.length <= 12 || '长度不得超过12位'
      },
      second: '获取验证码',
      validationShow: false,
      count: 70,
      imgValidation: '',
      formHasErrors: false
    };
  },
  created: function () {
    this.picturevalidation();
  },
  computed: {
    form () {
      return {
        username: this.username,
        password: this.password,
        validation: this.validation
      };
    }
  },
  methods: {
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
      if (this.$refs.form.validate()) {
        let url = '/login';
        const params = {
          user_name: this.username,
          password: this.password,
          validation: this.validation
        };
        this.axios
          .post(url, params)
          .then(response => {
            // console.log(JSON.stringify(response.data));
            if (response.data.code === 100) {
              this.$toast('恭喜您注册成功，移动站正在开发中，敬请期待');
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
