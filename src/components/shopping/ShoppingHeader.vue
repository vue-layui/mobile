<template>
    <header>
        <div class="top">
          <a>登陆</a>
          <a>
            <img src="../../assets/imgs/01.png" alt="">
            <span>大家都在搜"百元解决圣诞礼物"</span>
          </a>
        </div>
        <div class="bottom">
          <a href="javascript:void(0)" @click="gotuijian()">推荐</a>
          <a href="javascript:void(0)" @click="goMyBoots()">包包鞋靴</a>
          <a href="javascript:void(0)" @click="goHealth()"> 保健品</a>
          <a href="javascript:void(0)" @click="goColourMakeup()">彩妆</a>
          <a href="javascript:void(0)" @click="goPersonalCare()">个人护理</a>
          <a href="javascript:void(0)">更多</a>
        </div>
    </header>
</template>

<script>
    export default {
        name: "ShoppingHeader",
        mounted(){
          $(".bottom a").click(function(){
              $(".bottom a").css({
                  color:"#7f7f7f"
              })
              $(this).css({
                  color:"black"
              })
          })

        },
        methods:{
          gotuijian(){
            this.$router.replace("/TuiJian")

          },
          goColourMakeup(){
            this.$router.replace("/ColourMakeup")
          },
          goHealth(){
            this.$router.push("/Health")
          },
          goPersonalCare(){
            this.$router.push("/PersonalCare")
          },
          goMyBoots(){
            this.$router.push("/MyBoots")
          }
        }
    }
</script>

<style scoped lang="scss">

  header{
    width: 100%;
    height: .87rem;
    .top{
      display: flex;
      align-items: center;
      height: .49rem;
      border-bottom: 1px solid #f2f2f2;
      a:nth-of-type(1){
        font-size: .13rem;
        color: #f01d38;
        margin-left: .16rem;
      }
      a:nth-of-type(2){
        width: 3.05rem;
        height: .32rem;
        background: #f5f5f5;
        margin-left: .16rem;
        border-radius: .15rem;
        display: flex;
        align-items: center;
        img{
          width: .13rem;
          height: .15rem;
          margin-left: .08rem;
        }
        span{
          display: inline-block;
          font-size: .13rem;
          color: #7f7f7f;
          margin-left: .06rem;
        }
      }
    }
    .bottom{
      width: 100%;
      height: .38rem;
      display: flex;
      overflow-x: auto;
      align-items: center;
      /*overflow: hidden;*/
      a{
        flex-shrink: 0;
        font-size: .13rem;
        color: #7f7f7f;
        margin: 0 .18rem;
      }
      a:nth-of-type(1){
        color: #000;
      }
        a:last-of-type{
            padding-right:.18rem ;
        }
    }

    .bottom::-webkit-scrollbar{
      display: none;
    }
  }

</style>
