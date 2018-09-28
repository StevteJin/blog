<template>
  <div class="about_me">
    <h2>关于我</h2>
    <ul v-for="(item,index) in aboutMine" :key="index">
      <i><img :src="item.photo"></i>
      <p>{{item.description}}</p>
    </ul>
  </div>
</template>

<script>
export default {
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
          this.aboutMine = response.data.data;
        });
    }
  }
};
</script>

<style scoped>
.about_me img { width: 100% }
.about_me p { line-height: 24px; font-size: 14px }
.about_me i { width: 120px; float: left; clear: left; margin-right: 10px; height: 90px; overflow: hidden }
.l_box h2 { color: #333; font-size: 14px; line-height: 30px; padding-left: 20px; background: #fff }
.l_box div { background: rgba(255,255,255,0.5); margin-bottom: 20px; overflow: hidden }
.l_box div ul { padding: 10px; overflow: hidden }
</style>
