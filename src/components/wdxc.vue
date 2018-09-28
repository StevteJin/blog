<template>
  <div class="wdxc">
    <h2>我的相册</h2>
    <ul>
        <li v-for="(item,index) in photoList" :key="index"><a href="/"><img :src="item.img" alt=""></a></li>
    </ul>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      photoList: ''
    };
  },
  mounted: function () {
    this.getPhotoList();
  },
  methods: {
    // 相册
    getPhotoList: function () {
      this.axios
        .post('/photoAlbum')
        .then(response => {
          console.log(response.data);
          this.photoList = response.data.data;
        });
    }
  }
};
</script>

<style scoped>
.wdxc li { width: 32%; overflow: hidden; float: left; height: 80px; margin-bottom: 2px; margin-right: 2px }
.wdxc li img {width: 100%; height:100%; -webkit-transition: all 0.5s; -moz-transition: all 0.5s; transition: all 0.5s; }
.wdxc li img:hover { transform: scale(1.05) }

.l_box h2 { color: #333; font-size: 14px; line-height: 30px; padding-left: 20px; background: #fff }
.l_box div { background: rgba(255,255,255,0.5); margin-bottom: 20px; overflow: hidden }
.l_box div ul { padding: 10px; overflow: hidden }
</style>
