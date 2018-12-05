<template>
    <div>
      <car-head>

      </car-head>
      <car-list>

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
        }
    }
</script>

<style lang="scss" scoped>
@import '../assets/css/car.css';
</style>
