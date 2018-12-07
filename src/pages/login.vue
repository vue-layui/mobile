<template>
    <div>
        <LoginHead></LoginHead>
        <LoginFoot></LoginFoot>
    </div>
</template>

<script>
  import LoginHead  from '../components/login/LoginHead'
  import LoginFoot  from '../components/login/LoginFoot'


    export default {
        name: "login",
        components:{
            LoginHead,
            LoginFoot
        }, 
    }
</script>

<style scoped>

</style>