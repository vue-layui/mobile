<template>
  <div class="gobuy">
    <a class="gobuyA">
      <i class="iconfont icon-kefu"></i>
      <p>客服</p>
    </a>
    <a class="gobuyA">
      <i class="iconfont icon-dianpu"></i>
      <p>店铺</p>
    </a>
    <a class="gobuyA">
      <i class="iconfont icon-daohanggouwuche"></i>
      <p>购物车</p>
      <span>{{this.$store.state.count}}</span>
    </a>
    <a @click="save">
      加入购物车
    </a>
    <a>
      立即购买
    </a>
  </div>
</template>

<script>
    export default {
        name: "gobuy",
        methods:{
          save(){
            this.$router.push('/Car')
            var shoplist={
              'title':'kkw卡戴珊海外旗舰店',
              'name':'kkw卡戴珊 栀愈系 颜值担当',
              'pic': '../../static/img/L2.png',
              'small':'75ml',
              'single': 518,
              'num':1,
              'show':false
              // 'price':parseInt(localStorage.getItem('count'))
            }
            shoplist=JSON.stringify(shoplist)
            localStorage.setItem('temp',shoplist)
          }
        }
    }
</script>

<style scoped>
  .gobuy {
    height: 0.5rem;
    background: white;
    margin-top: 0.09rem;
    display: flex;
    clear: left;
    position: fixed;
    bottom: 0;
    z-index: 100;
  }
  .gobuy a{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .gobuy a p{
    font-size: 0.12rem;
    color: #999999;
  }
  .gobuyA{
    margin-right: 0.15rem;
  }
  .gobuy a:first-child{
    margin-left: 0.15rem;
  }
  .gobuy a i{
    color: #999999;
    font-size: 0.24rem;
  }
  .gobuy a:nth-child(3){
    position: relative;
  }
  .gobuyA span{
    display: block;
    width: 0.15rem;
    height: 0.15rem;
    border-radius: 50%;
    position: absolute;
    background: #fe0000;
    font-size: 0.09rem;
    color: white;
    text-align: center;
    top:0;
    left: 0.2rem;
  }
  .gobuy a:nth-child(4){
    width: 1.145rem;
    height: 100%;
    background: #fe7e8d;
    font-size: 0.15rem;
    color: white;
  }
  .gobuy a:nth-child(5){
    width: 1.145rem;
    font-size: 0.15rem;
    background: #ff2741;
    color: white;
  }
</style>
