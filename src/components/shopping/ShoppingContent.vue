<template>
  <div class="box">
    <router-view></router-view>
    <span class='CAR'>
      <img src="../../assets/img/gouwuche.png">
    </span>
  </div>
</template>
<script>
    export default {
      name: "ShoppingContent",
    }
</script>

<style scoped lang="scss">
  .box{
    flex: 1;
    overflow-y: auto;
    margin-top: .45rem;
    position: relative;
    .CAR{
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      right: .2rem;
      bottom: .8rem;
      width: .4rem;
      height: .4rem;
      border-radius: 50%;
      background: gray;
      img{
        width: .3rem;
        height: .3rem;
      }
    }
  }
</style>
