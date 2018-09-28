<template>
  <div>
    <navbar></navbar>
    <article>
        <aside class="l_box">
            <div class="about_me">
            <h2>关于我</h2>
            <ul>
                <i><img :src="aboutMine.photo"></i>
                <p>{{aboutMine.description}}</p>
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
                <li><a href="/">学无止境（33）</a></li>
                <li><a href="/">日记（19）</a></li>
                <li><a href="/">慢生活（520）</a></li>
                <li><a href="/">美文欣赏（40）</a></li>
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
            <div class="about" v-html="aboutMine.content"></div>
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
      aboutMine: ''
    };
  },
  mounted: function () {
    this.getAbout();
  },
  methods: {
    // 个人介绍
    getAbout: function () {
      this.axios
        .post('/about')
        .then(response => {
          console.log(response.data);
          this.aboutMine = response.data.data[0];
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
.about { padding: 20px; background: rgba(255,255,255,0.8); margin-bottom: 20px; }
.about img { max-width: 500px; margin: 20px 0; width: 100% }
</style>
