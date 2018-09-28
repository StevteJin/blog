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
<div class="gbook">
      <div class="fb">
        <ul>
          <p class="fbtime"><span> 2018-07-21 </span> 夜月归途</p>
          <p class="fbinfo">从青姐朋友圈分享的文章《我为什么要做个人网站》过来的，自习看了下你的网站非常不错，看的出来你一直在坚持!</p>
        </ul>
      </div>
      <div class="hf">
        <ul>
          <p class="zzhf"><font color="#FF0000">站长回复:</font>感谢捧场啊！看了你的网站，有两个月没更新了哦~</p>
        </ul>
      </div>
      <div class="fb">
        <ul>
          <p class="fbtime"><span> 2018-07-10 </span> 周宏</p>
          <p class="fbinfo">读《从今日起，我永久卸载今日头条》有感。正如作者所说，这个APP抓住了很多人性的特点，在简单、重复、爽这三点上做到了极致。但是我认为永久卸载这个想法比较荒诞，任何东西你只要有自控力，就能将它为我所用。曾经一度我也是刷头条根本停不下来</p>
        </ul>
      </div>
      <div class="hf">
        <ul>
          <p class="zzhf"><font color="#FF0000">站长回复:</font>嗯，我也是自制力有限，删除头条就是矫枉过正而已，这个因人而异，不强求他人，也不想标题党。</p>
        </ul>
      </div>
      <div class="fb">
        <ul>
          <p class="fbtime"><span> 2018-07-09 </span> 文颖</p>
          <p class="fbinfo">加油吖</p>
        </ul>
      </div>
      <div class="hf">
        <ul>
          <p class="zzhf"><font color="#FF0000">站长回复:</font>感谢第一条留言的支持！：）</p>
        </ul>
      </div>
      <div class="gbox">
        <form action="../../enews/index.php" method="post" name="form1" id="form1">
          <p> <strong>来说点儿什么吧...</strong></p>
          <p><span> 您的姓名:</span>
            <input name="name" type="text" id="name">
            *</p>
          <p><span>联系邮箱:</span>
            <input name="email" type="text" id="email">
            *</p>
          <p><span class="tnr">留言内容:</span>
            <textarea name="lytext" cols="60" rows="12" id="lytext"></textarea>
          </p>
          <p>
            <input type="submit" name="Submit3" value="提交">
            <input name="enews" type="hidden" id="enews" value="AddGbook">
          </p>
        </form>
      </div>
    </div>
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

/*gbook*/
.gbook { background: #FFF; overflow: hidden; margin-bottom: 20px }
.gbox { padding: 20px; overflow: hidden; }
.gbox p { margin-bottom: 10px }
p.fbtime { color: #000; }
.fbtime span { float: right; color: #999; font-size: 12px;    width: 70px;
    overflow: hidden;
    white-space: nowrap; }
p.fbinfo { margin: 10px 0; }
.fb ul { margin: 10px 10px; padding: 10px 10px 10px 70px; border-bottom: #ececec 1px solid; }
.fb:nth-child(8n-7) ul { background: url(../../../static/img/tx10.jpg) no-repeat top 20px left 10px; }
.fb:nth-child(8n-6) ul { background: url(../../../static/img/tx9.jpg) no-repeat top 20px left 10px; }
.fb:nth-child(8n-5) ul { background: url(../../../static/img/tx8.jpg) no-repeat top 20px left 10px; }
.fb:nth-child(8n-4) ul { background: url(../../../static/img/tx7.jpg) no-repeat top 20px left 10px; }
.fb:nth-child(8n-3) ul { background: url(../../../static/img/tx6.jpg) no-repeat top 20px left 10px; }
.fb:nth-child(8n-2) ul { background: url(../../../static/img/tx5.jpg) no-repeat top 20px left 10px; }
.fb:nth-child(8n-1) ul { background: url(../../../static/img/tx4.jpg) no-repeat top 20px left 10px; }
.fb:nth-child(8n) ul { background: url(../../../static/img/tx3.jpg) no-repeat top 20px left 10px; }
.fb:first-child ul { background: url(../../../static/img/tx2.jpg) no-repeat top 20px left 10px; }
.fb:last-child ul { background: url(../../../static/img/tx1.jpg) no-repeat top 20px left 10px; }
.hf ul { padding: 10px 20px; background: #f9f9f9; }
.hf { margin: 0 20px; padding-bottom: 20px; border-bottom: #dedddd 1px dashed; }
textarea#lytext { width: 100%; }
.gbox input[type="submit"] { display: block; background: #040404; color: #fff; border: 0; line-height: 30px; padding: 0 20px; border-radius: 5px; float: right; }
</style>
