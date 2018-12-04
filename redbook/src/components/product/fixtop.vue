<template>
    <div class="fixtop" v-show="flag" id="fixtop">
      <div class="goOn2">
          <i class="iconfont icon-fanhui"></i>
        <p>
          <img src="../../assets/img/pro004.jpg" alt="">
          喝出胶原蛋白
        </p>
          <i class="iconfont icon-fenxiang"></i>
      </div>
    </div>
</template>

<script>
    export default {
        name: "fixtop",
      data(){
          return{
            flag:false,
          }
      },
      mounted () {
        window.addEventListener('scroll', this.handleScroll)
      },
      methods:{
        handleScroll(){
          var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
          var offsetTop = document.querySelector('#fixtop').offsetTop
          if (scrollTop > offsetTop) {
            this.flag = true
          } else {
            this.flag = false
          }
        },
      }

    }
</script>

<style scoped>
  .fixtop {
    width: 100%;
    height: 0.49rem;
    background: white;
    z-index: 100;
    position: fixed;
    top: 0;
    left: 0;
    /*display: none;*/
    /*display: flex;*/
    /*justify-content: space-around;*/
  }
  .goOn2{
    display: flex;
    justify-content: space-between;
  }
  .goOn2 p,.goOn2 i{
    /*display: flex;*/
    /*justify-content: space-around;*/
    line-height:0.49rem;
  }
  .goOn2 i:first-child{
    margin-left: 0.15rem;
  }
  .goOn2 i:last-child{
    margin-right: 0.15rem;
  }
  .goOn2 i{
    font-size: 0.2rem;
    color: black;
  }
  .goOn2 p:nth-child(2){
    font-size: 0.14rem;
    display: flex;
    align-items: center;
  }
  .goOn2 img{
    width: 0.25rem;
    height: 0.25rem;
    margin-right: 0.06rem;
  }
</style>
