<template>
  <div class="bigBox">
    <shopping-banner></shopping-banner>
    <content-one></content-one>
    <content-two></content-two>
    <shopping-three></shopping-three>
    <shopping-four></shopping-four>
  </div>
</template>

<script>
    import ContentOne from "./ContentOne";
    import ContentTwo from "./ContentTwo";
    import ShoppingThree from "./ShoppingThree";
    import ShoppingFour from "./ShoppingFour";
    import ShoppingBanner from "./ShoppingBanner";
    export default {
      name: "TuiJian",
      components: {ShoppingBanner, ShoppingFour, ShoppingThree, ContentTwo, ContentOne}
    }
</script>

<style scoped>
  .bigBox{
    width: 3.57rem;
    margin: 0 auto;
    /*background: #007aff;*/
  }
</style>
