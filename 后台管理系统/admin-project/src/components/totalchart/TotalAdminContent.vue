<template>
  <div class="r content">
    <div class="tocons">

      <div class=" minbox">
        <div class="shang">
          <div class="l">
            <button type="button" class="l" @click="create()"><span class="yib"></span>新增</button>
            <button type="button" class="l"><span class="erb"></span>保存</button>
            <button type="button" class="l"><span class="sanb"></span>审核</button>
            <button type="button" class="l" ><span class="sib"></span>删除</button>
          </div>
          <div class="r">
            <input type="text" class="l">
            <input type="button" class="r" value="搜索">
          </div>
        </div>
        <div class="xia">
          <table class="biao4">
            <thead>
            <tr>
              <th>
                <input type="checkbox" />全选
              </th>
              <th>ID</th>
              <th>标题</th>
              <th>类别</th>
              <th >作者</th>
              <th >修改日期</th>
              <th>操作</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(t,index) in table">
              <td>
                <input type="checkbox">
              </td>
              <td>{{t.ID}}</td>
              <td><a href="#">{{t.title}}</a></td>
              <td>{{t.type}}</td>
              <td>{{t.author}}</td>
              <td>{{t.time}}</td>
              <td>
                <button type="button" class="l "><span class="ts1"></span>编辑</button>
                <button type="button" class="l gai"><span class="ts2"></span>复制</button>
                <button type="button" class="l gai" @click="del(index)"><span class="ts3" ></span>删除</button>
              </td>
            </tr>
            </tbody>
          </table>
          <div class=" feny">
            <span class="l">共 8 条记录</span>
            <div class=" page-bar">
                <ul>
                  <li v-if="cur>1"><a @click="cur--">上一页</a></li>
                  <li v-if="cur==1"><a class="banclick">上一页</a></li>
                  <li v-for="idx in indexs"  :class="{ 'active': cur == idx}">
                    <a @click="btnClick(idx)">{{ idx }}</a>
                  </li>
                  <li v-if="cur!=all"><a @click="cur++">下一页</a></li>
                  <li v-if="cur == all"><a class="banclick">下一页</a></li>
                  <li><a>共<i>{{all}}</i>页</a></li>
                </ul>
            </div>
          </div>
          <hr>
          <p>注：.....</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
      name: "TotalAdminContent",
      data(){
          return{
            table:[
              {
                "ID":"001",
                "title":"Business management",
                "type":"default",
                "author":"Susan",
                "time":"2014年2月25日 7:12:23"
              },
                {
                  "ID":"002",
                  "title":"Business management",
                  "type":"default",
                  "author":"LiDa",
                  "time":"2013年2月25日 7:12:23"
               },
              {
                "ID":"003",
                "title":"Business management",
                "type":"default",
                "author":"Li",
                "time":"2012年2月25日 7:12:23"
              },
              {
                "ID":"004",
                "title":"Business management",
                "type":"default",
                "author":"Junny",
                "time":"2015年2月25日 7:12:23"
              },
              {
                "ID":"005",
                "title":"Person management",
                "type":"default",
                "author":"William",
                "time":"2015年2月25日 7:12:23"
              },
              {
                "ID":"006",
                "title":"Business management",
                "type":"default",
                "author":"Jhon",
                "time":"2017年2月25日 7:12:23"
              },
              {
                "ID":"007",
                "title":"Business management",
                "type":"default",
                "author":"Rose",
                "time":"2015年5月12日 3:12:23"
              },
              {
                "ID":"008",
                "title":"Person management",
                "type":"default",
                "author":"Jack",
                "time":"2018年2月25日 4:12:23"
              }
          ],
            newTable:{
              "ID":"",
              "title":"",
              "type":"",
              "author":"",
              "time":""
            },
            all: 8, //总页数
            cur: 1//当前页码
          }
      },
      methods: {
        //删除行
        del:function(index){
          this.table.splice(index, 1);
        },
        //新增行
        create(){
            var num = 8;
            num++;
            this.newTable = {
              "ID":"00"+num,
              "title":"",
              "type":"",
              "author":"",
              "time":""
            }
            this.table.push(this.newTable)
            // 添加完newPerson对象后，重置它
            this.newTable = {
              "ID":"",
              "title":"",
              "type":"",
              "author":"",
              "time":""
          }
        },
        btnClick: function(data){//页码点击事件
          if(data != this.cur){
            this.cur = data
          }
        }
      },
      computed: {
        indexs: function(){
          var left = 1;
          var right = this.all;
          var ar = [];
          if(this.all>= 5){
            if(this.cur > 3 && this.cur < this.all-2){
              left = this.cur - 2
              right = this.cur + 2
            }else{
              if(this.cur<=3){
                left = 1
                right = 5
              }else{
                right = this.all
                left = this.all -4
              }
            }
          }
          while (left <= right){
            ar.push(left)
            left ++
          }
          return ar
        }
      },
      watch: {
        cur: function(oldValue , newValue){
          console.log(arguments);
        }
      },
    }
</script>

<style scoped>
  .page-bar li{
    float: left;
  }
  .page-bar li:first-child>a {
    margin-left: 0px
  }
  .page-bar a{
    border: 1px solid #ddd;
    text-decoration: none;
    position: relative;
    float: left;
    padding: 6px 12px;
    margin-left: -1px;
    line-height: 1.42857143;
    color: #337ab7;
    cursor: pointer
  }
  .page-bar a:hover{
    background-color: #eee;
  }
  .page-bar a.banclick{
    cursor:not-allowed;
  }
  .page-bar .active a{
    color: #fff;
    cursor: default;
    background-color: #337ab7;
    border-color: #337ab7;
  }
  .page-bar i{
    font-style:normal;
    color: #d44950;
    margin: 0px 4px;
    font-size: 12px;
  }
  #admin .content{
    overflow: auto;
    margin-top: 30px;
    flex: 1 1 0%;

  }
  #admin .content .tocons{
    padding: 0px 6px;
  }
  #admin .content .tocons .minbox{
    padding: 25px;
    margin-top: 46px;
    width: 100%;
    box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.06), 0 1px 0px 0 rgba(0, 0, 0, 0.02);
    border-radius: 5px;
    background-clip: padding-box;
    margin-bottom: 20px;
    background-color: #fff;
  }
  #admin .content .tocons .minbox .shang{
    margin: 0 auto;
    width: 100%;
    overflow: hidden;
    background: #fff;
    display: flex;
    justify-content: space-between;
  }
  #admin .content .tocons .minbox .shang div.l{
    position: relative;
    display: inline-block;
    vertical-align: middle;
    margin-left: 5px;
  }
  #admin .content .tocons .minbox .shang div.l button{
    display: inline-block;
    margin-bottom: 0;
    padding:6px 11px;
    vertical-align: middle;
    font-size: 13px;
    font-weight: normal;
    line-height: 1.2;
    text-align: center;
    white-space: nowrap;
    background: #e6e6e6;
    border: 1px solid transparent;
    border-color: #bbb;
    border-right:1px solid #ddd ;
    cursor: pointer;
  }
  #admin .content .tocons .minbox .shang div.l button span{
    display: inline-block;
    width:15px;
    height:15px;
    margin-right: 4px;

  }
  #admin .content .tocons .minbox .shang div.l button span.yib{
    background: url("../../assets/image/to1.png") no-repeat 0 1px;
    background-size: 15px auto;
  }
  #admin .content .tocons .minbox .shang div.l button span.erb{
    background: url("../../assets/image/to2.png") no-repeat 0 1px;
    background-size: 16px auto;
  }
  #admin .content .tocons .minbox .shang div.l button span.sanb{
    background: url("../../assets/image/to3.png") no-repeat 0 1px;
    background-size: 15px auto;
  }
  #admin .content .tocons .minbox .shang div.l button span.sib{
    background: url("../../assets/image/to4.png") no-repeat;
    background-size: 16px auto;
  }

  #admin .content .tocons .minbox .shang div.l button:hover{
    background: #ccc;
  }
  #admin .content .tocons .minbox .shang div.r{
    padding: 0 15px;
    height: 33px;
  }
  #admin .content .tocons .minbox .shang div.r input{
    font-size: 14px;
    height: 100%;
    border: 1px solid #ccc;
    padding-left: 5px;
  }
  #admin .content .tocons .minbox .shang div.r input.r{
    display: inline-block;
    padding: 5px 12px;
    vertical-align: middle;
    font-size: 16px;
    font-weight: normal;
    line-height: 1.2;
    text-align: center;
    white-space: nowrap;
    border: 1px solid transparent;
    cursor: pointer;
  }


  #admin .content .tocons .minbox .xia{
    width: 100%;
    padding: 10px;
    padding-top: 5px;
  }


  #admin .content .tocons .minbox  table{
    width: 100%;
    margin-bottom:20px;
    border-spacing: 0;
    padding: 5px;
    empty-cells: show;
    border-collapse: separate;
  }
  #admin .content .tocons .minbox  table thead tr th{
    vertical-align: bottom;
    font-size: 15px;
    color: #666;
    border-bottom: 1px solid #ddd;
    padding: 8px;
    text-align: left;
    padding-left: 8px;
    line-height: 1.6;
  }
  #admin .content .tocons .minbox  table tbody tr td{
    padding: 12px;
    line-height: 1.6;
    font-size: 16px;
    padding-left: 8px;
    vertical-align: top;
    border-top: 1px solid #ddd;
  }
  #admin .content .tocons .minbox  table tbody tr td a{
    color: #0e90d2;
    font-size: 16px;
  }
  #admin .content .tocons .minbox  table tbody tr td button{
    padding:3px 10px;
    padding-right: 9px;
    display: inline-block;
    margin-bottom: 0;
    vertical-align: middle;
    font-size: 13px;
    font-weight: normal;
    text-align: center;
    white-space: nowrap;
    border: 1px solid transparent;
    cursor: pointer;
    border-color: #ccc;
    background: #fff;

  }
  #admin .content .tocons .minbox  table tbody tr td button:nth-child(1){
    color: #3bb4f2;
  }
  #admin .content .tocons .minbox  table tbody tr td button:nth-child(3){
    color: #dd514c;
  }
  #admin .content .tocons .minbox  table tbody tr td button span{
    display: inline-block;
    width:15px;
    height:17px;
    margin-right: 4px;
  }

  #admin .content .tocons .minbox  table tbody tr td button span.ts1{
    background: url("../../assets/image/to5.png") no-repeat 0 2px;
    background-size: 16px auto;
  }
  #admin .content .tocons .minbox  table tbody tr td button span.ts2{
    background: url("../../assets/image/to6.png") no-repeat 0 2px;
    background-size: 16px auto;
  }
  #admin .content .tocons .minbox  table tbody tr td button span.ts3{
    background: url("../../assets/image/to7.png") no-repeat 0 2px;
    background-size: 16px auto;
  }

  #admin .content .tocons .minbox  table.biao4 tbody tr:nth-child(odd) td{
    background: #f9f9f9;
  }
  #admin .content .tocons .minbox  table.biao4 tbody tr:nth-child(odd):hover td{
    background: #e3e7eb;
  }
  #admin .content .tocons .minbox  table.biao4 tbody tr:hover {
    background: #e3e7eb;
  }
  #admin .content .tocons .minbox .xia  .feny{
    width: 100%;
    display: flex;
    justify-content: space-between;
    overflow: hidden;
    padding-bottom: 30px;
  }
  #admin .content .tocons .minbox .xia  .feny>span{
    font-size: 18px;
    color: #666;
  }
  #admin .content .tocons .minbox .xia  .feny >div.r ul{
    position: relative;
    padding-left: 0;
    margin: 10px 0;
    list-style: none;
    color: #999999;
    text-align: left;
    display: flex;
  }
  #admin .content .tocons .minbox .xia  .feny >div.r ul a{
    position: relative;
    display: block;
    padding: 10px 18px;
    line-height: 1.2;
    font-size: 18px;
    color: #0e90d2;
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 0;
    margin-bottom: 5px;
    margin-right: 5px;
  }
  #admin .content .tocons .minbox .xia  .feny >div.r ul li:nth-child(1) a{
    color: #666;
  }
  #admin .content .tocons .minbox .xia  .feny >div.r ul li:nth-child(2) a{
    color: #fff;
    background:#0e90d2 ;
  }
  #admin .content .tocons .minbox .xia  .feny >div.r ul a:hover{
    background: #f5f5f5;
  }
  #admin .content .tocons .minbox .xia hr{
    display: block;
    padding: 0;
    border: 0;
    height: 0;
    border-top: 1px solid #eeeeee;
    box-sizing: content-box;
  }

  #admin .content .tocons .minbox .xia>p{
    line-height: 1.6;
    font-size: 18px;
    margin-top: 20px;
    margin-bottom: 10px;
  }



</style>
