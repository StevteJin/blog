<template>
  <div>
    <navbar></navbar>
    <article>
        <div class="picbox">
          <ul v-for="(item,index) in photoList" :key="index">
            <li>
              <a href="/">
                <i><img :src="item.img" alt=""></i>
                <div class="picinfo">
                  <h3>{{item.title}}</h3>
                  <span>{{item.description}}</span>
                </div>
              </a>
            </li>
          </ul>
        </div>
        <!--html调用 参数:pageSize(总页数);pageNo(当前页)-->
        <pager v-if="pageSize" :pageSize="pageSize" v-model="pageNo" @on-jump="jump"></pager>
    </article>
    <bottomfooter></bottomfooter>
  </div>
</template>

<script>
import navbar from '@/components/navbar';
import bottomfooter from '@/components/footer';
import pager from '@/components/pager';
export default {
  components: {
    navbar,
    bottomfooter,
    pager
  },
  data: function () {
    return {
      pageSize: '',
      pageNo: 1,
      photoList: ''
    };
  },
  mounted: function () {
    this.getPhotoList();
  },
  // 接收跳转事件
  methods: {
    jump: function (id) {
      console.log(id);
    },
    getPhotoList: function () {
      this.axios
        .post('/photoList', {
          page: this.pageNo
        })
        .then(response => {
          console.log(response.data);
          this.photoList = response.data.data;
          this.pageSize = response.data.count / 8;
        });
    }
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
}
@media only screen and (min-width: 480px) and (max-width: 767px) {
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
