<template>
  <div class="K-head">
    <div class="hello">
      <a> < </a>
      <a><b>购物车</b></a>
      <a>管理</a>
    </div>
    <div class="hello K-two">
      <a><i class="K-juan">全厂通用卷</i> 满255使用</a>
      <a><i>-￥25</i>（已用一张）</a>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'CarHead',
    data() {
      return {}
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .hello {
    height: .4rem;
    font-size: .18rem;
    color: #9d9d9d;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
  .K-juan{
    padding: .03rem;
    border: 1px solid orangered;
    margin-bottom: .11rem;
  }
  .K-two{
    background: #fcf2df;
    font-size: .13rem;
    i{
      color: orangered;
    }
  }
  .K-head{
    margin-bottom: .2rem;
  }
</style>
