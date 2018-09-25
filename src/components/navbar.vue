<template>
  <header class="header-navigation" id="header">
    <nav>
      <div class="logo">
        <a href="/">青松个人博客</a>
      </div>
      <h2 id="mnavh" @click="toggle">
        <span class="navicon"></span>
      </h2>
      <ul id="starlist">
        <li v-for="(item,index) in navList" :key="index">
          <a :href="item.href" :class="{'active-color':item.href==routePath}">{{item.content}}</a>
        </li>
      </ul>
    </nav>
  </header>
</template>
<script>
export default {
  data: function () {
    return {
      navList: [
        {
          href: '/',
          content: '首页'
        }, {
          href: '/photos',
          content: '我的相册'
        }, {
          href: '/diary',
          content: '我的日记'
        }, {
          href: '/about',
          content: '关于我'
        }, {
          href: '/msg',
          content: '留言'
        }
      ],
      routePath: ''
    };
  },
  created: function () {
    this.routePath = this.$route.path;
  },
  mounted: function () {

  },
  methods: {
    toggle: function () {
      $('#starlist').toggle();
      $('#mnavh').toggleClass('open');
    },
    isHeaderScroll: function () {
      let newScrollPosition = 0;
      let lastScrollPosition;
      let header = document.getElementById('header');

      window.addEventListener('scroll', function (e) {
        lastScrollPosition = window.scrollY;

        // Scrolling down
        if (newScrollPosition < lastScrollPosition && lastScrollPosition > 80) {
          // header.removeClass('slideDown').addClass('slideUp');
          header.classList.remove('slideDown');
          header.classList.add('slideUp');

        // Scrolling up
        } else if (newScrollPosition > lastScrollPosition) {
          // header.removeClass('slideUp').addClass('slideDown');
          header.classList.remove('slideUp');
          header.classList.add('slideDown');
        }

        newScrollPosition = lastScrollPosition;
      });
    }
  }
};
</script>
<style scoped>
.active-color{
  color:#f65a8a;
}
.header-navigation { position: fixed; top: 0; width: 100%; height: 60px; line-height: 60px; background: rgba(255,255,255,.9); text-align: center; border-bottom: 1px solid #ddd; box-shadow: 0 1px 1px rgba(0,0,0,.04); z-index: 9999; }
nav { width: 1000px; margin: auto }
.logo { float: left; font-size: 22px }
#mnavh { display: none; width: 30px; height: 40px; float: right; text-align: center; padding: 0 5px }
#starlist { float: right; }
#starlist li { float: left; display: block; padding: 0 0 0 40px; font-size: 16px }
.navicon { display: block; position: relative; width: 30px; height: 5px; background-color: #000; margin-top: 20px }
.navicon:before, .navicon:after { content: ''; display: block; width: 30px; height: 5px; position: absolute; background: #000; -webkit-transition-property: margin, -webkit-transform; transition-property: margin, -webkit-transform; transition-property: margin, transform; transition-property: margin, transform, -webkit-transform; -webkit-transition-duration: 300ms; transition-duration: 300ms; }
.navicon:before { margin-top: -10px; }
.navicon:after { margin-top: 10px; }
.open .navicon { background: none }
.open .navicon:before { margin-top: 0; -webkit-transform: rotate(45deg); transform: rotate(45deg); }
.open .navicon:after { margin-top: 0; -webkit-transform: rotate(-45deg); transform: rotate(-45deg); }
.open .navicon:before, .open .navicon:after { content: ''; display: block; width: 30px; height: 5px; position: absolute; background: #000; }
/* Slide transitions */
.slideUp { -webkit-transform: translateY(-100px); -ms-transform: translateY(-100px); -o-transform: translateY(-100px); transform: translateY(-100px); -webkit-transition: transform .5s ease-out; -o-transition: transform .5s ease-out; transition: transform .5s ease-out; }
.slideDown { -webkit-transform: translateY(0); -ms-transform: translateY(0); -o-transform: translateY(0); transform: translateY(0); -webkit-transition: transform .5s ease-out; -o-transition: transform .5s ease-out; transition: transform .5s ease-out; }
@media screen and (min-width: 1024px) and (max-width: 1199px) {
header { width: 96%; margin: auto }
}
@media screen and (min-width: 960px) and (max-width: 1023px) {
header { width: 96%; margin: auto }
article { width: 96% }
nav { width: 96%; }
#starlist li { padding-left: 20px }
}
@media screen and (min-width: 768px) and (max-width: 959px) {
header { width: 96%; margin: auto }
article { width: 96% }
nav { width: 96%; }
#starlist li { padding-left: 15px }
}
 @media only screen and (min-width: 480px) and (max-width: 767px) {
header { width: 96%; margin: auto }
article { width: 96% }
.logo { width: 100% }
nav { width: 100%; position: relative }
#starlist { display: none; background: rgba(0,0,0,.5); width: 100% }
#starlist li { display: block; width: 70%; padding: 0; background: #FFF }
#starlist li:last-child { padding-bottom: 100% }
#mnavh { position: absolute; display: block; top: 8px; left: 10px }
}
@media only screen and (max-width: 479px) {
header { width: 96%; margin: auto }
article { width: 100% }
.logo { width: 100% }
nav { width: 100%; position: relative }
#starlist { display: none; background: rgba(0,0,0,.5); width: 100% }
#starlist li { display: block; width: 70%; padding: 0; background: #FFF }
#starlist li:last-child { padding-bottom: 100% }
#mnavh { position: absolute; display: block; top: 8px; left: 10px }
}
</style>
