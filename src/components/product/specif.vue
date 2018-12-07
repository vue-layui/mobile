<template>
  <div>
  <div class="specif">
    <p>规格参数</p>
    <a href="javascirpt:;">
      <i class="iconfont icon-xiangyou"></i>
    </a>
  </div>
  <div class="specif">
    <p>图文详情</p>
    <a href="javascirpt:;">
      <i class="iconfont icon-xiangyou"></i>
    </a>
  </div>
  </div>
</template>

<script>
    export default {
        name: "specif"
    }
</script>

<style scoped>
  .specif{
    height: 0.45rem;
    margin-top: 0.11rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: white;
  }
  .specif p{
    font-size: 0.14rem;
    margin-left: 0.15rem;
  }
  .specif a{
    display: flex;
    margin-right: 0.1rem;
  }
</style>
