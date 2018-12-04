<template>
  <div class="slide">
    <div class="slideshow">
      <transition-group tag="ul" name="image">
        <li v-for="(imgs, index) in imgArray" v-show="index===mark" :key="index">
          <a href="#">
            <img :src='imgs.img1'>
          </a>
        </li>
      </transition-group>
    </div>
    <div class="bar">
      <span v-for="(item, index) in imgArray" :class="{ 'active':index===mark }" :key="index"></span>
    </div>
  </div>
</template>

<script>
    export default {
      name: "rotation2",
      data () {
        return {
          mark: 0,
          timer: null,
          imgArray: [
            {
              img1:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1543850344803&di=23666163ec58cbae355ae2b52306a8a3&imgtype=jpg&src=http%3A%2F%2Fimg3.imgtn.bdimg.com%2Fit%2Fu%3D2697301328%2C1010035556%26fm%3D214%26gp%3D0.jpg'
            },
            {
              img1:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1543850390804&di=39229de3ecb1fc0907e2a32517d38978&imgtype=0&src=http%3A%2F%2Fstatic.airchina.com.cn%2Fupload%2Fimg%2Fstore%2F414%2F1490784087794.jpg'
            },
            {
              img1:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1543850435606&di=90eda410efc53f5937f43221302d8a05&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01837c55b896e46ac7253f36006fcd.jpg%401280w_1l_2o_100sh.jpg'
            },
            {
              img1:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1543850475453&di=031ae234187da7791809b5cb4f6769cd&imgtype=0&src=http%3A%2F%2Fimg.pconline.com.cn%2Fimages%2Fupload%2Fupc%2Ftx%2Fhousephotolib%2F1605%2F10%2Fc1%2F21322569_1462810801515_690x460.jpg'
            }
          ]
        }
      },
      methods: {
        autoPlay () {
          this.mark++;
          if (this.mark === 4) {
            this.mark = 0
          }
        },
        play () {
          this.timer = setInterval(this.autoPlay, 2000)
        },
        change (i) {
          this.mark = i
        },
        stop () {
          clearInterval(this.timer)
        },
        // move () {
        //   this.timer = setInterval(this.autoPlay, 2500)
        // }
      },
      created () {
        this.play()
      }
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
    height: 100%;
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
