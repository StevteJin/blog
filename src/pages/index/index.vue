<template>
  <div>
    <navbar></navbar>
    <article>
      <aside class="l_box">
          <div class="about_me">
            <h2>关于我</h2>
            <ul>
              <i><img src="../../../static/img/1.jpg"></i>
              <p><b>青松</b>，一个80后草根男站长！15年入行。一直潜心研究web前端技术，一边工作一边积累经验，分享一些技术心得。</p>
            </ul>
          </div>
          <div class="wdxc">
            <h2>我的相册</h2>
            <ul>
              <li><a href="/"><img src="../../../static/img/1.jpg"></a></li>
              <li><a href="/"><img src="../../../static/img/1.jpg"></a></li>
              <li><a href="/"><img src="../../../static/img/1.jpg"></a></li>
              <li><a href="/"><img src="../../../static/img/1.jpg"></a></li>
              <li><a href="/"><img src="../../../static/img/1.jpg"></a></li>
              <li><a href="/"><img src="../../../static/img/1.jpg"></a></li>
            </ul>
          </div>
          <div class="search">
            <form action="/e/search/index.php" method="post" name="searchform" id="searchform">
              <input name="keyboard" id="keyboard" class="input_text" value="请输入关键字词" style="color: rgb(153, 153, 153);" onfocus="if(value=='请输入关键字词'){this.style.color='#000';value=''}" onblur="if(value==''){this.style.color='#999';value='请输入关键字词'}" type="text">
              <input name="show" value="title" type="hidden">
              <input name="tempid" value="1" type="hidden">
              <input name="tbname" value="news" type="hidden">
              <input name="Submit" class="input_submit" value="搜索" type="submit">
            </form>
          </div>
          <div class="fenlei">
            <h2>文章分类</h2>
            <ul>
              <li v-for="(item,index) in classify" :key="index"><a href="/">{{item.articleTypeName}}({{item.articleNum}})</a></li>
            </ul>
          </div>
          <div class="tuijian">
            <h2>站长推荐</h2>
            <ul>
              <li><a href="/">你是什么人便会遇上什么人</a></li>
              <li><a href="/">帝国cms 列表页调用子栏目，没有则不显示栏目名称</a></li>
              <li><a href="/">第二届 优秀个人博客模板比赛参选活动</a></li>
              <li><a href="/">个人博客模板《绅士》后台管理</a></li>
              <li><a href="/">你是什么人便会遇上什么人</a></li>
              <li><a href="/">帝国cms 列表页调用子栏目，没有则不显示栏目名称</a></li>
              <li><a href="/">第二届 优秀个人博客模板比赛参选活动</a></li>
              <li><a href="/">个人博客模板《绅士》后台管理</a></li>
            </ul>
          </div>
          <div class="links">
            <h2>友情链接</h2>
            <ul>
              <a href="http://www.yangqq.com">青松个人博客</a> <a href="http://www.yangqq.com">青松博客</a>
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
          <h3><a href="/">{{item.title}}</a></h3>
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
      classify: ''
    };
  },
  mounted: function () {
    this.getArticleList();
    this.getClassfy();
  },
  methods: {
    getArticleList: function () {
      this.axios
        .post('/tenList')
        .then(response => {
          console.log(response.data);
          this.articleList = response.data.data;
        });
    },
    getClassfy: function () {
      this.axios
        .post('/classfy')
        .then(response => {
          console.log(response.data);
          this.classify = response.data.data;
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
</style>
