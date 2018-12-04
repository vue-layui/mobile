<template>
  <div>
    <!--头部-->
    <div class="BookTop">
      <div class="RedBook_top">
        <i class="iconfont icon-menu" @click="flag=!flag"></i>
        <underlineChange style="width:2rem;"></underlineChange>
        <div></div>
      </div>
      <div class="Books_search">
        <i class="iconfont icon-fangdajing-"></i>
        大家都在搜公务员考试经验
      </div>
    </div>
   <!--中间部分 -->

      <BookContent style="margin-top:0.9rem; margin-bottom:0.5rem;"></BookContent>

      <!--底部导航-->
    <attentionFoot></attentionFoot>
      <!--左边菜单-->
    <IndexLeft v-show="flag"></IndexLeft>
  </div>
</template>

<script>
  import underlineChange from '../components/attention/underlineChange'
  //关注页
  import BookContent from '../components/attention/BookContent'

  import attentionFoot from '../components/attention/attentionFoot'
  import IndexLeft from '../components/attention/IndexLeft'
    export default {
        name: "indexPages",
       data(){
          return{
           flag:false
         }
      },
        components:{
          underlineChange,
          BookContent,
          attentionFoot,
          IndexLeft
      }
    }
</script>

<style lang="scss" scoped>
  .BookTop{
    position:fixed;
    top:0;
    left:0;
    background:#fff;
    width:100%;
    z-index:3;
  }
.RedBook_top{
  width:100%;
  height:0.5rem;
  display:flex;
  align-items: center;
  justify-content: space-between;
  padding-left:0.1rem;
  box-sizing:border-box;
}
  .Books_search{
    width:85%;
    height:0.3rem;
    border-radius:0.5rem;
    background:#f0f0f0;
    margin:0 auto;
    margin-bottom:0.1rem;
    box-sizing:border-box;
    text-align: center;
    font-size:0.15rem;
    color:#9b9b9b;
    line-height:0.3rem;
    i{
      display:inline-block;
    }
  }
</style>
