<template>
  <div class="guanzhu">
    <h2>关注我 么么哒</h2>
    <ul>
      <img src="../../static/img/wx.jpg">
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.guanzhu img { width: 100% }
@media screen and (min-width: 960px) and (max-width: 1023px) {
  .guanzhu { width: 270px; }
}

.l_box h2 { color: #333; font-size: 14px; line-height: 30px; padding-left: 20px; background: #fff }
.l_box div { background: rgba(255,255,255,0.5); margin-bottom: 20px; overflow: hidden }
.l_box div ul { padding: 10px; overflow: hidden }
</style>
