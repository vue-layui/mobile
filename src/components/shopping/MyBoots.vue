<template>
    <div class="bigBox">
      <ul>
        <li  :key="index" v-for="(p , index ) in list" @click="gobuy">
          <p><img :src="p.imgs1" alt=""></p>
          <p>{{p.title1}}</p>
          <p>{{p.title2}}</p>
          <p>
            <span>￥<i>{{p.pic1}}</i></span>
            <span>￥<i>{{p.pic2}}</i></span>
            <img :src="p.imgs2" alt="">
          </p>
          <p class="px">
            <span>{{p.pref1}}</span>
            <span>{{p.pref2}}</span>
            <span>
              <img :src="p.imgs3" alt=""><i>{{p.pic3}}</i>
            </span>
          </p>
          <p class="ps">
            <span>{{p.prop}}</span>
          </p>
        </li>
      </ul>
    </div>
</template>
<script>
    export default {
      name: "MyBoots",
      mounted(){
        $(".px").each(function(){
          $(".px span").each(function(){
            if($(".px span:empty")){
              $($(".px span:empty")).css({
                display:"none"
              })
            }
          });
        });
        $(".ps").each(function(){
          if($(".ps span:empty")){
            $(".ps span:empty").css({
              display:"none"
            })
          }
        })
      },
      data(){
        return {
          list:[
            {
              imgs1:'../static/img/x1.png',
              imgs2:'../static/img/31.png',
              imgs3:'',
              title1:'美国·红五特惠限购一支',
              title2:'ECOLIPS依冠离丽唇ECOLIPS依冠离丽唇 摩洛我们滆湖',
              pic1:'38',
              pic2:'68',
              pic3:'',
              pref1:'10元劵',
              pref2:'满88减8',
              prop:''
            },
            {
              imgs1:'../static/img/x2.png',
              imgs2:'../static/img/31.png',
              imgs3:'',
              title1:'美国·红五特惠限购一支',
              title2:'ECOLIPS依冠离丽唇ECOLIPS依冠离丽唇 摩洛我们滆湖',
              pic1:'38',
              pic2:'68',
              pic3:'',
              pref1:'10元劵',
              pref2:'',
              prop:'自营'
            },
            {
              imgs1:'../static/img/x3.png',
              imgs2:'../static/img/31.png',
              imgs3:'../static/img/29.png',
              title1:'美国·红五特惠限购一支',
              title2:'ECOLIPS依冠离丽唇ECOLIPS依冠离丽唇 摩洛我们滆湖',
              pic1:'38',
              pic2:'68',
              pic3:'￥199',
              pref1:'10元劵',
              pref2:'',
              prop:''
            },
            {
              imgs1:'../static/img/x4.png',
              imgs2:'../static/img/31.png',
              imgs3:'',
              title1:'美国·红五特惠限购一支',
              title2:'ECOLIPS依冠离丽唇ECOLIPS依冠离丽唇 摩洛我们滆湖',
              pic1:'38',
              pic2:'68',
              pic3:'',
              pref1:'10元劵',
              pref2:'',
              prop:'自营'
            },
            {
              imgs1:'../static/img/x5.png',
              imgs2:'../static/img/31.png',
              imgs3:'',
              title1:'美国·红五特惠限购一支',
              title2:'ECOLIPS依冠离丽唇ECOLIPS依冠离丽唇 摩洛我们滆湖',
              pic1:'38',
              pic2:'68',
              pic3:'',
              pref1:'10元劵',
              pref2:'',
              prop:''
            },
            {
              imgs1:'../static/img/x6.png',
              imgs2:'../static/img/31.png',
              imgs3:'',
              title1:'美国·红五特惠限购一支',
              title2:'ECOLIPS依冠离丽唇ECOLIPS依冠离丽唇 摩洛我们滆湖',
              pic1:'38',
              pic2:'68',
              pic3:'',
              pref1:'10元劵',
              pref2:'',
              prop:'自营'
            },
            {
              imgs1:'../static/img/x7.png',
              imgs2:'../static/img/31.png',
              imgs3:'',
              title1:'美国·红五特惠限购一支',
              title2:'ECOLIPS依冠离丽唇ECOLIPS依冠离丽唇 摩洛我们滆湖',
              pic1:'38',
              pic2:'68',
              pic3:'',
              pref1:'10元劵',
              pref2:'',
              prop:'自营'
            },
            {
              imgs1:'../static/img/x8.png',
              imgs2:'../static/img/31.png',
              imgs3:'',
              title1:'美国·红五特惠限购一支',
              title2:'ECOLIPS依冠离丽唇ECOLIPS依冠离丽唇 摩洛我们滆湖',
              pic1:'38',
              pic2:'68',
              pic3:'',
              pref1:'10元劵',
              pref2:'',
              prop:''
            },
            {
              imgs1:'../static/img/x9.png',
              imgs2:'../static/img/31.png',
              imgs3:'',
              title1:'美国·红五特惠限购一支',
              title2:'ECOLIPS依冠离丽唇ECOLIPS依冠离丽唇 摩洛我们滆湖',
              pic1:'38',
              pic2:'68',
              pic3:'',
              pref1:'10元劵',
              pref2:'',
              prop:'自营'
            },
            {
              imgs1:'../static/img/x10.png',
              imgs2:'../static/img/31.png',
              imgs3:'',
              title1:'美国·红五特惠限购一支',
              title2:'ECOLIPS依冠离丽唇ECOLIPS依冠离丽唇 摩洛我们滆湖',
              pic1:'38',
              pic2:'68',
              pic3:'',
              pref1:'10元劵',
              pref2:'',
              prop:'自营'
            },
            {
              imgs1:'../static/img/x11.png',
              imgs2:'../static/img/31.png',
              imgs3:'',
              title1:'美国·红五特惠限购一支',
              title2:'ECOLIPS依冠离丽唇ECOLIPS依冠离丽唇 摩洛我们滆湖',
              pic1:'38',
              pic2:'68',
              pic3:'',
              pref1:'10元劵',
              pref2:'',
              prop:'自营'
            },
            {
              imgs1:'../static/img/x12.png',
              imgs2:'../static/img/31.png',
              imgs3:'',
              title1:'美国·红五特惠限购一支',
              title2:'ECOLIPS依冠离丽唇ECOLIPS依冠离丽唇 摩洛我们滆湖',
              pic1:'38',
              pic2:'68',
              pic3:'',
              pref1:'10元劵',
              pref2:'',
              prop:''
            },
            {
              imgs1:'../static/img/x1.png',
              imgs2:'../static/img/31.png',
              imgs3:'',
              title1:'美国·红五特惠限购一支',
              title2:'ECOLIPS依冠离丽唇ECOLIPS依冠离丽唇 摩洛我们滆湖',
              pic1:'38',
              pic2:'68',
              pic3:'',
              pref1:'10元劵',
              pref2:'满88减8',
              prop:''
            },
            {
              imgs1:'../static/img/x2.png',
              imgs2:'../static/img/31.png',
              imgs3:'',
              title1:'美国·红五特惠限购一支',
              title2:'ECOLIPS依冠离丽唇ECOLIPS依冠离丽唇 摩洛我们滆湖',
              pic1:'38',
              pic2:'68',
              pic3:'',
              pref1:'10元劵',
              pref2:'',
              prop:'自营'
            },
            {
              imgs1:'../static/img/x3.png',
              imgs2:'../static/img/31.png',
              imgs3:'../static/img/29.png',
              title1:'美国·红五特惠限购一支',
              title2:'ECOLIPS依冠离丽唇ECOLIPS依冠离丽唇 摩洛我们滆湖',
              pic1:'38',
              pic2:'68',
              pic3:'￥199',
              pref1:'10元劵',
              pref2:'',
              prop:''
            },
            {
              imgs1:'../static/img/x4.png',
              imgs2:'../static/img/31.png',
              imgs3:'',
              title1:'美国·红五特惠限购一支',
              title2:'ECOLIPS依冠离丽唇ECOLIPS依冠离丽唇 摩洛我们滆湖',
              pic1:'38',
              pic2:'68',
              pic3:'',
              pref1:'10元劵',
              pref2:'',
              prop:'自营'
            },
            {
              imgs1:'../static/img/x5.png',
              imgs2:'../static/img/31.png',
              imgs3:'',
              title1:'美国·红五特惠限购一支',
              title2:'ECOLIPS依冠离丽唇ECOLIPS依冠离丽唇 摩洛我们滆湖',
              pic1:'38',
              pic2:'68',
              pic3:'',
              pref1:'10元劵',
              pref2:'',
              prop:''
            },
            {
              imgs1:'../static/img/x6.png',
              imgs2:'../static/img/31.png',
              imgs3:'',
              title1:'美国·红五特惠限购一支',
              title2:'ECOLIPS依冠离丽唇ECOLIPS依冠离丽唇 摩洛我们滆湖',
              pic1:'38',
              pic2:'68',
              pic3:'',
              pref1:'10元劵',
              pref2:'',
              prop:'自营'
            },
            {
              imgs1:'../static/img/x7.png',
              imgs2:'../static/img/31.png',
              imgs3:'',
              title1:'美国·红五特惠限购一支',
              title2:'ECOLIPS依冠离丽唇ECOLIPS依冠离丽唇 摩洛我们滆湖',
              pic1:'38',
              pic2:'68',
              pic3:'',
              pref1:'10元劵',
              pref2:'',
              prop:'自营'
            },
            {
              imgs1:'../static/img/x8.png',
              imgs2:'../static/img/31.png',
              imgs3:'',
              title1:'美国·红五特惠限购一支',
              title2:'ECOLIPS依冠离丽唇ECOLIPS依冠离丽唇 摩洛我们滆湖',
              pic1:'38',
              pic2:'68',
              pic3:'',
              pref1:'10元劵',
              pref2:'',
              prop:''
            },
            {
              imgs1:'../static/img/x9.png',
              imgs2:'../static/img/31.png',
              imgs3:'',
              title1:'美国·红五特惠限购一支',
              title2:'ECOLIPS依冠离丽唇ECOLIPS依冠离丽唇 摩洛我们滆湖',
              pic1:'38',
              pic2:'68',
              pic3:'',
              pref1:'10元劵',
              pref2:'',
              prop:'自营'
            },
          ]
        }



      },
      methods:{
        gobuy(){
          this.$router.push({path:'/Product',query:'index'})
        }
      }
    }
</script>

<style scoped lang="scss">
  .bigBox{
    background: #f3f8fb;
  }
  ul{
    width: 3.57rem;
    margin: 0 auto;
    margin-top: .1rem;
    column-count: 2;
    column-width: 1.715rem;
    li{
      width: 1.715rem;
      background: white;
      display: flex;
      flex-direction: column;
      margin-top: .1rem;
      border-radius: .08rem;
      p{
        width: 1.5rem;
        margin: 0 auto;
        line-height: .12rem;
      }
      p:nth-of-type(1){
        width: 1.715rem;
        display: flex;
        img{
          width: 100%;
          border-top-left-radius: .08rem;
          border-top-right-radius: .08rem;
          margin: 0 auto;
          /*height: 1.715rem;*/
        }
      }
      p:nth-of-type(2){
        font-size: .13rem;
        font-weight: 700;
        color: black;
        margin-top: .12rem;
      }
      p:nth-of-type(3){
        color: #494949;
        font-size: .125rem;
        margin-top: .14rem;
        line-height: .18rem;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
      }
      p:nth-of-type(4){
        font-size: .13rem;
        position: relative;
        height: .16rem;
        margin-top: .04rem;
        span:nth-of-type(1){
          color: #ff0019;
          display: inline-block;
          i{
            font-style: normal;
          }
        }
        span:nth-of-type(2){
          color: #8c8c8c;
          text-decoration: line-through;
          i{
            font-style: normal;
          }
        }
        img{
          height: .16rem;
          position: absolute;
          right: 0;

        }
      }
      p:nth-of-type(5){
        display: flex;
        margin-top: .04rem;
        margin-bottom: .04rem;
        span:nth-of-type(1){
          background: #ff2642;
          color: #ffffff;
          font-size: .13rem;
          padding: .035rem .025rem;
          border-radius: .03rem;
          margin-right: .06rem;
        }
        span:nth-of-type(2){
          background: #ff2642;
          color: #ffffff;
          font-size: .13rem;
          padding: .035rem .025rem;
          border-radius: .03rem;
        }
        span:nth-of-type(3){
          color: black;
          font-size: .13rem;
          padding: .035rem .025rem;
          border-radius: .03rem;
          img{
            width: .15rem;
            height: .14rem;
          }
          i{
            font-style: normal;
          }
        }

      }
      p:nth-of-type(6){
        display: flex;
        margin-top: .04rem;
        margin-bottom: .04rem;
        span{
          border:1px solid #cf7e8a;
          color: #ff2642;
          font-size: .13rem;
          padding: .035rem .025rem;
          border-radius: .03rem;
        }
      }
    }
    li:nth-of-type(2n){
      float: right;
    }
    li:nth-of-type(2n-1){
      float: left;
    }
  }
</style>
