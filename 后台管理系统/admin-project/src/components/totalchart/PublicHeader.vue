<template>
  <div id="header">
    <div class="l left1">
      <a href="#">Adminto</a>
    </div>
    <div class="r right1">
      <h3  class="l">基本表格</h3>
      <div class="r">
        <span class="l"></span>
        <form class="l">
          <input class="l" type="text" placeholder="Search...">
          <a class="r" href="#" ></a>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "PublicHeader"
    }
</script>

<style scoped>
  #header{
    border-top: 3px solid #71b6f9;
    overflow: hidden;
    position: fixed;
    top: 0;
    transform: translate3d(0, 0, 0);
    right: 0;
    left: 0;
    z-index: 1000;
    color: #666;
    display: flex;
  }
  #header  .left1{
    background: #ffffff;
    float: left;
    text-align: center;
    height: 73px;
    position: relative;
    width: 312px;
    z-index: 1;
  }
  #header  .left1 a{
    line-height: 70px;
    color: #188ae2;
    font-size: 32px;
  }
  #header  .right1{
    overflow: hidden;
    background: #ebeff2;
    flex: 1;
    display: flex;
    justify-content: space-around;
  }
  #header  .right1 h3{
    font-size: 22px;
    font-weight: 600;
    margin-bottom: 0px;
    margin-top: 0px;
    line-height: 70px;
    /*margin-left: 44px;*/
  }
  #header  .right1>div{
    margin-left: 480px;
    margin-top: 15px;
    display: flex;
  }

  #header  .right1>div>span{
    width: 30px;
    height: 30px;
    margin-top: 3px;
    display: inline-block;
    background: url("../../assets/image/ling.png") no-repeat;
  }
  #header  .right1>div>form{
    position: relative;
  }
  #header  .right1>div>form input.l{
    border: 1px solid rgba(152, 166, 173, 0.15);
    font-size: 13px;
    height: 34px;
    color: #435966;
    font-weight: 600;
    padding-left: 20px;
    padding-right: 40px;
    margin-left: 20px;
    background: rgba(152, 166, 173, 0.1);
    box-shadow: none;
    border-radius: 30px;
    width: 190px;
  }
  #header   .right1>div>form a.r{
    width: 24px;
    height: 24px;
    vertical-align: middle;
    position: absolute;
    margin: 4px auto 0;
    top: 3px;
    right: 20px;
    color: rgba(152, 166, 173, 0.7);
    background: url("../../assets/image/search.png") no-repeat;
  }
</style>
