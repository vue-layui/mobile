<template>
<div>
  <!-- header -->
  <header>
    <img src="../../assets/img/mb.jpg" class="mb"/>
    <div class="title">
        <i class="iconfont icon-zuojiantou" @click="goback"></i>
        <h3>小红卡会员</h3>
        <i class="iconfont icon-fanhuiyou"></i>
    </div>
  </header>
  <a href="javascript:;">
      <img src="../../assets/img/card.jpg" alt="" class="card">
  </a>
</div>
</template>

<script>
export default {
  name: 'VipHead',
  methods:{
    goback(){
      this.$router.go(-1)
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
