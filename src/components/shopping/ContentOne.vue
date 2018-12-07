<template>
    <div class="box">
        <p>
          <span>限时购 <i>10点场</i></span>
          <span>新谷酵素加强版165</span>
        </p>
        <p>
          <img src="../../assets/imgs/08.png" alt="">
          <img src="../../assets/imgs/09.png" alt="">
          <img src="../../assets/imgs/10.png" alt="">
        </p>
    </div>
</template>

<script>
    export default {
        name: "ContentOne"
    }
</script>

<style scoped lang="scss">
    .box{
      width: 100%;
      height: .9rem;
      display: flex;
      margin-top: .1rem;
      border-radius: .08rem;
      background: #f5f5f5;
      /*align-items: center;*/
      p:nth-of-type(1){
        margin-top: .28rem;
        display: flex;
        flex-direction: column;
        margin-left: .12rem;
        span:nth-of-type(1){
          font-size: .14rem;
          color: #fd1933;
          i{
            font-size: .13rem;
            color: #000;
            font-style: normal;
          }
        }
        span:nth-of-type(2){
          font-size: .10rem;
          color: #8e8e8e;
        }
      }
      p:nth-of-type(2){
        display: flex;
        margin-left: .06rem;
        img{
          border-radius: .1rem;
          width: .81rem;
          height:100% ;
        }
      }
    }
</style>
