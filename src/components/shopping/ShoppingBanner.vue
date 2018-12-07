<template>
  <div class="banner">
    <div class="out_container">
      <div class="in_container">
        <div class="swiper-wrapper">
          <div class="swiper-slide"><img src="../../assets/imgs/02.png" alt=""></div>
          <div class="swiper-slide"><img src="../../assets/imgs/03.jpg" alt=""></div>
          <div class="swiper-slide"><img src="../../assets/imgs/04.jpg" alt=""></div>
          <div class="swiper-slide"><img src="../../assets/imgs/05.jpg" alt=""></div>
          <div class="swiper-slide"><img src="../../assets/imgs/06.jpg" alt=""></div>
          <div class="swiper-slide"><img src="../../assets/imgs/07.jpg" alt=""></div>
          <!--<div class="swiper-slide"><img src="" alt=""></div>
          <div class="swiper-slide"><img src="" alt=""></div>-->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import 'swiper/dist/css/swiper.css'
  import Swiper from 'swiper';
    export default {
        name: "ShoppingBanner",
      mounted(){
        var mySwiper = new Swiper('.in_container', {
          prevButton: '.swiper-button-prev',
          nextButton: '.swiper-button-next',
          autoplay:true,//设置自动循环播放
//      autoplayStopOnLast:true
        })
      },
    }
</script>

<style scoped>
  .banner {
    width: 100%;
    height: 1.8rem;
    /*margin-top: -.385rem; */
  }
  .banner .swiper-container {
    width: 100%;
    height: 100%; }
  .banner .swiper-slide {
    width: 100%;
    height: 100%;
    text-align: center;
    font-size: 18px;
    background: #fff;
    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center; }
  .banner .swiper-slide img {
    width: 100%;
    height: 1.8rem;
    border:none;
  }
  .banner .out_container {
    width: 100%;
    height: 1.4rem;
    /*margin: 39px auto;*/
    position: relative;
    /*outline: 1px solid black;*/
  }
  .banner .in_container {
    margin: 0 auto;
    overflow: hidden; }

  .screen {
    width: 3.44rem;
    height: .515rem;
    margin: 0 auto;
    display: flex;
    align-items: center;
    /*border-bottom: .01rem solid #e6e6e6;*/
  }
  .screen a {
    font-size: .14rem;
    color: #4d5256;
    padding: 0  .15rem;
    /*border-right: .01rem solid #e6e6e6; */
  }
  .screen a:nth-of-type(4) {
    border: 0; }
  .screen a:nth-of-type(4) img {
    width: .12rem;
    height: .13rem;
    margin-right: .06rem; }
</style>
