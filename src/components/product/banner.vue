<template>
 <div>
  <div class="banner">
    <div class="banner1">
      <!--<rotation2 class="rot2"></rotation2>-->
    </div>
    <div class="banner2">
      <a href="javascirpt:;">
        <img  src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1543850344803&di=23666163ec58cbae355ae2b52306a8a3&imgtype=jpg&src=http%3A%2F%2Fimg3.imgtn.bdimg.com%2Fit%2Fu%3D2697301328%2C1010035556%26fm%3D214%26gp%3D0.jpg"/>
      </a>
      <a href="javascirpt:;">
        <img  src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1543850390804&di=39229de3ecb1fc0907e2a32517d38978&imgtype=0&src=http%3A%2F%2Fstatic.airchina.com.cn%2Fupload%2Fimg%2Fstore%2F414%2F1490784087794.jpg"/>
      </a>
    </div>
    <div class="goOn">
      <p>
        <i class="iconfont icon-fanhui"></i>
      </p>
      <p>
        <i class="iconfont icon-fenxiang"></i>
      </p>
    </div>
  </div>
 </div>
</template>

<script>
    export default {
        name: "banner",
    }
</script>

<style scoped>
  .banner{
    width: 3.75rem;
    height: 4.33rem;
    border-bottom: 1px solid #eaeaea;
    position: relative;
    display: flex;
    flex-direction: column;
  }
  .banner1{
    width: 100%;
    height: 3.58rem;
    display: flex;
  }
  .banner2{
    height: 0.75rem;
    display: flex;
    justify-content: center;
    background: white;
  }
  .banner2 a{
    display: flex;
    align-items: center;
  }
  .banner2 a img{
    width:0.375rem;
    height: 0.375rem;
    border: 1px solid #f4201e;
    border-radius: 4px;
  }
  .banner2 a:first-child{
    margin-right: 0.1rem;
  }
  .rot2{
    display: flex;
  }
  .goOn{
    position: absolute;
    display: flex;
    z-index: 100;
    top:0;
    justify-content: space-between;
    width: 100%;
  }
  .goOn p{
    width: 0.35rem;
    height:0.375rem;
    background: white;
    display: flex;
    justify-content: center;
    align-items: center;
    color: black;
    border-radius: 50%;
  }
  .goOn p:first-child{
    margin-left: 0.1rem;
  }
  .goOn p:last-child{
    margin-right: 0.1rem;
  }
</style>
