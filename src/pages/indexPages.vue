<template>
  <div>
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
    <!--<div ref="mescroll" class="mescroll">-->
      <!--<div>-->
        <!--<p class="notice">本Demo的下拉刷新: 添加新数据到列表顶部</p>-->
        <!--<ul id="newsList" class="news-list">-->
        <!--<li v-for="news in newArr" :key="news.id">-->
        <!--<p>{{news.title}}</p>-->
        <!--<p class="new-content">{{news.content}}</p>-->
        <!--</li>-->
        <!--</ul>-->

      <BookContent style="margin-bottom:0.5rem;"></BookContent>
      </div>
    <!--</div>-->
      <!--底部导航-->
    <attentionFoot></attentionFoot>
      <!--左边菜单-->
    <IndexLeft v-show="flag"></IndexLeft>

  <!--</div>-->
  </div>
</template>

<script>
  import underlineChange from '../components/attention/underlineChange'
  //关注页
  import BookContent from '../components/attention/BookContent'
  import attentionFoot from '../components/attention/attentionFoot'
  import IndexLeft from '../components/attention/IndexLeft'
  // import MeScroll from 'mescroll.js'
  // import 'mescroll.js/mescroll.min.css'
    export default {
        name: "indexPages",
       data(){
          return{
            mescroll: null,
            flag:false
         }
      },
        components:{
          underlineChange,
          BookContent,
          attentionFoot,
          IndexLeft
      },
      // mounted () {
      //   // 创建MeScroll对象:为避免配置的id和父组件id重复,这里使用ref的方式初始化mescroll
      //   this.mescroll = new MeScroll(this.$refs.mescroll, {// 在mounted生命周期初始化mescroll,以确保您配置的dom元素能够被找到.
      //     down: {
      //       auto: false, // 是否在初始化完毕之后自动执行下拉回调callback; 默认true
      //       callback: this.downCallback // 下拉刷新的回调
      //     },
      //     up: {
      //       use:false,
      //       auto: true, // 是否在初始化时以上拉加载的方式自动加载第一页数据; 默认false
      //       callback: this.upCallback, // 上拉回调,此处可简写; 相当于 callback: function (page) { upCallback(page); }
      //       page: {
      //         num: 0, // 当前页码,默认0,回调之前会加1,即callback(page)会从1开始
      //         size: 10 // 每页数据的数量
      //       },
      //       noMoreSize: 5, // 如果列表已无数据,可设置列表的总数量要大于等于5条才显示无更多数据;避免列表数据过少(比如只有一条数据),显示无更多数据会不好看
      //       toTop: { // 配置回到顶部按钮
      //         src: './static/mescroll/mescroll-totop.png'
      //       }
      //     }
      //   })
      // },
      // beforeRouteEnter (to, from, next) { // 如果没有配置回到顶部按钮或isBounce,则beforeRouteEnter不用写
      //   next(vm => {
      //     if (vm.mescroll) {
      //       // 恢复到之前设置的isBounce状态
      //       if (vm.mescroll.lastBounce != null) vm.mescroll.setBounce(vm.mescroll.lastBounce)
      //       // 滚动到之前列表的位置(注意:路由使用keep-alive才生效)
      //       if (vm.mescroll.lastScrollTop) {
      //         vm.mescroll.setScrollTop(vm.mescroll.lastScrollTop)
      //         setTimeout(() => { // 需延时,因为setScrollTop内部会触发onScroll,可能会渐显回到顶部按钮
      //           vm.mescroll.setTopBtnFadeDuration(0)// 设置回到顶部按钮显示时无渐显动画
      //         }, 16)
      //       }
      //     }
      //   })
      // },
      // beforeRouteLeave (to, from, next) { // 如果没有配置回到顶部按钮或isBounce,则beforeRouteLeave不用写
      //   if (this.mescroll) {
      //     this.mescroll.lastBounce = this.mescroll.optUp.isBounce// 记录当前是否禁止ios回弹
      //     this.mescroll.setBounce(true) // 允许bounce
      //     this.mescroll.lastScrollTop = this.mescroll.getScrollTop()// 记录当前滚动条的位置
      //     this.mescroll.hideTopBtn(0)// 隐藏回到顶部按钮,无渐隐动画
      //   }
      //   next()
      // },

    }
</script>

<style lang="scss" scoped>
  /*.mescroll {*/
    /*position: absolute;*/
    /*top: 1rem;*/
    /*bottom: 0.5rem;*/
    /*height: auto;*/
  /*}*/
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
