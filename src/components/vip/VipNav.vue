<template>
<div>
    <div class="navFont">
        <div class="font">
            <div class="exclusive" v-for="(i,key) in navlist" :key=key>
                <i :class="i.icon"></i>
                <p>{{i.tit}}</p>
            </div>
        </div>
        <a href="javascript:;" class="btn">
            加入小红卡会员，立享六大特权
            <i class="iconfont icon-youjiantou"></i>
        </a>
    </div>
    <ul class="menu">
        <li><a href="#">会员专享价</a></li>
        <li><a href="#">无门槛包邮</a></li>
        <li><a href="#">跨境商品包邮</a></li>
        <li><a href="#">限时购提前抢</a></li>
        <li><a href="#">专享客服</a></li>
        <li><a href="#">七天包价自动退</a></li>
        <li><a href="#">联合会员</a></li>
        <li><a href="#">猜你喜欢</a></li>
    </ul>
</div>
</template>

<script>
export default {
    name: 'VipNav',
    props:[
      "navlist"
    ]

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
