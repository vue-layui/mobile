<template>
  <div class="box">
    <router-view></router-view>
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
  }
</style>
