<template>
  <div class="fenlei">
    <h2>文章分类</h2>
    <ul>
      <li v-for="(item,index) in classify" :key="index"><a href="/">{{item.articleTypeName}}({{item.articleNum}})</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      classify: ''
    };
  },
  mounted: function () {
    this.getClassfy();
  },
  methods: {
    // 文章分类
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
.fenlei li { margin-bottom: 10px; margin-left: 10px }
.l_box h2 { color: #333; font-size: 14px; line-height: 30px; padding-left: 20px; background: #fff }
.l_box div { background: rgba(255,255,255,0.5); margin-bottom: 20px; overflow: hidden }
.l_box div ul { padding: 10px; overflow: hidden }
</style>
