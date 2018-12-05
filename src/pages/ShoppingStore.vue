<template>
  <div class="box">
    <shopping-header></shopping-header>
    <shopping-content></shopping-content>
    <attention-foot></attention-foot>
  </div>
</template>

<script>
    import attentionFoot from '../components/attention/attentionFoot'
    import ShoppingHeader from "../components/shopping/ShoppingHeader";
    import ShoppingContent from "../components/shopping/ShoppingContent";
    export default {
        name: "ShoppingStore",
        components: {ShoppingContent, ShoppingHeader,attentionFoot}
    }
</script>

<style scoped>
  @import '../assets/css/public.css';
  .box{
    display: flex;
    height: 100%;
    flex-direction: column;
  }
</style>
