<template>
    <div class="index_foot">
      <a @click="goindex">首页</a>
      <a @click="goshop">商城</a>
      <span @click="gocar">+</span>
      <a @click="govip">消息</a>
      <a @click="gome">我</a>
    </div>
</template>

<script>
    export default {
        name: "attentionFoot",
      data(){
          return{
            item:null
          }
      },
        methods:{
          goshop(){
            this.$router.push('/ShoppingSrote')
          },
          govip(){
            this.$router.push('/Vip')
          },
          gocar(){
            this.$router.push('/Car')
          },
          goindex(){
            this.$router.push('/')
          },
          gome(){
            this.$router.push('/Car')
          }
        },
      watch:{
        // '$route' (to, from) {
        //   window.scroll(0,0)
        // }
      }

    }
</script>

<style  lang="scss" scoped>
  .listietm{
    font-size: 30px;
  }
.index_foot{
  position:fixed;
  bottom:0;
  left:0;
  width:100%;
  background:#fff;
  z-index: 2;
  height:0.5rem;
  display:flex;
  justify-content: space-around;
  align-items: center;
  font-size:0.17rem;
  color:#9b9b9b;
  border-top:1px solid #ccc;
  span{
    width:0.5rem;
    height:0.35rem;
    line-height:0.35rem;
    background:#ea4149;
    color:#fff;
    text-align: center;
    border-radius:10px;
    font-size:0.17rem;
    font-weight:600;
  }
}
</style>
