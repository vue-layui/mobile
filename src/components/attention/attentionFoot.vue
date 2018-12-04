<template>
    <div class="index_foot">
      <a>首页</a>
      <a>商城</a>
      <span>+</span>
      <a>消息</a>
      <a>我</a>
    </div>
</template>

<script>
    export default {
        name: "attentionFoot"
    }
</script>

<style  lang="scss" scoped>
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
