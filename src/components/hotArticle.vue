<template>
  <div class="tuijian">
    <h2>站长推荐</h2>
    <ul>
      <li v-for="(item,index) in articleList" :key="index"><a href="/">{{item.title}}</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      articleList: ''
    };
  },
  mounted: function () {
    this.getArticleList();
  },
  methods: {
    // 站长推荐
    getArticleList: function () {
      this.axios
        .post('/tenList')
        .then(response => {
          console.log(response.data);
          this.articleList = response.data.data;
        });
    }
  }
};
</script>

<style scoped>
.tuijian li { text-overflow: ellipsis; white-space: nowrap; overflow: hidden; margin-bottom: 5px; background: url(../../static/img/li.png) left center no-repeat; padding-left: 20px }
@media screen and (min-width: 960px) and (max-width: 1023px) {
  .tuijian { width: 270px; }
}
.l_box h2 { color: #333; font-size: 14px; line-height: 30px; padding-left: 20px; background: #fff }
.l_box div { background: rgba(255,255,255,0.5); margin-bottom: 20px; overflow: hidden }
.l_box div ul { padding: 10px; overflow: hidden }
</style>
