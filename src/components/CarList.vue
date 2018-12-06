<template>
  <div class="K-st">

    <ul>
      <p v-show="select">{{msg}}</p>
      <li class="K-li" v-for="(i,index) in List" :key="index">
        <div class="List">
          <a class="ListTit">
            <span class="K-ok" v-show="!i.show" @click="choose(index)"></span>
            <span class="K-on" v-show="i.show" @click="choose(index)"></span><i class="K-home">🏠</i>{{i.title}}</a>
          <div class="K-datail">
            <span class="K-ok" v-show="!i.show" @click="choose(index)"></span>
            <span class="K-on" v-show="i.show" @click="choose(index)"></span>
            <img :src="i.pic">
            <div class="K-era">
              <h3>{{i.name}}</h3>
              <i>{{i.small}}</i>
              <span class="ListPrice">${{i.single}}</span>
              <div class="ListBox">
                 <button @click="cut(index)" :disabled="i.num === 1">-</button>
                <input v-model="i.num" @click="choose(index)">
                 <button @click="add(index)">+</button>
              </div>
            </div>
          </div>
          <a class="ListTit K-tu"><i>署卷：</i><i><em>-￥15</em>(已用五张) > </i></a>
        </div>
      </li>
    </ul>
    <!--foot-->
    <div class="footer">
      <div class="footer-left">
        <div class="manner">
          <div class="footer-gou" v-show="allShow" @click="allChoose()">√</div>
          <div class="footer-cha" v-show="!allShow" @click="allChoose()">×</div>
        </div>
        <div class="allchoose" @click="allChoose()">全选</div>
        <div class="all" @click="all()">删除</div>
      </div>
      <div class="footer-right">
        <div class="itemtotal">Item total:
          <div class="money">{{accountNum.toFixed(1)}}</div>
        </div>
        <div class="settlement">结账</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "CarList",
    data() {
      return {
        select:false,
        msg:'还没有商品',
        List: [
          // {
          //   title: '小红书福利社',
          //   name: '女王的权杖薄纱黑管口红💄',
          //   pic: '../../static/img/L1.png',
          //   small: '黑管亮面 001 3.5g',
          //   single: 859,
          //   num: 1,
          //   show: true
          // },
          // {
          //   title:'kkw卡戴珊海外旗舰店',
          //   name:'kkw卡戴珊 栀愈系 颜值担当',
          //   pic: '../../static/img/L2.png',
          //   small:'75ml',
          //   single: 518,
          //   num:2,
          //   show:false
          // },
          JSON.parse(localStorage.getItem('temp'))
        ],
        allShow: false,
        accountNum: 0,
        listIndex: 0
      }
    },
    created(){
      // if(this.List.length === 0){
      //     this.select=true
      // }
     parseInt(localStorage.setItem('cot',this.List[0].num))
     //  console.log(this.List[0])
      if((this.List[0].num)!==1){
        this.List[0].num = parseInt(localStorage.getItem('count'))
        console.log(parseInt(localStorage.getItem(this.List[0].num)))
      }
    },
    methods:{
      allChoose: function() {
        this.allShow = !this.allShow
        for (var i in this.List) {
          this.List[i].show = this.allShow
        }
        this.account()
      },
      account: function() {
        this.accountNum = 0
        var that = this
        this.List.forEach(function(item, index) {
          if (item.show == true) {
            that.accountNum += (item.single * item.num)-15
          }
        })
      },
      // saveIndex: function(index) {
      //   this.listIndex = index
      // },
      add: function(i) {
        this.listIndex = i
        this.List[i].num++;
        // localStorage.setItem('cot',parseInt(this.$store.state.count))
        this.$store.dispatch("addCount");
        this.account()
      },
      cut: function(i) {
        this.listIndex = i
        this.$store.dispatch("subCount")
        this.List[i].num--;

        this.account()
      },
      choose: function(i) {
        this.List[i].show = !this.List[i].show
        console.log(this.List.length)
        var choose = this.List.filter(function(i) {
          return i.show == true;
        });
        choose.length == this.List.length ? this.allShow = true : this.allShow = false
        this.account()
      },
      all: function() {
        localStorage.clear();
        for (var i = this.List.length - 1; i >= 0; i--) {
          console.log(i);
          if (this.List[i].show == true) {
            this.List.splice(i, 1);
          }
        }
        this.account()
      }
    },

  }
</script>

<style scoped>
  .footer-gou,.footer-cha {
    width:14px;
    height:14px;
    border-radius:7px;
    font-size:7px;
    color:white;
    border:solid 1px #bcbcbc;
    margin-left:22px;
    display:flex;
    justify-content:center;
    align-items:center;
    cursor:pointer;
  }
  .footer-gou {
    background:#f07b19;
    margin-right: .1rem;
  }
  .footer-cha {
    background:red;
    margin-right: .1rem;
  }
  .settlement {
    width:1rem;
    height:100%;
    margin-left:30px;
    display:flex;
    align-items: center;
    justify-content:center;
    background:linear-gradient(to top,#fb3023,#f21305);
    color:white;
    font-size:14px;
    font-weight:bolder;
  }
  .manner {
    line-height:60px;
    height:60px;
    display:flex;
    align-items:center;
  }
  .money {
    color:red;
  }
  .itemtotal {
    text-align: center;
    display: flex;
    align-items: center;
  }
  .footer{
    background: #fff;
    z-index: 99;
    width: 100%;
    font-size: .12rem;
    display: flex;
    justify-content: space-between;
    position: fixed;
    bottom: 0;
    left: 0;
  }
  .allchoose{
    margin: 0 .1rem;
  }
  .footer-left{
    display: flex;
    align-items: center;
  }
  .footer-right{
    display: flex;
  }
  input{
    width: 25px;
    height: 15px;
    text-align: center;
  }
  em{
    color: orangered;
  }
  .K-tu{
    justify-content: space-between;
    padding: 0 .15rem;
  }
  .K-li {
    font-size: .14rem;
    display: flex;
  }
  .K-on{
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: orangered;
    margin: .2rem;
  }
  .K-ok{
    width: 10px;
    height: 10px;
    border-radius: 50%;
    border: 2px solid gray;
    margin: .2rem;
  }
  .K-home{
    margin-left: .15rem;
  }
  .K-st {
    background: #fff;
    width: 100%;
    height: 100%;
  }

  .List {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
  .ListTit{
   display:flex;
   height:.5rem;
   line-height:0.5rem;
 }
  img {
    width: 1.1rem;
    height: 1.1rem;
    margin-right:0.05rem;
  }

  .K-datail {
    display: flex;
  }

  .K-era h3{
    height:0.25rem;
    line-height:0.25rem;
  }
  .K-era i{
    font-size:0.08rem;
    color:#333;
    display:block;
    margin-bottom:0.4rem;
  }
  .ListPrice{
    font-size:0.15rem;
    color:orangered;
  }
  p {
    display: inline;
  }
  .ListBox{
    float:right;
    display:flex;
    width:0.6rem;
    justify-content: space-around;
  }
  .ListBox button{
     width:0.15rem;
    height:0.15rem;
    background:#ccc;
    border:none;
  }
  .ListBox button:nth-child(2){
    background:#fff;
    border:1px solid #ccc;
  }
</style>
