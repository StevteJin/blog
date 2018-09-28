<template>
  <div>
    <navbar></navbar>
    <article>
      <aside class="l_box">
          <about-me></about-me>
          <wdxc></wdxc>
          <!-- <div class="search">
            <form action="/e/search/index.php" method="post" name="searchform" id="searchform">
              <input name="keyboard" id="keyboard" class="input_text" value="请输入关键字词" style="color: rgb(153, 153, 153);" onfocus="if(value=='请输入关键字词'){this.style.color='#000';value=''}" onblur="if(value==''){this.style.color='#999';value='请输入关键字词'}" type="text">
              <input name="show" value="title" type="hidden">
              <input name="tempid" value="1" type="hidden">
              <input name="tbname" value="news" type="hidden">
              <input name="Submit" class="input_submit" value="搜索" type="submit">
            </form>
          </div> -->
          <fenlei></fenlei>
          <hot-article></hot-article>
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
// 个人简介
import aboutMe from '@/components/aboutMe';
// 文章分类
import fenlei from '@/components/fenlei';
// 相册分类
import wdxc from '@/components/wdxc';
// 站长推荐
import hotArticle from '@/components/hotArticle';
export default {
  components: {
    navbar,
    bottomfooter,
    aboutMe,
    fenlei,
    wdxc,
    hotArticle
  },
  data: function () {
    return {
      articleList: '',
      friendShip: ''
    };
  },
  mounted: function () {
    this.getArticleList();
    this.getFriendShip();
  },
  methods: {
    // 文章列表
    getArticleList: function () {
      this.axios
        .post('/tenList')
        .then(response => {
          console.log(response.data);
          this.articleList = response.data.data;
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
.hot{color:crimson;font-size:12px;}
</style>
