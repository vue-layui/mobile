<template>
  <div class="comment">
    <h3>小红薯们怎么说</h3>
    <div class="comment1">
      <div class="com1">
        <a href="javascirpt:;">
          <img src="../../assets/img/pro2.png" alt="">
        </a>
        <p>
          Liu<i class="iconfont icon-xiaoji"></i>肉肉
        </p>
        <p>收藏·1069 赞·340</p>
      </div>
      <div class="com2">
        <p>前几天在某东上入的小熊多功能养生壶<br>
          可以热牛奶，煮粥，煮银耳，甜品，煮面，煮...
        </p>
      </div>
      <div class="com3">
        <img src="../../assets/img/pro6.png" alt="">
        <img src="../../assets/img/pro7.png" alt="">
      </div>
    </div>
    <div class="comment1">
      <div class="com1">
        <a href="javascirpt:;">
          <img src="../../assets/img/pro2.png" alt="">
        </a>
        <p>
          Liu<i class="iconfont icon-xiaoji"></i>肉肉
        </p>
        <p>收藏·1069 赞·340</p>
      </div>
      <div class="com2">
        <p>前几天在某东上入的小熊多功能养生壶<br>
          可以热牛奶，煮粥，煮银耳，甜品，煮面，煮...
        </p>
      </div>
      <div class="com3">
        <img src="../../assets/img/pro9.png" alt="">
        <img src="../../assets/img/pro10.png" alt="">
      </div>
    </div>
    <div class="comment1">
      <div class="com1">
        <a href="javascirpt:;">
          <img src="../../assets/img/pro2.png" alt="">
        </a>
        <p>
          Liu<i class="iconfont icon-xiaoji"></i>肉肉
        </p>
        <p>收藏·110 赞·41</p>
      </div>
      <div class="com2">
        <p>前几天在某东上入的小熊多功能养生壶<br>
          可以热牛奶，煮粥，煮银耳，甜品，煮面，煮...
        </p>
      </div>
      <div class="com3">
        <img src="../../assets/img/pro9.png" alt="">
        <img src="../../assets/img/pro10.png" alt="">
        <img src="../../assets/img/pro9.png" alt="">
        <img src="../../assets/img/pro10.png" alt="">
      </div>
    </div>
    <div class="more">
      <a href="javascirpt:;">
        查看更多相关笔记
      </a>
    </div>
  </div>
</template>

<script>
    export default {
        name: "comment"
    }
</script>

<style scoped>
  .comment{
    width: 100%;
    background: white;
    margin-top: 0.12rem;
  }
  .comment1{
    border-top: 1px solid #ececec;
    padding-top: 0.15rem;
  }
  .comment h3{
    font-size: 0.16rem;
    padding-top: 0.14rem;
    padding-bottom: 0.14rem;
    margin-left: 0.15rem;
  }
  .com1{
    display: flex;
  }
  .com1 a{
    display: flex;
    margin-left: 0.15rem;
    margin-right: 0.06rem;
  }
  .com1 a img{
    width: 0.33rem;
    height: 0.33rem;
  }
  .com1 p{
    font-size: 0.14rem;
  }
  .com1 p i{
    color:#fce94f;
  }
  .com1 p:last-child{
    color: #afafaf;
    margin-left: 1.325rem;
  }
  .com2{
    margin-left: 0.55rem;
  }
  .com2 p{
    font-size: 0.15rem;
    line-height: 0.21rem;
  }
  .com3{
    display: flex;
    margin-left: 0.55rem;
    margin-top: 0.15rem;
    padding-bottom: 0.15rem;
  }
  .com3 img{
    width: 0.68rem;
    height: 0.68rem;
    margin-right: 0.1rem;
  }
  .more{
    height: 0.46rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .more a{
    font-size: 0.15rem;
    color: #666666;
  }
</style>
