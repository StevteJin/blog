<template>
  <div>
    <navbar></navbar>
    <article>
        <aside class="l_box">
            <about-me></about-me>
            <wdxc></wdxc>
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
            <guanzhu></guanzhu>
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
// 个人简介
import aboutMe from '@/components/aboutMe';
// 文章分类
import fenlei from '@/components/fenlei';
// 相册分类
import wdxc from '@/components/wdxc';
// 关注
import guanzhu from '@/components/guanzhu';
export default {
  components: {
    navbar,
    bottomfooter,
    aboutMe,
    fenlei,
    wdxc,
    guanzhu
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
