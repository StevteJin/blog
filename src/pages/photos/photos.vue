<template>
  <div>
    <navbar></navbar>
    <article>
        <div class="picbox">
          <ul>
            <li data-scroll-reveal="enter bottom over 1s" ><a href="/"><i><img src="../../../static/img/1.jpg"></i>
                <div class="picinfo">
                <h3>个人博客模板《simple》</h3>
                <span>好咖啡要和朋友一起品尝，好“模板”也要和同样喜欢它的人一起分享。</span> </div>
                </a></li>
            <li data-scroll-reveal="enter bottom over 1s" ><a href="/"><i><img src="../../../static/img/1.jpg"></i>
              <div class="picinfo">
              <h3>个人博客模板《simple》</h3>
              <span>好咖啡要和朋友一起品尝，好“模板”也要和同样喜欢它的人一起分享。</span> </div>
              </a></li>
          </ul>
          <ul>
            <li data-scroll-reveal="enter bottom over 1s" ><a href="/"><i><img src="../../../static/img/1.jpg"></i>
            <div class="picinfo">
            <h3>个人博客模板《simple》</h3>
            <span>好咖啡要和朋友一起品尝，好“模板”也要和同样喜欢它的人一起分享。</span> </div>
            </a></li>
            <li data-scroll-reveal="enter bottom over 1s" ><a href="/"><i><img src="../../../static/img/1.jpg"></i>
            <div class="picinfo">
            <h3>个人博客模板《simple》</h3>
            <span>好咖啡要和朋友一起品尝，好“模板”也要和同样喜欢它的人一起分享。</span> </div>
            </a></li>
          </ul>
          <ul>
            <li data-scroll-reveal="enter bottom over 1s" ><a href="/"><i><img src="../../../static/img/1.jpg"></i>
            <div class="picinfo">
            <h3>个人博客模板《simple》</h3>
            <span>好咖啡要和朋友一起品尝，好“模板”也要和同样喜欢它的人一起分享。</span> </div>
            </a></li>
            <li data-scroll-reveal="enter bottom over 1s" ><a href="/"><i><img src="../../../static/img/1.jpg"></i>
            <div class="picinfo">
            <h3>个人博客模板《simple》</h3>
            <span>好咖啡要和朋友一起品尝，好“模板”也要和同样喜欢它的人一起分享。</span> </div>
            </a></li>
          </ul>
          <ul>
            <li data-scroll-reveal="enter bottom over 1s" ><a href="/"><i><img src="../../../static/img/1.jpg"></i>
            <div class="picinfo">
            <h3>个人博客模板《simple》</h3>
            <span>好咖啡要和朋友一起品尝，好“模板”也要和同样喜欢它的人一起分享。</span> </div>
            </a></li>
            <li data-scroll-reveal="enter bottom over 1s" ><a href="/"><i><img src="../../../static/img/1.jpg"></i>
            <div class="picinfo">
            <h3>个人博客模板《simple》</h3>
            <span>好咖啡要和朋友一起品尝，好“模板”也要和同样喜欢它的人一起分享。</span> </div>
            </a></li>
          </ul>
        </div>
        <div class="pagelist"><a class="allpage"><b>99</b></a>&nbsp;&nbsp;<a href="#" class="curPage">1</a>&nbsp;&nbsp;<a href="#" onclick="page(2)">2</a>&nbsp;&nbsp;<a href="#" onclick="page(3)">3</a>&nbsp;&nbsp;<a href="#" onclick="page(4)">4</a>&nbsp;&nbsp;<a href="#" onclick="page(5)">5</a>&nbsp;&nbsp;<a href="#" onclick="page(6)">6</a>&nbsp;&nbsp;<a href="#" onclick="page(7)">7</a>&nbsp;&nbsp;<a href="#" onclick="page(8)">8</a>&nbsp;&nbsp;<a href="#" onclick="page(9)">9</a>&nbsp;&nbsp;<a href="#" onclick="page(2)">下一页</a></div>
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
  }
};
</script>

<style scoped>
.navicon { display: block; position: relative; width: 30px; height: 5px; background-color: #000; margin-top: 20px }
.navicon:before, .navicon:after { content: ''; display: block; width: 30px; height: 5px; position: absolute; background: #000; -webkit-transition-property: margin, -webkit-transform; transition-property: margin, -webkit-transform; transition-property: margin, transform; transition-property: margin, transform, -webkit-transform; -webkit-transition-duration: 300ms; transition-duration: 300ms; }
.navicon:before { margin-top: -10px; }
.navicon:after { margin-top: 10px; }
.open .navicon { background: none }
.open .navicon:before { margin-top: 0; -webkit-transform: rotate(45deg); transform: rotate(45deg); }
.open .navicon:after { margin-top: 0; -webkit-transform: rotate(-45deg); transform: rotate(-45deg); }
.open .navicon:before, .open .navicon:after { content: ''; display: block; width: 30px; height: 5px; position: absolute; background: #000; }

/*分页器的 s*/
.pagelist { text-align: center; color: #666; width: 100%; clear: both; margin: 20px 0; padding-top: 20px }
.pagelist a { color: #666; margin: 0 2px 5px 2px; display: inline-block; border: 1px solid #fff; padding: 5px 10px; background: #FFF }
.pagelist a:hover { color: #19585d; }
.pagelist > b { border: 1px solid #000; padding: 5px 10px; }
a.curPage { color: #19585d; font-weight: bold; }
/*分液器的 e*/
.picbox { width: 100%; overflow: hidden; }
.picbox ul { overflow: hidden; width: 24%; float: left; margin-right: 10px }
.picbox ul li { display: block; background: #FFF; margin: 0 0 20px 0; border: 1px #d9d9d9 solid; }
.picbox ul li i { margin: 10px; height: auto; overflow: hidden; display: block; }
.picbox ul li img { width: 100%; }
.picinfo h3 { border-bottom: #ccc 1px solid; padding: 10px 0; margin: 0 20px; font-size: 16px }
.picinfo span { padding: 10px 20px; display: block; color: #666; }
.picbox ul li a:hover { color: #19585d }
@media screen and (min-width: 768px) and (max-width: 959px) {
  .picbox ul { width: 23%; }
  .pagelist a { padding: 2px 3px; }
}
@media only screen and (min-width: 480px) and (max-width: 767px) {
  .pagelist a { padding: 2px 3px; }
  .picbox ul { width: 22%; }
  .picbox ul li i { margin: 5px }
  .picinfo { display: none }
}
@media only screen and (max-width: 479px) {
  .picbox { width: 96%; margin: auto }
  .picbox ul { width: 48%; margin-right: 0 }
  .picbox ul:nth-child(1), .picbox ul:nth-child(3) { margin-right: 8px }
  .picbox ul li i { margin: 2px }
  .picinfo { display: none }
}
</style>
