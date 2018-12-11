<template>
  <div class="r content">
    <div class="tocons">
      <div class=" minboxs">
        <div class="lastu">
          <h4>
            <p class="l">JS 表单验证</p>
            <span class="r">
                        <i></i>
                        </span>
          </h4>
          <div class="ladown">
            <div class="test">
              <label>用户名：</label><br/>
              <input  ref="input1"  @change="checkname"  type="text" v-model="name" placeholder="输入用户名（至少3个字符）">
              <span>{{msgame}}</span>
            </div>
            <div class="test">
              <label>邮箱：</label><br/>
              <input ref="input2" @change="checkemail" type="text" v-model="email" placeholder="输入邮箱">
              <span>{{msgmail}}</span>
            </div>
            <div>
              <label>网址：</label><br/>
              <input type="text" placeholder="输入网址">
            </div>
            <div class="test">
              <label>年龄：</label><br/>
              <input @change="checkage" type="text" v-model="age" placeholder="输入年龄 18-120">
              <span>{{msgage}}</span>
            </div>
            <div class="hobbyss">
              <label>爱好：</label>
              <label class="duox">
                <input type="checkbox" class="l" > 橘子
              </label>
              <label  class="duox" >
                <input type="checkbox" class="l" > 苹果
              </label>
              <label class="duox">
                <input type="checkbox" class="l" > 菠萝
              </label>
              <label class="duox">
                <input type="checkbox" class="l" > 芒果
              </label>
              <label class="duox">
                <input type="checkbox" class="l" > 香蕉
              </label>

            </div>
            <div class="hobbyss">
              <label>性别：</label>
              <label class="duox">
                <input type="radio" class="l" >男
              </label>
              <label class="duox">
                <input type="radio" class="l" >女
              </label>
              <label class="duox">
                <input type="radio" class="l" >其他
              </label>

            </div>
            <div>
              <label>下拉单选框：</label><br/>
              <select>
                <option>-=请选择一项-=</option>
                <option>选项一...</option>
                <option>选项二.....</option>
                <option>选项三.......</option>
              </select>
            </div>
            <div>
              <label>多选框：</label><br/>
              <select multiple style="width: 94%; ">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>

              </select>
            </div>
            <div>
              <label>评论：</label><br/>
              <textarea style="width: 94%; "></textarea>
            </div>
            <button type="submit">提交</button>

          </div>
        </div>
      </div>



    </div>

  </div>
</template>

<script>
    export default {
      name: "TotalFormAdminCon",
      mounted(){

      },
          data(){
            return{
              msgame:"",
              msgmail:"",
              msgage:"",
              name:"",
              email:"",
              age:"",
            }

          },
         methods: {

           checkname: function () {
             if (this.name == "") {
               this.msgame = "用户名不能为空";
               this.$refs.input1.style.borderColor = "red";

             } else {
               this.msgame = "";
               this.$refs.input1.style.borderColor = "#0f0";

             }
           },
           checkemail: function () {
             var regEmail = /^[A-Za-zd]+([-_.][A-Za-zd]+)*@([A-Za-zd]+[-.])+[A-Za-zd]{2,5}$/;
             if (this.email == '') {
               this.msgmail = "请输入邮箱";
               this.$refs.input2.style.borderColor = "red";
             } else if (!regEmail.test(this.email)) {
               this.msgmail = "邮箱格式不正确";
               this.$refs.input2.style.borderColor = "red";
             }else{
               this.msgmail = "";
               this.$refs.input2.style.borderColor = "green";
             }
           },
           checkage: function () {
             if (this.age == "") {
               this.msgage = "年龄不能为空"
             } else {
               this.msgage = "输入正确"
             }
           },
         }
      }
</script>

<style scoped>
  .ladown .test{
    position:relative ;
  }
  .ladown .test span{
    position: absolute;
    right: 70px;
    top: 46px;
    color: #f00;
  }
  #admin .content{
    overflow: auto;
    margin-top: 30px;
    flex: 1 1 0%;

  }
  #admin .content .tocons{
    padding: 0px 10px;
  }
  #admin .content .tocons .minbox{
    padding-left: 0px;
    padding-right: 0px;
    margin: 0 auto;
    width: 100%;
    display: flex;
  }
  #admin .content .tocons .minbox .basebiao{
    padding: 25px;
    width: 50%;
    margin-right: 20px;
    margin-left: 20px;
    box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.06), 0 1px 0px 0 rgba(0, 0, 0, 0.02);
    border-radius: 5px;
    background-clip: padding-box;
    margin-bottom: 20px;
    background-color: #fff;
  }

  #admin .content .tocons .minboxs{
    padding-left: 0px;
    padding-right: 0px;
    margin: 0 auto;
    width: 100%;

  }
  #admin .content .tocons .minboxs .lastu{
    padding: 27px;
    margin-right: 20px;
    margin-top: 46px;
    margin-left: 20px;
    box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.06), 0 1px 0px 0 rgba(0, 0, 0, 0.02);
    border-radius: 5px;
    background-clip: padding-box;
    margin-bottom: 20px;
    background-color: #fff;
  }
  #admin .content .tocons .minboxs .lastu h4{
    font-size: 20px;
    font-weight: 100;
    line-height: 18px;
    margin-bottom: 30px;
    color: #333333;
    display: flex;
  }
  #admin .content .tocons .minboxs .lastu h4 p{
    border-bottom: 1px solid #e5e5e5;
    width: 94%;
    padding-bottom: 15px;
  }
  #admin .content .tocons .minboxs .lastu h4>span{
    display: inline-block;
    padding: 20px 22px;
    position: relative;
  }
  #admin .content .tocons .minboxs .lastu h4>span>i{
    width: 0;
    height: 0;
    position: absolute;
    border-top: 6px solid #0e90d2;
    border-left: 6px solid #fff;
    border-right: 6px solid #fff;
    top:17px;
    left:16px;
  }

  #admin .content .tocons .minboxs .lastu .ladown{
    overflow: hidden;
    margin: 0 0 16px 0;
    width: 100%;
  }
  #admin .content .tocons .minboxs .lastu .ladown>div{
    overflow: hidden;
    margin-bottom: 20px;

  }
  #admin .content .tocons .minboxs .lastu .ladown>div.hobbyss{
    display: flex;
  }
  #admin .content .tocons .minboxs .lastu .ladown>div label{
    display: inline-block;
    margin-bottom: 8px;
    font-weight: bold;
    font-size: 18px;
  }
  #admin .content .tocons .minboxs .lastu .ladown>div input{
    display: block;
    width: 94%;
    padding:8px;
    font-size: 17px;
    line-height: 1.6;
    color: #555555;
    vertical-align: middle;
    background-color: #fff;
    border: 1px solid #ccc;
  }
  #admin .content .tocons .minboxs .lastu .ladown>div label input{
    width: 14px;
    height: 14px;
    margin-top: 5px;
    margin-right: 8px;
  }
  #admin .content .tocons .minboxs .lastu .ladown>div label.duox{
    margin-right: 10px;
    display: flex;
    font-weight: 100;
    font-size: 16px;

  }
  #admin .content .tocons .minboxs .lastu .ladown>div select{
    border: 1px solid #E3E3E3;
    border-radius: 4px;
    color: #565656;
    padding: 10px 12px;
    width: 80%;
    font-size: 17px;
  }
  #admin .content .tocons .minboxs .lastu .ladown>div textarea{
    padding: 12px;
    font-size: 17px;
    line-height: 1.4;
    color: #555555;
    vertical-align: middle;
    background-color: #fff;
    border: 1px solid #ccc;
  }

  #admin .content .tocons .minboxs .lastu .ladown >button{
    color: #fff;
    background-color: #3bb4f2;
    border: 1px solid transparent;
    border-color: #3bb4f2;
    display: inline-block;
    margin-bottom: 0;
    padding: 8px 20px;
    vertical-align: middle;
    font-size: 18px;
    font-weight: normal;
    line-height: 1.2;
    text-align: center;
    cursor: pointer;
  }
</style>
