<template>
    <div>
        <VipHead></VipHead>
        <VipNav :navlist='navlist'></VipNav>
        <VipContOne :productList='productList' :proList='proList' :pList='pList'></VipContOne>
        <VipContTwo></VipContTwo>
        <VipContThree></VipContThree>       
    </div>
</template>

<script>
  import VipHead  from '../components/vip/VipHead'
  import VipNav  from '../components/vip/VipNav'  
  import VipContOne  from '../components/vip/VipContOne'  
  import VipContTwo  from '../components/vip/VipContTwo'  
  import VipContThree  from '../components/vip/VipContThree'  

    export default {
        name: "vip",
        components:{
            VipHead,
            VipNav,
            VipContOne,
            VipContTwo,
            VipContThree
        },
        data(){
            return {
                navlist:[
                    {
                        icon:'iconfont icon-huangguan',
                        tit:'会员专享价',
                    },
                    {
                        icon:'iconfont icon-che',
                        tit:'无门槛包邮',
                    },
                    {
                        icon:'iconfont icon-43',
                        tit:'跨境商品包邮',
                    },
                    {
                        icon:'iconfont icon-yuanxingdecircular223',
                        tit:'限时购提前抢',
                    },
                    {
                        icon:'iconfont icon-7',
                        tit:'七天包价自动退',
                    },
                    {
                        icon:'iconfont icon-shafa',
                        tit:'专享客服',
                    },
                ],
                productList:[
                    {
                        propic:'./static/img/product1.jpg',

                        protit:'SK-II嫩肤清莹露230ml',
                        oldprice:'￥528',
                        logo:'./static/img/logo.jpg',
                        nowprice:'￥498'
                    },
                    {
                        propic:'./static/img/product2.jpg',
                        protit:'Saint Laurent圣罗兰莹亮口红…',
                        oldprice:'￥259',
                        logo:'./static/img/logo.jpg',
                        nowprice:'￥246'
                    },
                    {
                        propic:'./static/img/product3.jpg',
                        protit:'VT范特CICA老虎气垫 14*2/盒 #21',
                        oldprice:'￥169',
                        logo:'./static/img/logo.jpg',
                        nowprice:'￥149'
                    } 
                ],
                proList:[
                    {
                        propic:'./static/img/product4.jpg',
                        protit:'Kobayashi小林制药洗眼液 500ml',
                        oldprice:'￥99',
                        logo:'./static/img/logo.jpg',
                        nowprice:'￥82'
                    },
                    {
                        propic:'./static/img/product5.jpg',
                        protit:'Sesderma C-vit美白保湿精华',
                        oldprice:'￥188',
                        logo:'./static/img/logo.jpg',
                        nowprice:'￥179'
                    },
                    {
                        propic:'./static/img/product6.jpg',
                        protit:'Aveeno艾维诺 儿童每日倍护洗发',
                        oldprice:'￥88',
                        logo:'./static/img/logo.jpg',
                        nowprice:'￥108'
                    } 
                ],
                pList:[
                    {
                        propic:'./static/img/product7.jpg',
                        protit:'BOTANIST 清爽型洗护套装 洗发水…',
                        oldprice:'￥229',
                        nowprice:'￥398'
                    },
                    {
                        propic:'./static/img/product8.jpg',
                        protit:'SABON 身体磨砂膏600g 芒果奇异果',
                        oldprice:'￥186',
                        nowprice:'￥267'
                    },
                    {
                        propic:'./static/img/product9.jpg',
                        protit:'CLAYGE 温冷SPA蓬松洗发水 500ml',
                        oldprice:'￥129',
                        nowprice:'￥195'
                    } 
                ]
            }
        },
    }
</script>

<style scoped>
@import '../assets/css/vip.css';
</style>
