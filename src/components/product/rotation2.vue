<template>
  <div class="slide">
    <div class="slideshow">
      <div class="banner">
        <div class="out_container">
          <div class="in_container">
            <div class="swiper-wrapper" :key="index" v-for="(p , index) in rot">
              <div class="swiper-slide"><img :src="p.imgs1" alt=""></div>
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
    </div>
    <div class="bar">
      <span></span>
    </div>
  </div>
</template>

<script>
    import 'swiper/dist/css/swiper.css'
    import Swiper from 'swiper';
    export default {
        name: "rotation2",
        props:["rot"],
        // data () {
        //     return {
        //         mark: 0,
        //         timer: null,
        //     }
        // },
        mounted(){
            var mySwiper = new Swiper('.in_container', {
                prevButton: '.swiper-button-prev',
                nextButton: '.swiper-button-next',
                autoplay:true,//设置自动循环播放
//      autoplayStopOnLast:true
            })
        },
        // methods: {
        //     autoPlay () {
        //         this.mark++;
        //         if (this.mark === 4) {
        //             this.mark = 0
        //         }
        //     },
        //     play () {
        //         this.timer = setInterval(this.autoPlay, 2000)
        //     },
        //     change (i) {
        //         this.mark = i
        //     },
        //     stop () {
        //         clearInterval(this.timer)
        //     },
        //     // move () {
        //     //   this.timer = setInterval(this.autoPlay, 2500)
        //     // }
        // },
        // created () {
        //     this.play()
        // }
    }
</script>

<style scoped>
  * {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  .slide {
    width: 100%;
    margin: 0 auto;
    overflow: hidden;
    position: absolute;
    top:0.2rem;
  }
  .slideshow {
    width: 100%;
    height: 3.58rem;
  }
  li {
    position: absolute;
  }
  img {
    width: 100%;
    height: 3.58rem;
  }
  .bar {
    position: absolute;
    width: 100%;
    top:230px;
    margin: 0 auto;
    z-index: 10;
    text-align: center;
  }
  .bar span {
    width: 0.05rem;
    height: 0.02rem;
    border: 1px solid;
    background: white;
    display: inline-block;
    margin-right: 10px;
  }
  .active {
    background: red !important;
  }
  .image-enter-active {
    transform: translateX(0);
    transition: all 1.5s ease;
  }
  .image-leave-active {
    transform: translateX(-100%);
    transition: all 1.5s ease;
  }
  .image-enter {
    transform: translateX(100%);
  }
  .image-leave {
    transform: translateX(0);
  }
</style>
