<template>
    <div>
      <car-head>

      </car-head>
      <car-list :lis="lists">

      </car-list>
      <my-boots>

      </my-boots>
    </div>
</template>

<script>
    import CarHead from '../components/CarHead'
    import CarList from '../components/CarList'
    import MyBoots from '../components/MyBoots'
    export default {
        name: "ShopCar",
        components:{
          CarHead,
          CarList,
          MyBoots
        },
        data(){
            return {
                lists:[
                    JSON.parse(window.localStorage.getItem("list"))
                ]
            }
        },
    }
</script>

<style lang="scss" scoped>
@import '../assets/css/car.css';
</style>
