<template>
  <div class="r content">
    <div class="tocons">
      <div class=" minboxs">
        <div class="lastu">
          <h4>输入框类型<span class="r"><i></i></span></h4>
          <div class="ladown">
            <div class="l foleft">
              <!--<form>-->
              <div>
                <label class="l">标题</label>
                <input type="text" class="r" placeholder="输入标题信息">
              </div>
              <div>
                <label class="l">电子邮箱</label>
                <input type="text" class="r" placeholder="输入电子邮件">
              </div>
              <div>
                <label class="l">密码</label>
                <input type="text" class="r" placeholder="设置个密码吧">
              </div>
              <div>
                <label class="l">提示</label>
                <input type="text" class="r" placeholder="提示信息">
              </div>
              <div class="ainis">
                <label class="l">文本域</label>
                <textarea class="r"></textarea>
              </div>
              <!--</form>-->
            </div>
            <div class="r foright">
              <!--<form>-->
              <div>
                <label class="l">禁用</label>
                <input style="background: #eeeeee; font-size: 18px" type="text" class="r" placeholder="禁止输入" disabled>
              </div>
              <div style="margin-bottom: 28px" class="aini">
                <label class="l">说明信息</label>
                <div class="r">
                  <input type="text" >
                  <span style="display: block; font-size: 14px; margin-top: 3px">帮助文本，可能会超过一行，以块级元素显示</span>
                </div>

              </div>
              <div style="margin-bottom: 22px" >
                <label class="l" style="width: 9%; margin-left: 10px">下拉选框</label>
                <select class="r" style="border-radius: 4px;">
                  <option>选项一...</option>
                  <option>选项二...</option>
                  <option>选项三...</option>
                </select>
              </div>
              <div class="aini">
                <label class="l">多选框</label>
                <select class="r" multiple style="height: 104px">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
              </div>
              <!--</form>-->
            </div>
          </div>
        </div>
      </div>
      <div class=" minbox">
        <div class="basebiao status">
          <h4>验证状态</h4>
          <!--<form>-->
          <div class="yan">
            <label class="l">验证成功</label>
            <input type="text" class="l">
            <span></span>
          </div>
          <div class="yan">
            <label class="l" style="color: #F37B1D;">验证警告</label>
            <input type="text" class="l" style="border: 1px solid #F37B1D">
          </div>
          <div class="yan">
            <label class="l" style="color: #dd514c;">验证失败</label>
            <input type="text" class="l" style="border: 1px solid #dd514c">
          </div>
          <div class="yan">
            <label class="l">验证成功</label>
            <input type="text" class="l" placeholder="验证成功">
            <span></span>
          </div>
          <div class="yan">
            <label class="l" style="color: #F37B1D;">验证警告</label>
            <input type="text" class="l" style="border: 1px solid #F37B1D ;text-align: center" placeholder="验证警告">
            <span class="jing"></span>
          </div>
          <div class="yan">
            <label class="l" style="color: #dd514c;">验证失败</label>
            <input type="text" class="l" style="border: 1px solid #dd514c; text-align: center" placeholder="验证失败">
            <span class="cuo"></span>
          </div>
          <!--</form>-->
        </div>
        <div class="basebiao special">
          <h4>表单域大小</h4>
          <!--<form class="special">-->
          <input type="text" placeholder="添加了 .am-input-Ig" style="font-size: 18px"><br/>
          <input type="text" placeholder="默认的 input"><br/>
          <input type="text" placeholder="添加了 .am-input-am" style="height: 36px"><br/>
          <select style="font-size: 18px; color: #333">
            <option >添加了 .am-input-Ig</option>
          </select><br/>
          <select>
            <option>select 默认大小</option>
          </select><br/>
          <select style="height: 36px">
            <option>添加了 .am-input-am</option>
          </select>

          <!--</form>-->

        </div>
      </div>
      <div class=" minbox">
        <div class="basebiao needgai" style="padding-bottom: 0;margin-bottom: 35px">
          <h4>基本示例</h4>
          <div class="biaodan" style="margin-bottom: 0; ">
            <div>
              <label>邮件</label>
              <input type="text" placeholder="输入电子邮件">
            </div>
            <div style="margin-bottom: 20px">
              <label>密码</label>
              <input type="text" placeholder="设置个密码吧">
            </div>
            <div>
              <label style="vertical-align: middle;margin-bottom: 0"><input type="checkbox" class="l"><i class="l" style="font-style: normal; font-weight: normal; font-size: 16px; color: #666;">记住我</i></label>
              <input type="submit" value="Submit" class="lastinput" >
            </div>

          </div>
        </div>
        <div class="basebiao" style="padding-bottom: 0">
          <h4>水平排列</h4>
          <div  class="deng">
            <div class="yans">
              <label class="l">电子邮件</label>
              <input type="text" class="l" placeholder="输入电子邮件">
            </div>
            <div class="yans" >
              <label class="l">密码</label>
              <input type="text" class="l" placeholder="设置一个密码吧">
            </div>
            <div class="yans">
              <label class="l">确认密码</label>
              <input type="text" class="l" placeholder="输入确认密码">
            </div>
            <div>
              <label style="margin-left: 100px; margin-bottom: 0; margin-top: 0"><input type="checkbox" class="l"><i class="l" style="font-style: normal;  font-size: 16px; color: #888;">记住我</i></label>
              <input type="submit" value="提交登入" class="lastinput"  style="margin-left: 100px;">
            </div>

          </div>
        </div>
      </div>


    </div>

  </div>
</template>

<script>
    export default {
        name: "BaseFormAdminCon"
    }
</script>

<style scoped>
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
    padding: 25px;
    padding-left: 20px;
    margin-right: 20px;
    margin-top:46px;
    margin-left: 20px;
    box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.06), 0 1px 0px 0 rgba(0, 0, 0, 0.02);
    border-radius: 5px;
    background-clip: padding-box;
    margin-bottom: 20px;
    background-color: #fff;
  }
  #admin .content .tocons .minboxs .lastu h4{
    font-size: 18px;
    font-weight: 600;
    line-height: 18px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 28px;
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
    display: flex;
  }
  #admin .content .tocons .minboxs .lastu .ladown .foleft{
    width: 50%;
  }

  #admin .content .tocons .minboxs .lastu .ladown .foleft >div{
    overflow: hidden;
    margin-bottom: 15px;
  }
  #admin .content .tocons .minboxs .lastu .ladown .foleft >div label{
    display: inline-block;
    margin-bottom: 5px;
    font-weight: bold;
    text-align: right;
    width: 13%;
    font-size: 16px;
  }
  #admin .content .tocons .minboxs .lastu .ladown .foleft >div input{
    background-color: #FFFFFF;
    border: 1px solid #E3E3E3;
    border-radius: 4px;
    color: #565656;
    padding: 7px 12px;
    height: 44px;
    width: 84%;
    font-size: 17px;
    max-width: 100%;
  }
  #admin .content .tocons .minboxs .lastu .ladown .foleft >div textarea{
    background-color: #FFFFFF;
    border: 1px solid #E3E3E3;
    border-radius: 4px;
    color: #565656;
    padding: 7px 12px;
    height: 114px;
    width: 84%;
    max-width: 100%;
  }
  #admin .content .tocons .minboxs .lastu .ladown .foright{
    width: 50%;
  }

  #admin .content .tocons .minboxs .lastu .ladown .foright >div{
    overflow: hidden;
    margin-bottom: 15px;
  }
  #admin .content .tocons .minboxs .lastu .ladown .foright >div.aini{
    display: flex;
  }
  #admin .content .tocons .minboxs .lastu .ladown .foright >div.ainis{
    display: flex;
  }
  #admin .content .tocons .minboxs .lastu .ladown .foright >div label{
    display: inline-block;
    margin-bottom: 5px;
    font-weight: bold;
    text-align: right;
    width: 13%;
    font-size: 16px;
  }
  #admin .content .tocons .minboxs .lastu .ladown .foright >div div.r{
    width: 84%;
  }
  #admin .content .tocons .minboxs .lastu .ladown .foright >div  input{
    background-color: #FFFFFF;
    border: 1px solid #E3E3E3;
    border-radius: 4px;
    color: #565656;
    padding: 7px 12px;
    height: 44px;
    width: 84%;
    max-width: 100%;
  }
  #admin .content .tocons .minboxs .lastu .ladown .foright >div div input{
    width: 100%;
  }
  #admin .content .tocons .minboxs .lastu .ladown .foright >div select{
    width: 84%;
    background-color: #FFFFFF;
    border: 1px solid #E3E3E3;
    color: #565656;
    padding: 7px 12px;
    font-size: 18px;
    height: 40px;
  }
  #admin .content .tocons .minbox .basebiao h4{
    font-size: 18px;
    font-weight: 600;
    line-height: 16px;
    margin-bottom: 30px;
  }
  /*#admin .content .tocons .minbox .basebiao form{*/
  /*overflow: hidden;*/
  /*}*/
  #admin .content .tocons .minbox .basebiao>div{
    overflow: hidden;
    margin-bottom: 20px;
    position: relative;

  }
  #admin .content .tocons .minbox .basebiao>div.yan{
    display: flex;

  }
  #admin .content .tocons .minbox .basebiao >div label{
    width: 25%;
    text-align: center;
    font-size: 18px;
    color: #5eb95e;
    display: inline-block;
    margin-bottom: 5px;
    font-weight: bold;
  }
  #admin .content .tocons .minbox .basebiao >div input{
    display: block;
    width: 52%;
    border-radius: 2px;
    padding: 10px;
    font-size: 16px;
    line-height: 1.2;
    color: #555555;
    vertical-align: middle;
    background-color: #fff;
    border: 1px solid #5eb95e;
  }
  #admin .content .tocons .minbox .basebiao >div span{
    position:absolute;
    width:22px ;
    height:16px;
    background: url("../../assets/image/dui.png") no-repeat;
    background-size:18px auto;
    right: 105px;
    top:14px;
  }

  #admin .content .tocons .minbox .basebiao >div span.jing{
    background: url("../../assets/image/jing.png") no-repeat;
    right: 109px;
    top:14px;
  }
  #admin .content .tocons .minbox .basebiao >div span.cuo{
    background: url("../../assets/image/cuo.png") no-repeat;
    right: 106px;
  }

  #admin .content .tocons .minbox .basebiao.special input{
    display: block;
    width: 100%;
    padding: 8px;
    height: 40px;
    font-size: 17px;
    line-height: 1.2;
    color: #555555;
    vertical-align: middle;
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 2px;
    margin-bottom: 10px;
  }

  #admin .content .tocons .minbox .basebiao.special select{
    display: block;
    width: 100%;
    padding: 8px;
    height: 40px;
    font-size: 17px;
    line-height: 1.2;
    color: #555555;
    vertical-align: middle;
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 2px;
    margin-bottom: 10px;
  }

  #admin .content .tocons .minbox .basebiao >div.biaodan div label{
    width: 25%;
    text-align: left;
    font-size: 18px;
    color: #888;
    display: inline-block;
    margin-bottom: 10px;
    font-weight: bold;
    display: flex;
  }
  #admin .content .tocons .minbox .basebiao >div.biaodan div label input{
    width:14px;
    height: 14px;
    margin-right: 8px;
    margin-top: 4px;

  }
  #admin .content .tocons .minbox .basebiao >div.biaodan div input{
    display: block;
    width: 100%;
    border-radius: 2px;
    padding: 10px;
    font-size: 18px;
    line-height: 1.2;
    color: #555555;
    vertical-align: middle;
    background-color: #fff;
    border: 1px solid #ccc;
    margin-bottom:20px;
  }

  #admin .content .tocons .minbox .basebiao >div.biaodan div input.lastinput{
    display: block;
    border-radius: 2px;
    padding: 10px;
    width: 22%;
    font-size: 18px;
    line-height: 1.2;
    color: #fff;
    vertical-align: middle;
    background-color: #0e90d2;
    margin-bottom:20px;
    border: 0;
  }


  #admin .content .tocons .minbox .basebiao >div.deng div.yans{
    overflow: hidden;
    display: flex;
  }

  #admin .content .tocons .minbox .basebiao >div.deng div label{
    width: 20%;
    text-align: right;
    font-size: 18px;
    margin-right: 18px;
    color: #888;
    display: inline-block;
    margin-bottom: 5px;
    margin-top: 10px;
    display: flex;
    font-weight: bold;
  }
  #admin .content .tocons .minbox .basebiao >div.deng div input{
    display: block;
    width: 75%;
    border-radius: 2px;
    padding: 10px;
    font-size: 18px;
    line-height: 1.2;
    color: #555555;
    vertical-align: middle;
    background-color: #fff;
    border: 1px solid #ccc;
    margin-bottom:20px;
  }

  #admin .content .tocons .minbox .basebiao >div.deng div label input{
    width:15px;
    height: 15px;
    margin-right: 8px;
    margin-top: 4px;

  }
  #admin .content .tocons .minbox .basebiao >div.deng div input.lastinput{
    display: block;
    border-radius: 2px;
    padding: 10px;
    width: 22%;
    font-size: 18px;
    line-height: 1.2;
    color: #555;
    vertical-align: middle;
    background-color: #e6e6e6;
    margin-bottom:20px;
    border: 0;
  }

</style>
