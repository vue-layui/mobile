<template>
  <div class="pricewwq">
    <div class="price1">
      <p>限时特价</p>
      <p>￥139</p>
      <p>￥149</p>
      <p>包税</p>
      <p>包邮</p>
    </div>
    <div class="price2">
      <p>喝出胶原蛋白·YSH-C15F1小熊养生壶加厚玻璃多功能烧水壶花茶 1.5L 天蓝色</p>
      <p>
        <i class="iconfont icon-icon--" v-bind:class="{'class-a':isA,'class-b':!isA}" @click="toggle"></i>
        <span v-bind:class="{'class-a':isA,'class-b':!isA}" @click="toggle">心愿单</span>
      </p>
    </div>
    <div class="price3">
      <p>品牌来自中国</p>
      <p>小熊Bear</p>
    </div>
    <div class="coupon">
      <p>薯券：</p>
      <p>店铺券</p>
      <p>满399减20</p>
      <p>满499减30</p>
      <p>满899减60</p>
      <a href="javascirpt:;">
        <i class="iconfont icon-xiangyou"></i>
      </a>
    </div>
  </div>
</template>

<script>
    export default {
      name: "price",
      data: function () {
        return {
          isA: false
        };
      },
      methods: {
        toggle: function () {
          this.isA = !this.isA;
        }
      }
    }

</script>

<style scoped>
  .class-a{
   color: red;
  }
  .pricewwq{
    width: 100%;
    height: 1.6rem;
    border-bottom: 1px solid #eaeaea;
    background: white;
    padding-left: 0.15rem;
    padding-top: 0.15rem;
  }
  .price1{
    display: flex;
    align-items: center;
  }
  .price1 p{
    font-size: 0.11rem;
    margin-right: 0.05rem;
    text-align: center;
  }
  .price1 p:nth-child(1){
    width: 0.485rem;
    height: 0.15rem;
    background: #ff1c2d;
    color:white;
    border-radius: 4px;
    line-height: 0.15rem;
  }
  .price1 p:nth-child(2) {
    font-size: 0.16rem;
    font-weight: bold;
    color: #ff1c2d;
  }
  .price1 p:nth-child(3) {
    font-size: 0.09rem;
    color: #686868;
    text-decoration: line-through;
  }
  .price1 p:nth-child(4),.price1 p:nth-child(5) {
    width: 0.25rem;
    height: 0.15rem;
    border-radius: 4px;
    border: 1px solid #ff1c2d;
    color:#ff1c2d;
    line-height: 0.15rem;
  }
  .price2{
    display: flex;
    margin-top: 0.18rem;
  }
  .price2 p:first-child{
    width: 80%;
    font-size: 0.15rem;
  }
  .price2 p:last-child{
    display: flex;
    font-size: 0.09rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #9b9b9b;
    margin-left: 0.1rem;
  }
  .price2 p:last-child i{
    font-size: 0.24rem;
  }
  .price3{
    display: flex;
    font-size: 0.14rem;
    margin-top: 0.15rem;
    padding-bottom: 0.15rem;
  }
  .price3 p:first-child{
    margin-right: 0.06rem;
    color: #686868;
  }
  .price3 p:last-child{
    color: #689be3;
  }
  .coupon{
    width: 92%;
    height: 0.47rem;
    background: white;
    display: flex;
    align-items: center;
    border-top: 1px solid #ececec;
    margin-right: 0.1rem;
  }
  .coupon p{
    font-size: 0.14rem;
    margin-right: 0.04rem;
  }
  .coupon a{
    display: flex;
    margin-left: 0.1rem;
  }
  .coupon p:nth-child(2){
    width: 0.495rem;
    height:0.165rem;
    background: #ff2742;
    color: white;
    text-align: center;
    line-height: 0.165rem;
    border-radius: 2px;
  }
</style>
