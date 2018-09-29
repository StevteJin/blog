<template>
  <div>
    <navbar></navbar>
    <article>
      <aside class="l_box">
        <div class="search">
            <form action="/e/search/index.php" method="post" name="searchform" id="searchform">
                <input name="keyboard" id="keyboard" class="input_text" value="请输入关键字词" style="color: rgb(153, 153, 153);" onfocus="if(value=='请输入关键字词'){this.style.color='#000';value=''}" onblur="if(value==''){this.style.color='#999';value='请输入关键字词'}" type="text">
                <input name="show" value="title" type="hidden">
                <input name="tempid" value="1" type="hidden">
                <input name="tbname" value="news" type="hidden">
                <input name="Submit" class="input_submit" value="搜索" type="submit">
            </form>
        </div>
        <fenlei></fenlei>
        <hot-article></hot-article>
        <div class="tuijian">
          <h2>点击排行</h2>
          <ul>
            <li v-for="(item,index) in hotRead" :key="index"><a href="/">{{item.title}}</a></li>
          </ul>
        </div>
        <div class="cloud">
          <h2>标签云</h2>
            <ul>
              <a href="/">陌上花开</a> <a href="/">校园生活</a> <a href="/">html5</a> <a href="/">SumSung</a> <a href="/">青春</a> <a href="/">温暖</a> <a href="/">阳光</a> <a href="/">三星</a><a href="/">索尼</a> <a href="/">华维荣耀</a> <a href="/">三星</a> <a href="/">索尼</a>
            </ul>
        </div>
        <guanzhu></guanzhu>
      </aside>
      <main class="r_box">
        <li v-for="(item,index) in articleList" :key="index">
          <i><a href="/"><img :src="item.articleImg" alt=""></a></i>
          <h3><a href="/">{{item.title}}</a></h3>
          <p>{{item.description}}</p>
        </li>
        <pager v-if="pageSize" :pageSize="pageSize" v-model="pageNo" @on-jump="jump"></pager>
      </main>
    </article>
    <bottomfooter></bottomfooter>
  </div>
</template>

<script>
import navbar from '@/components/navbar';
import bottomfooter from '@/components/footer';
// 文章分类
import fenlei from '@/components/fenlei';
// 站长推荐
import hotArticle from '@/components/hotArticle';
// 关注
import guanzhu from '@/components/guanzhu';
import pager from '@/components/pager';
export default {
  components: {
    navbar,
    bottomfooter,
    fenlei,
    hotArticle,
    guanzhu,
    pager
  },
  data: function () {
    return {
      pageSize: '',
      pageNo: 1,
      articleList: '',
      hotRead: ''
    };
  },
  mounted: function () {
    this.getHotRead();
    this.getArticleList();
  },
  // 接收跳转事件
  methods: {
    jump: function (id) {
      console.log(id);
    },
    getArticleList: function () {
      this.axios
        .post('/article', {
          page: this.pageNo
        })
        .then(response => {
          console.log(response.data);
          this.articleList = response.data.data;
          this.pageSize = parseInt(response.data.count / 8) + 1;
        });
    },
    getHotRead: function () {
      this.axios
        .post('/hotRead')
        .then(response => {
          console.log(response.data);
          this.hotRead = response.data.data;
        });
    }
  }
};
</script>

<style scoped>
@import '../../assets/css/common.css';
.tuijian li { text-overflow: ellipsis; white-space: nowrap; overflow: hidden; margin-bottom: 5px; background: url(../../../static/img/li.png) left center no-repeat; padding-left: 20px }
@media screen and (min-width: 960px) and (max-width: 1023px) {
  .tuijian { width: 270px; }
}
</style>
