<template>
    <div v-show="flag">
      <!--遮罩层-->
      <div class="Attentionmaster" @click="flag=!flag"></div>
      <div class="AttentionMenu">
         <h3>更多</h3>
        <p><i class="iconfont icon-xiao56"></i><span>我的关注</span></p>
        <p><i class="iconfont icon-shoucang"></i><span>我的收藏</span></p>
        <p class="lineP"><i class="iconfont icon-box"></i><span>我的草稿</span></p>

        <p><i class="iconfont icon-cart--copy"></i><span>购物车</span></p>
        <p><i class="iconfont icon-icon-"></i><span>订单</span></p>
        <p><i class="iconfont icon-quan"></i><span>薯券</span></p>
        <p><i class="iconfont icon-bao"></i><span>心愿单</span></p>
        <p  class="lineP"><i class="iconfont icon-r"></i><span>小红卡会员</span></p>

        <p><i class="iconfont icon-kefu"></i><span>帮助与客服</span></p>
        <p><i class="iconfont icon-richscan_icon"></i><span>扫一扫</span></p>
        <p><i class="iconfont icon-shezhi"></i><span>设置</span></p>
      </div>
    </div>
</template>

<script>
    export default {
        name: "IndexLeft",
      data(){
        return{
          flag:true
        }
      }
    }
</script>

<style lang="scss" scoped>
 .Attentionmaster{
   position:fixed;
   left:0;
   top:0;
   width:100%;
   height:100%;
   background:#000;
   opacity: 0.4;
   z-index:4;
 }
  .AttentionMenu{
    background:#fff;
    width:55%;
    height:100%;
    position:fixed;
    top:0;
    left:0;
    z-index:4;
    padding-top:0.55rem;
    padding-left:0.35rem;
    padding-right:0.35rem;
    box-sizing: border-box;
    h3{
      font-size:0.25rem;
      color:#333;
    }
    p{
      line-height:0.54rem;
      height:0.4rem;
      font-size:0.17rem;
      color:#333;
      display:flex;
      i{
        padding-right:0.07rem;
      }
    }
  .lineP{
    padding-bottom:0.1rem;
     border-bottom:1px solid #ccc;
    }
  }
</style>
