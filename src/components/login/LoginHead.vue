<template>
<div>
    <!-- header -->
    <header>
        <img src="../../../static/img/mb.jpg" class="mb"/>
    </header>
    <div class="cont">
        <a href="" class="close">
            <i class="iconfont icon-guanbi"></i>
        </a>
        <h3>登录后可查看我的主页</h3>
        <div class="phoneLogin">
            <span>
                <i class="iconfont icon-jia"></i>86<i class="iconfont icon-xiajiantou"></i>
            </span>
            <input type="text" value="输入手机号" class="txt" id="userPhone" onfocus="if (value =='输入手机号'){value =''}" onblur="if (value ==''){value='输入手机号'}">
        </div>
        <a href="" class="sureBtn">确定</a>
        <a href="" class="passLogin">密码登录</a>
    </div>
</div>
</template>

<script>
import $ from 'jquery'

export default {
    name: 'LoginHead',
    mounted(){
        //手机号码验证
        $("#userPhone").blur(function(){
            //以1开头，第二位不能为0,1，2，紧接着是9个数字
            var reg = /^1[3-9]\d{9}$/;
            if(reg.test($("#userPhone").val())==true){
                $(".sureBtn").css("background-color","#fe535c");
            }  
        });
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
