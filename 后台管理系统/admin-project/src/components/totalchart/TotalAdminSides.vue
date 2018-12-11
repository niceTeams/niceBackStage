<template>
  <div class="l sides">
    <div class="up">
      <div>
        <img src="../../assets/image/avatar-1.jpg">
      </div>
      <h5>
        <a href="#">Mat Helme</a>
      </h5>
      <ul>
        <li>
          <span></span>
        </li>
        <li>
          <span></span>
        </li>
      </ul>
    </div>
    <ul class="downb">
        <li tag="li"  :to="l.to" :key="index"  v-for="(l,index) in list" @click="showToggle(l)"><a  :style="{backgroundImage: 'url(' + l.bgImg + ')','background-repeat':'no-repeat','background-size':'auto 20px','background-position':'0 center'  }">{{l.title}}</a>
        <ul v-if="l.isSubshow">
          <router-link tag="li" :key="index" :to="t.to" v-for="(t,index) in l.two"><a href="#">{{t.subtitle}}</a></router-link>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
    export default {
        name: "TotalAdminSides",
        data(){
            return{

              list:[
                {"title":"首页","two":"","to":"/",isSubshow:false,bgImg:"../../../static/image/h1.png"},
                {
                  "title":"表格",
                  isSubshow:false,
                  bgImg:"../../../static/image/h2.png",
                  "two":[

                    {"subtitle":"表格","to":"/"},
                    {"subtitle":"完整表格","to":"/TotalChart"},
                  ],
                  "to":"/"
                },
                {
                  "title":"图表",
                  isSubshow:false,
                  bgImg:"../../../static/image/h3.png",
                  "two":[

                    {"subtitle":"折线图","to":"/"},
                    {"subtitle":"柱状图","to":"/"},
                    {"subtitle":"饼图","to":"/"},
                  ],
                  "to":"/"
                },
                {
                  "title":"表单",
                  isSubshow:false,
                  bgImg:"../../../static/image/h4.png",
                  "two":[
                    {"subtitle":"表单","to":"/BaseForm"},
                    {"subtitle":"完整表单","to":"/TotalForm"},
                  ],
                  "to":"/"
                }

              ]
            }
        },
        methods:{
          showToggle:function(l){
            l.isSubshow = !l.isSubshow;
          }
        }
    }
</script>

<style scoped>
  #admin .sides {
    height: 100%;
    background: #fff;
    overflow-x: hidden;
    overflow-y: auto;
    margin-top: 46px;
    width: 313px;
    border-right: 1px solid #cecece;
    padding-bottom: 40px;
  }

  /*====================滚动条的样式=========================*/
  ::-webkit-scrollbar
  {
    width: 5px;
    height: 5px;
    background-color: #F5F5F5;
  }

  /*定义滚动条轨道 内阴影+圆角*/
  ::-webkit-scrollbar-track
  {
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
    border-radius: 10px;
    background-color: #F5F5F5;
  }

  /*定义滑块 内阴影+圆角*/
  ::-webkit-scrollbar-thumb
  {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
    background-color: #eee;
  }






  #admin .sides .up{
    text-align: center;
    padding: 30px 0px 40px 0px;
    background: #fff;
  }
  #admin .sides .up>div{
    position: relative;
    height: 88px;
    width: 88px;
    margin: 0px auto;
  }
  #admin .sides .up>div img{
    display: inline-block;
    max-width: 100%;
    margin: 0 auto;
    height: auto;
    padding: 4px;
    line-height: 1.42857143;
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 50%;
  }
  #admin .sides .up h5{
    margin: 10px auto;
  }
  #admin .sides .up h5 a{
    color: #98a6ad;
    font-size: 16px;
  }
  #admin .sides .up ul{
    padding-left: 0;
    margin-left: -5px;
  }
  #admin .sides .up ul li{
    display: inline-block;
    padding-right: 5px;
    padding-left: 5px;
  }
  #admin .sides .up ul li span{
    display: inline-block;
    width: 17px;
    height: 17px;

  }
  #admin .sides .up ul li:nth-child(1) span{
    background: url("../../assets/image/hua1.png") no-repeat;
  }
  #admin .sides .up ul li:nth-child(2) span{
    background: url("../../assets/image/hua2.png") no-repeat;
  }
  #admin .sides .downb{
    padding-bottom: 26px;
  }
  #admin .sides .downb li{
    position: relative;
    display: block;
    margin-bottom: -1px;
    background-color: #fff;
    border-top: 1px solid #dedede;
    border-width: 1px 0;
    padding-left: 20px;
  }
  #admin .sides .downb>li:nth-child(1){
    border-top: 0;
  }
  #admin .sides .downb li a{
    color: #5c5c5c;
    padding: 14px 0;
    padding-left: 40px;
    display: block;
    font-size: 18px;

  }
  #admin .sides .downb>li.xiao  a  .xisp{
    width: 22px;
    height: 22px;
    margin-right: 4px;
    vertical-align: middle;
    display: inline-block;
    background: url("../../assets/image/h1.png") no-repeat left center;
    background-size: 22px auto;
  }
  #admin .sides .downb>li a  .ge{
    width: 22px;
    height: 22px;
    margin-right: 4px;
    vertical-align: middle;
    display: inline-block;
    background: url("../../assets/image/h2.png") no-repeat left center;
    background-size: 22px auto;
  }
  #admin .sides .downb>li a  .ji{
    width: 23px;
    height: 23px;
    margin-right: 4px;
    vertical-align: middle;
    display: inline-block;
    background: url("../../assets/image/h3.png") no-repeat left center;
    background-size: 23px auto;
  }
  #admin .sides .downb>li a  .dan{
    width: 22px;
    height: 22px;
    margin-right: 4px;
    vertical-align: middle;
    display: inline-block;
    background: url("../../assets/image/h4.png") no-repeat left center;
    background-size: 22px auto;
  }
  #admin .sides .downb li ul{
    margin-top: 0;
    margin-bottom: 0;
    box-shadow: 0 16px 8px -15px #e2e2e2 inset;
    background: #ececec;
    /*padding-left: 24px;*/
  }
  #admin .sides .downb li ul li{
    position: relative;
    display: block;
    margin-bottom: -1px;
    background-color: #fff;
    border-width: 1px 0;
    padding-left: 24px;
  }
  #admin .sides .downb li a.jian{
    background:url("../../assets/image/jian.png") no-repeat 260px;
    background-size: 9px auto;
  }
</style>
