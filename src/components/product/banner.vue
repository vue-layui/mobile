<template>
 <div class="K-try">
  <div class="banner">
    <div class="banner1">
      <!--<rotation2 class="rot2"></rotation2>-->
    </div>
    <div class="banner2" :key="index" v-for="(p ,index) in ban">
      <a href="javascirpt:;">
        <img  :src="p.imgs1"/>
      </a>
      <a href="javascirpt:;">
        <img :src="p.imgs1"/>
      </a>
    </div>
    <div class="goOn">
      <p @click="goback">
        <i class="iconfont icon-fanhui"></i>
      </p>
      <p>
        <i class="iconfont icon-fenxiang"></i>
      </p>
    </div>
  </div>
 </div>
</template>

<script>
    export default {
        name: "banner",
        props:["ban"],
        methods:{
          goback(){
            this.$router.go(-1)
          }
        }
    }
</script>

<style scoped>
  .K-try{
    position: relative;
  }
  .banner{
    width: 3.75rem;
    height: 4.33rem;
    border-bottom: 1px solid #eaeaea;
    /*position: absolute;*/
    /*top: .8rem;*/
    margin-top: -3.5rem;
    display: flex;
    flex-direction: column;
  }
  .banner1{
    width: 100%;
    height: 3.58rem;
    display: flex;
  }
  .banner2{
    height: 0.75rem;
    display: flex;
    justify-content: center;
    background: white;
  }
  .banner2 a{
    display: flex;
    align-items: center;
  }
  .banner2 a img{
    width:0.375rem;
    height: 0.375rem;
    border: 1px solid #f4201e;
    border-radius: 4px;
  }
  .banner2 a:first-child{
    margin-right: 0.1rem;
  }
  .rot2{
    display: flex;
  }
  .goOn{
    position: absolute;
    display: flex;
    z-index: 100;
    top:0;
    justify-content: space-between;
    width: 100%;
  }
  .goOn p{
    width: 0.35rem;
    height:0.375rem;
    background: white;
    display: flex;
    justify-content: center;
    align-items: center;
    color: black;
    border-radius: 50%;
  }
  .goOn p:first-child{
    margin-left: 0.1rem;
  }
  .goOn p:last-child{
    margin-right: 0.1rem;
  }
</style>
