<template>
  <div>
    <div class="BookCountent" v-for="(g,key) in sliderpic" :key="key" >
      <div class="BookPeople">
          <div>
            <img :src="g.pic" alt=""/>
            <span>{{g.name}}</span>
          </div>
          <div class="attient">
            <button>关注</button>
            <i class="iconfont icon-msnui-more"></i>
          </div>
        </div>
      <div class="Bookslider1">
        <el-carousel style="height:4rem;" indicator-position="none">
          <el-carousel-item  style="height:4rem;" v-for="(i,item) in g.img" :key="item">
            <img :src="i.pic"/>
          </el-carousel-item>
        </el-carousel>
      </div>
      <div class="details">
        {{g.tit}}
      </div>
      <div class="ShopList">
         <i class="iconfont icon-fasong"><span>4</span></i>
        <div>
          <i class="iconfont icon-xin"><span>200</span></i>
          <i class="iconfont icon-shoucang"><span>201</span></i>
          <i class="iconfont icon-xiaoxi"><span>16</span></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "BookContent",
      data(){
        return{
          sliderpic:[
            {
              "pic":"../static/img/head1.png",
              "name":"墨脱要开",
              "img": [
                {"pic": "../static/img/girl1.jpg"},
                {"pic": "../static/img/girl2.jpg"},
                { "pic": "../static/img/girl3.jpg"},
                { "pic": "../static/img/girl4.jpg"},
                { "pic": "../static/img/girl5.jpg"},
                {"pic": "../static/img/girl6.jpg"}
              ],
              "tit":"分享写真 | 希望你在我身边时也可以像我望向你一样快乐"
            },
            {
              "pic":"../static/img/head2.png",
              "name":"有光生活馆",
              "img":[
              {"pic": "../static/img/n1.jpg"},
              {"pic": "../static/img/n2.jpg"},
              {"pic": "../static/img/n3.jpg"},
              {"pic": "../static/img/n4.jpg"},
              {"pic": "../static/img/n5.jpg"},
              {"pic": "../static/img/n6.jpg"}
             ],
              "tit":"女生必刷的九部宫廷风电影"
            },
            {
              "pic":"../static/img/head3.jpg",
              "name":"『西西弗书店』",
              "img":[
                {"pic": "../static/img/s1.jpg"},
                {"pic": "../static/img/s2.jpg"},
                {"pic": "../static/img/s3.jpg"},
                {"pic": "../static/img/s4.jpg"}
               ],
              "tit":"『西西弗书店』书单推荐 本月书单 手帐爱好者必读指导工具书 如何做好一本手帐"
            },
             {
               "pic":"../static/img/head4.png",
               "name":"麦丰设计",
               "img":[
               {"pic": "../static/img/f1.jpg"},
               {"pic": "../static/img/f2.jpg"},
               {"pic": "../static/img/f3.jpg"},
               {"pic": "../static/img/f4.jpg"},
               {"pic": "../static/img/f5.jpg"}
             ],
               "tit":"【130平米简约美式风格装修设计分享】"
             }
          ]
        }
      }
    }
</script>

<style lang="scss" scoped>
 .BookCountent {
   width: 100%;
   .BookPeople {
     width: 100%;
     height: 0.6rem;
     background: #fff;
     display:flex;
     justify-content: space-between;
     align-items: center;
     padding:0  0.15rem;
     box-sizing: border-box;
     img {
       float:left;
       width: 0.4rem;
       height: 0.4rem;
       margin-right:0.1rem;
       border-radius: 50%;
     }
     span{
       float:left;
       height:0.4rem;
       line-height:0.4rem;
       font-size:0.15rem;
     }
     button{
       display:block;
       width:0.75rem;
       height:0.28rem;
       line-height:0.28rem;
       color:#ea4149;
       border:1px solid #ea4149;
       border-radius: 0.14rem;
       text-align:center;
       background:#fff;
     }
     .attient{
       width:1rem;
       display:flex;
       justify-content: space-between;
       align-items: center;
     }
   }
   .Bookslider1{
     width:100%;
     height:4rem;
     background:skyblue;
     img{
       width: 100%;
       height:5rem;
     }
   }
 }
  .details{
    font-size: .15rem;
    margin: .2rem .1rem;
  }
  .ShopList{
    width:100%;
    height:0.3rem;
    padding:0 0.1rem;
    box-sizing: border-box;
    display:flex;
    align-items: center;
    justify-content: space-between;
   i{
     font-size:0.2rem;
     position:relative;
     span{
       position:absolute;
       font-size:0.06rem;
       top:-50%;
       left:100%;
     }
   }
    div{
      display:flex;
      width:1.5rem;
      justify-content: space-around;
      i{
        font-size:0.25rem;
        position:relative;
        span{
          position:absolute;
          font-size:0.06rem;
          top:-50%;
          left:100%;
        }
      }
    }
  }
</style>
