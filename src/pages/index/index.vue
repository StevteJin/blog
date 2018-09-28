<template>
  <div>
    <navbar></navbar>
    <article>
      <aside class="l_box">
          <div class="about_me">
            <h2>关于我</h2>
            <ul v-for="(item,index) in aboutMine" :key="index">
              <i><img :src="item.photo"></i>
              <p>{{item.description}}</p>
            </ul>
          </div>
          <div class="wdxc">
            <h2>我的相册</h2>
            <ul>
              <li v-for="(item,index) in photoList" :key="index"><a href="/"><img :src="item.img" alt=""></a></li>
            </ul>
          </div>
          <!-- <div class="search">
            <form action="/e/search/index.php" method="post" name="searchform" id="searchform">
              <input name="keyboard" id="keyboard" class="input_text" value="请输入关键字词" style="color: rgb(153, 153, 153);" onfocus="if(value=='请输入关键字词'){this.style.color='#000';value=''}" onblur="if(value==''){this.style.color='#999';value='请输入关键字词'}" type="text">
              <input name="show" value="title" type="hidden">
              <input name="tempid" value="1" type="hidden">
              <input name="tbname" value="news" type="hidden">
              <input name="Submit" class="input_submit" value="搜索" type="submit">
            </form>
          </div> -->
          <div class="fenlei">
            <h2>文章分类</h2>
            <ul>
              <li v-for="(item,index) in classify" :key="index"><a href="/">{{item.articleTypeName}}({{item.articleNum}})</a></li>
            </ul>
          </div>
          <div class="tuijian">
            <h2>站长推荐</h2>
            <ul>
              <li v-for="(item,index) in articleList" :key="index"><a href="/">{{item.title}}</a></li>
            </ul>
          </div>
          <div class="links">
            <h2>友情链接</h2>
            <ul>
              <a :href="item.href" v-for="(item,index) in friendShip" :key="index">{{item.name}}</a>
            </ul>
          </div>
          <div class="guanzhu">
            <h2>关注我 么么哒</h2>
            <ul>
              <img src="../../../static/img/wx.jpg">
            </ul>
          </div>
      </aside>
      <main class="r_box">
        <li v-for="(item,index) in articleList" :key="index"><i><a href="/"><img :src="item.articleImg"></a></i>
          <h3><a href="/"><span class="hot">站长推荐=></span>{{item.title}}</a></h3>
          <p>{{item.description}}</p>
        </li>
      </main>
    </article>
    <bottomfooter></bottomfooter>
  </div>
</template>

<script>
import navbar from '@/components/navbar';
import bottomfooter from '@/components/footer';
export default {
  components: {
    navbar,
    bottomfooter
  },
  data: function () {
    return {
      articleList: '',
      classify: '',
      photoList: '',
      friendShip: '',
      aboutMine: ''
    };
  },
  mounted: function () {
    this.getPhotoList();
    this.getArticleList();
    this.getClassfy();
    this.getFriendShip();
    this.getAbout();
  },
  methods: {
    // 个人介绍
    getAbout: function () {
      this.axios
        .post('/about')
        .then(response => {
          console.log(response.data);
          this.aboutMine = response.data.data;
        });
    },
    // 相册
    getPhotoList: function () {
      this.axios
        .post('/photoAlbum')
        .then(response => {
          console.log(response.data);
          this.photoList = response.data.data;
        });
    },
    // 文章列表，站长推荐
    getArticleList: function () {
      this.axios
        .post('/tenList')
        .then(response => {
          console.log(response.data);
          this.articleList = response.data.data;
        });
    },
    // 文章分类
    getClassfy: function () {
      this.axios
        .post('/classfy')
        .then(response => {
          console.log(response.data);
          this.classify = response.data.data;
        });
    },
    // 友情链接
    getFriendShip: function () {
      this.axios
        .post('/friendShip')
        .then(response => {
          console.log(response.data);
          this.friendShip = response.data.data;
        });
    }
  }
};
</script>

<style scoped>
@import '../../assets/css/common.css';
.about_me img { width: 100% }
.about_me p { line-height: 24px; font-size: 14px }
.about_me i { width: 120px; float: left; clear: left; margin-right: 10px; height: 90px; overflow: hidden }
.wdxc li { width: 32%; overflow: hidden; float: left; height: 80px; margin-bottom: 2px; margin-right: 2px }
.wdxc li img {width: 100%; height:100%; -webkit-transition: all 0.5s; -moz-transition: all 0.5s; transition: all 0.5s; }
.wdxc li img:hover { transform: scale(1.05) }
.hot{color:crimson;font-size:12px;}
</style>
