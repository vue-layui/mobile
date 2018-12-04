<template>
  <div class="AfterSale">
    <div class="AfterSale1">
      <div class="Sale1">
        <i class="iconfont icon-duihao"></i>
        <p>一贵就赔</p>
        <i class="iconfont icon-duihao"></i>
        <p>7天保价</p>
      </div>
      <div class="Sale2">
        <p>小熊官方旗舰店发货</p>·
        <p>单价包邮</p>·
        <p>包税</p>·
        <p>7天退换</p>
      </div>
    </div>
    <div class="AfterSale2">
      <a href="javascirpt:;">
        <i class="iconfont icon-xiangyou"></i>
      </a>
    </div>
  </div>
</template>

<script>
    export default {
        name: "afterSale"
    }
</script>

<style scoped>
  .AfterSale{
    width: 100%;
    height: 0.615rem;
    background: white;
    margin-top: 0.12rem;
    display: flex;
    padding-left: 0.15rem;
    align-items: center;
  }
  .AfterSale1{
    flex-direction: column;
  }
  .AfterSale2{
    display: flex;
    margin-left: 0.85rem;
  }
  .AfterSale2 a{
    display: flex;
  }
  .Sale1{
    display: flex;
  }
  .Sale1 p{
    font-size: 0.14rem;
  }
  .Sale1  i{
    color: #ff2742;
    margin-right: 0.06rem;
  }
  .Sale1 p:nth-child(2){
    margin-right: 0.15rem;
  }
  .Sale2{
    display: flex;
    font-size: 0.09rem;
    margin-top: 0.02rem;
  }
  .Sale2 p{
    font-size: 0.09rem;
    color: #8c8c8c;
    margin-right: 0.03rem;
  }
</style>
