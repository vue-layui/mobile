<template>
  <div class="box">
    <p>
      <span><img src="../../assets/imgs/14.png" alt=""> <i>小红卡会员专区</i></span>
      <span>新谷酵素加强版165 安娜苏香水￥168</span>
    </p>
    <p>
      <img src="../../assets/imgs/15.png" alt="">
      <img src="../../assets/imgs/16.png" alt="">
    </p>
  </div>
</template>

<script>
    export default {
        name: "ShoppingThree"
    }
</script>

<style scoped lang="scss">
    .box{
      width: 100%;
      height: .75rem;
      display: flex;
      justify-content: space-between;
      background: #f5f5f5;
      border-radius: .08rem;
      p:nth-of-type(1){
        display: flex;
        flex-direction: column;
        span:nth-of-type(1){
          display: block;
          display: flex;
          padding-top: .2rem;
          img{
            width: .16rem;
            height:.16rem ;
            margin-left: .12rem;
          }
          i{
            font-weight: 700;
            font-size: .15rem;
            color: #000000;
            font-style: normal;
            margin-left: .03rem;
          }
        }
        span:nth-of-type(2){
          font-size: .11rem;
          color: #8e8e8e;
        }
      }
      p:nth-of-type(2){
        display: flex;
          img{
            width: .78rem;
            height: .75rem;
            border-radius: .08rem;
          }
      }
    }
</style>
