<template>
<div>
<div class="cont">
    <div class="contitle">
        <p><span class="poit"></span>权益一：会员专享价</p>
        <p class="more">更多<i class="iconfont icon-youjiantou"></i></p>
    </div>
    <img src="../../../static/img/cont1.jpg" class="contpic">
    <div class="productAll">
        <div class="product" v-for="(j,key) in productList" :key=key>
            <img :src="j.propic" class="propic">
            <p>{{j.protit}}</p>
            <div class="price">
                <span>{{j.oldprice}}</span>
                <img :src="j.logo" class="logopic">
                <span>{{j.nowprice}}</span>
            </div>
        </div>
    </div> 
</div>
<div class="cont">
    <div class="contitle">
        <p><span class="poit"></span>权益二：无门槛包邮</p>
        <p class="more">更多<i class="iconfont icon-youjiantou"></i></p>
    </div>
    <img src="../../../static/img/cont2.jpg" class="contpic">
    <div class="productAll">
        <div class="product" v-for="(p,key) in proList" :key=key>
            <img :src="p.propic" class="propic">
            <p>{{p.protit}}</p>
            <div class="price">
                <span>{{p.oldprice}}</span>
                <img :src="p.logo" class="logopic">
                <span>{{p.nowprice}}</span>
            </div>
        </div>
    </div> 
</div>
<div class="cont">
    <div class="contitle">
        <p><span class="poit"></span>权益三：自营跨境商品包税</p>
        <p class="more">更多<i class="iconfont icon-youjiantou"></i></p>
    </div>
    <img src="../../../static/img/cont3.jpg" class="contpic">
    <div class="productAll">
        <div class="product" v-for="(k,key) in pList" :key=key>
            <img :src="k.propic" class="propic">
            <p>{{k.protit}}</p>
            <div class="price">
                <span>{{k.oldprice}}</span>
                <span class="oldprice">{{k.nowprice}}</span>
            </div>
        </div>
    </div>
</div>
</div>
</template>

<script>
export default {
    name: 'VipContOne',
    props:[
      "productList",
      "proList",
      "pList"
    ]

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.cont{
    height: 100%;
    font-size: .16rem;
    background: #fff;
    margin-bottom: .1rem;  
}
</style>
