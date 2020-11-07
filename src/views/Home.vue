<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue
    .js App"/> -->
    <!-- 页面头部开始 -->
    <mt-header title="圆圆空间">
      <router-link to="" slot="left" >
      <div class="left">
        <img src="../assets/index/search.png"   alt="">
        <span>搜索</span>
      </div>
      </router-link>
      <div slot="right" class="right">
        <span>登录</span>
        <span>注册</span>
      </div>
    </mt-header>
    <!-- 页面头部结束 -->
    <!-- 页面选项卡开始 -->
    
    <!-- 页面选项卡结束 -->


  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  // name: 'Home',
  // components: {
  //   HelloWorld
  // }
  data() {
    return {
      value: "",
      filmCategory:["热门推荐","电影","连续剧","综艺","动漫"],

    };
  },
};
</script>
<style>
.mint-header div:first-child{
  display: block;
  height: 100%;
  /* padding-left: 5px; */
}
.mint-header div:first-child>img{
 height: 100%;
 transform: scale(0.55);

}
.mint-header .left{
  height: 60%;
  /* padding-top: 10%; */
}
.mint-header .right span{
  padding-left: 10px;
}
</style>
