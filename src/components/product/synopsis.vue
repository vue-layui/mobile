<template>
  <div class="synopsis">
    <div class="syn1">
      <p>已选： 1.5L天蓝色</p>
      <a href="javascirpt:;">
        <i class="iconfont icon-xiangyou"></i>
      </a>
    </div>
    <div class="syn2">
      <p>
        养生壶的壶体采用的是高硼硅玻璃，实验室所用的烧杯、烧瓶也是这种玻璃材质。养生壶必须是全玻璃结构，壶体一体成型，绝对不能有金属和硅胶。承托底座一般采用全新优质pc塑胶，这种塑胶无毒、耐温、防火、韧性好，光洁度高，也有用钢化玻璃的。
      </p>
    </div>
    <div class="syn3">
      <img src="../../assets/img/pro1.png" alt="">
      <div>
        <p>小熊官方旗舰店</p>
        <p>在售商品231件</p>
      </div>
      <a href="javascirpt:;">
        进店逛逛
        <i class="iconfont icon-xiangyou"></i>
      </a>
    </div>
  </div>
</template>

<script>
    export default {
        name: "synopsis"
    }
</script>

<style scoped>
  .synopsis{
    width: 100%;
    height: 2.64rem;
    background: white;
    margin-top: 0.1rem;
  }
  .syn1{
    width: 93%;
    height: 0.3rem;
    border-bottom: 1px solid #eeeeee;
    margin:0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .syn1 p{
    font-size: 0.14rem;
  }
  .syn1 a{
    margin-right: 0.02rem;
    display: flex;
  }
  .syn2{
    width: 93%;
    height: 1.6rem;
    margin: 0 auto;
    border-bottom: 1px solid #eeeeee;
    display: flex;
    justify-content: center;
  }
  .syn2 p{
    font-size: 0.14rem;
    margin-top: 0.2rem;
    line-height: 0.25rem;
  }
  .syn3{
    display: flex;
    height: 0.74rem;
    align-items: center;
  }
  .syn3 img{
    width: 0.875rem;
    height:0.135rem;
    margin-left: 0.1rem;
    margin-right: 0.1rem;
  }
  .syn3 div{
    display: flex;
    flex-direction: column;
  }
  .syn3 div p:first-child{
    font-size: 0.15rem;
  }
  .syn3 div p:last-child{
    font-size: 0.13rem;
  }
  .syn3 a{
    font-size: 0.14rem;
    margin-left: 0.735rem;
    color: black;
  }
</style>
