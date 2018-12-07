<template>
  <div class="recommend">
    <a href="#">
      <img src="../../assets/img/pro9.png" alt="">
      <p class="tradeName1">中国·能做甜品的养生壶</p>
      <p class="tradeName2">BAFFY 桃胶 银耳燕窝养生壶 办公室迷你玻璃...</p>
      <div class="priceTwo">
        <p>￥269</p>
        <p>￥899</p>
        <img src="../../assets/img/pro13.png" alt="">
      </div>
      <p class="Twenty2">20元券</p>
    </a>
    <a href="#">
      <img src="../../assets/img/pro10.png" alt="">
      <p class="tradeName1">中国·能做甜品的养生壶</p>
      <p class="tradeName2">BAFFY 桃胶 银耳燕窝养生壶 办公室迷你玻璃...</p>
      <div class="priceTwo">
        <p>￥269</p>
        <p>￥899</p>
        <img src="../../assets/img/pro13.png" alt="">
      </div>
      <p class="Twenty2">20元券</p>
    </a>
    <a href="#">
      <img src="../../assets/img/pro11.png" alt="">
      <p class="tradeName1">中国·能做甜品的养生壶</p>
      <p class="tradeName2">BAFFY 桃胶 银耳燕窝养生壶 办公室迷你玻璃...</p>
      <div class="priceTwo">
        <p>￥269</p>
        <p>￥899</p>
        <img src="../../assets/img/pro14.png" alt="">
      </div>
      <p class="Twenty2">20元券</p>
    </a>
    <a href="#">
      <img src="../../assets/img/pro12.png" alt="">
      <p class="tradeName1">中国·能做甜品的养生壶</p>
      <p class="tradeName2">BAFFY 桃胶 银耳燕窝养生壶 办公室迷你玻璃...</p>
      <div class="priceTwo">
        <p>￥269</p>
        <p>￥899</p>
        <img src="../../assets/img/pro14.png" alt="">
      </div>
      <p class="Twenty2">20元券</p>
    </a>
  </div>
</template>

<script>
    export default {
        name: "recommend"
    }
</script>

<style scoped>
  .recommend{
    width: 100%;
  }
  .recommend a{
    width: 1.71rem;
    display: flex;
    flex-direction: column;
    background: white;
    margin-top: 0.1rem;
    margin-left: 0.12rem;
    float: left;
  }
  .recommend a:nth-child(3),.recommend a:nth-child(4){
    margin-bottom: 0.5rem;
  }
  .recommend a img{
    width: 1.71rem;
    height: 1.71rem;
    border-radius: 4px;
  }
  .recommend a .tradeName1{
    font-size: 0.13rem;
    color: black;
    margin-left: 0.11rem;
    margin-top: 0.12rem;
  }
  .recommend a .tradeName2{
    width: 1.6rem;
    font-size: 0.13rem;
    color: #6f6f6f;
    margin-left: 0.11rem;
    line-height: 0.21rem;
  }
  .recommend a .Twenty2{
    font-size: 0.14rem;
    color: white;
    background: #ff2742;
    width: 0.45rem;
    height: 0.2rem;
    margin-left: 0.13rem;
    border-radius: 3px;
    margin-top: 0.06rem;
    margin-bottom: 0.06rem;
  }
  .priceTwo{
    display: flex;
    margin-top: 0.1rem;
    align-items: center;
  }
  .priceTwo p:first-child{
    font-size: 0.16rem;
    color: #ff253f;
    font-weight: bold;
    margin-left: 0.11rem;
  }
  .priceTwo p:nth-child(2){
    font-size: 0.14rem;
    text-decoration: line-through;
    color: #7e7e7e;
  }
  .recommend .priceTwo img{
    width: 0.29rem;
    height: 0.06rem;
    margin-left: 0.4rem;
  }
</style>
