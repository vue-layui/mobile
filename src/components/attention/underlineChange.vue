<template>
    <div>
        <ul class="Books-nav">

            <li @click="onclick(1)" :class="{itemHover:RedBook_attention===1}">关注</li>

             <li @click="onclick(2)" :class="{itemHover:RedBook_attention===2}">发现</li>

           <li @click="onclick(3)" :class="{itemHover:RedBook_attention===3}">附近</li>

        </ul>
    </div>
</template>

<script>
    export default {
        name: "underlineChange",
      data(){
        return {
          RedBook_attention:null
        }
      },
      methods:{
          onclick(index){
          this.RedBook_attention=index;
        }
      }
    }
</script>

<style scoped lang="scss">
  .itemHover{
    border-bottom:2px solid #ea4149;
  }
    .Books-nav{
        height:0.5rem;
        display:flex;
        align-items: center;
        justify-content: space-around;
      li{
        width:0.35rem;
        height:0.4rem;
        line-height:0.4rem;
        list-style: none;
        font-size:0.16rem;
        color:#333;
        position:relative;
        font-weight:600;
      }
    }
</style>


