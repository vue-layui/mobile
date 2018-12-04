<template>
  <div>
  <div class="instructions">
    <h3>价格说明</h3>
    <div>
      <p><span>划线价格：</span>指商品专柜价，吊牌价，正品零售价，商场指导价或该商品曾经展示过的销售价等，并非原价，仅供参考。</p>
      <p><span>未划线价格：</span>指商品的销售价，是您最终是否购买商品的依据。</p>
    </div>
  </div>
  <div class="specif specif2">
    <p>相关商品</p>
  </div>
  </div>
</template>

<script>
    export default {
        name: "instructions"
    }
</script>

<style scoped>
  .instructions {
    width: 100%;
    height: 1.885rem;
    background: white;
  }
  .instructions h3{
    font-size: 0.16rem;
    padding-top: 0.14rem;
    padding-bottom: 0.14rem;
    margin-left: 0.15rem;
  }
  .instructions div{
    margin-left: 0.15rem;
    margin-right: 0.15rem;
    border-top: 1px solid #e6e6e6;
  }
  .instructions div p{
    font-size: 0.14rem;
    color: #666666;
    margin-top: 0.17rem;
  }
  .instructions div p span{
    color: black;
    font-weight: bold;
  }
  .specif2{
    border-bottom: 2px solid #e7e7e7;
  }
</style>
