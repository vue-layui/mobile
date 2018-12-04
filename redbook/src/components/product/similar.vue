<template>
  <div class="similar">
    <h3>看了这件商品的人也看了</h3>
    <div class="goods">
      <a href="javascirpt:;">
        <img src="../../assets/img/pro003.jpg" alt="">
        <p>Bear小熊 高硼玻璃预约养生壶Y...</p>
        <p>
          <span>￥169</span>
          <span>￥199</span>
        </p>
        <p class="Twenty">20元券</p>
      </a>
      <a href="javascirpt:;">
        <img src="../../assets/img/pro004.jpg" alt="">
        <p>Bear小熊 高硼玻璃预约养生壶Y...</p>
        <p>
          <span>￥169</span>
          <span>￥199</span>
        </p>
        <p class="Twenty">20元券</p>
      </a>
      <a href="javascirpt:;">
        <img src="../../assets/img/pro4.png" alt="">
        <p>Bear小熊 高硼玻璃预约养生壶Y...</p>
        <p>
          <span>￥169</span>
          <span>￥199</span>
        </p>
        <p class="Twenty">20元券</p>
      </a>
      <a href="javascirpt:;">
        <img src="../../assets/img/pro003.jpg" alt="">
        <p>Bear小熊 高硼玻璃预约养生壶Y...</p>
        <p>
          <span>￥169</span>
          <span>￥199</span>
        </p>
        <p class="Twenty">20元券</p>
      </a>
      <a href="javascirpt:;">
        <img src="../../assets/img/pro004.jpg" alt="">
        <p>Bear小熊 高硼玻璃预约养生壶Y...</p>
        <p>
          <span>￥169</span>
          <span>￥199</span>
        </p>
        <p class="Twenty">20元券</p>
      </a>
      <a href="javascirpt:;">
        <img src="../../assets/img/pro4.png" alt="">
        <p>Bear小熊 高硼玻璃预约养生壶Y...</p>
        <p>
          <span>￥169</span>
          <span>￥199</span>
        </p>
        <p class="Twenty">20元券</p>
      </a>
      <a href="javascirpt:;">
        <img src="../../assets/img/pro003.jpg" alt="">
        <p>Bear小熊 高硼玻璃预约养生壶Y...</p>
        <p>
          <span>￥169</span>
          <span>￥199</span>
        </p>
        <p class="Twenty">20元券</p>
      </a>
    </div>
  </div>
</template>

<script>
    export default {
        name: "similar"
    }
</script>

<style scoped>
  .similar{
    /*width: 100%;*/
    height: 2.5rem;
    background: white;
    margin-top: 0.12rem;
    padding-left: 0.15rem;
    overflow: hidden;
  }
  .similar h3{
    font-size: 0.16rem;
    padding-top: 0.14rem;
    padding-bottom: 0.14rem;
  }
  .goods{
    display: flex;
    flex: 1;
    overflow-x: scroll;
  }
  .goods a{
    display: flex;
    flex-direction: column;
    margin-right: 0.05rem;
    position: relative;
  }
  .goods .Twenty{
    position: absolute;
    width:0.45rem;
    height: 0.2rem;
    background: #ff2c46;
    color: white;
    font-size: 0.09rem;
    line-height: 0.2rem;
    border-radius: 3px;
    top:0.5rem;
    left: 0.06rem;
    text-align: center;
  }
  .goods a img{
    width: 0.89rem;
    height: 0.89rem;
  }
  .goods a p{
    font-size: 0.14rem;
    flex-shrink: 0;
  }
  .goods a p:nth-child(2){
    width:0.89rem;
    color: black;
    margin-top: 0.08rem;
    margin-bottom: 0.1rem;
  }
  .goods a p:nth-child(3) span:first-child{
    font-size: 0.16rem;
    color: #ff2841;
  }
  .goods a p:nth-child(3) span:last-child{
    color: #9a9a9a;
    text-decoration: line-through;
  }
</style>
