<template>
  <div>
    <top></top>
    <Banner></Banner>
    <Rotation2></Rotation2>
    <price></price>
    <afterSale></afterSale>
    <synopsis></synopsis>
    <similar></similar>
    <comment></comment>
    <specif></specif>
    <details2></details2>
    <instructions></instructions>
    <recommend></recommend>
    <gobuy></gobuy>
    <fixtop></fixtop>
  </div>
</template>

<script>
  import top from  "../components/product/top";
  import Banner from "../components/product/banner";
  import Rotation2 from "../components/product/rotation2";
  import price from "../components/product/price";
  import afterSale from "../components/product/afterSale";
  import Synopsis from "../components/product/synopsis";
  import Similar from "../components/product/similar";
  import Comment from "../components/product/comment";
  import Specif from "../components/product/specif";
  import Details2 from "../components/product/details2";
  import Instructions from "../components/product/instructions";
  import Recommend from "../components/product/recommend";
  import Gobuy from "../components/product/gobuy";
  import Fixtop from "../components/product/fixtop";

  export default {
    name: "Product",
    components: {
      top,
      Fixtop,
      Gobuy,
      Recommend,
      Instructions,
      Details2,
      Specif,
      Comment,
      Similar,
      Synopsis,
      Rotation2, Banner, price, afterSale
    },
  }
</script>

<style scoped>
  /*@import '../assets/css/product.css'*/
  /* common */
  body, div, dl, dt, dd, ul, li, h1, h2, h3, h4, h5, h6, code, form, input, textarea, p, th, td, fieldset, legend, figure {
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 26.67vw;
    width: 100%;
    height: 100%;
    overflow-x: hidden;
  }

  body {
    font-family: "微软雅黑", Arial;
    background: #f5f8fa;
    overflow-x: hidden;
    width: 100%;
  }

  ul, ol {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  img {
    border: 0;
  }
</style>
