<template>
  <div class="r content">
    <div class="tocons">
      <div class=" minbox">
       <base-chart-admin-detail></base-chart-admin-detail>
        <div class="basebiao biaos">
          <table class="biao2">
            <thead>
            <tr>
              <th>网站名称</th>
              <th>网址</th>
              <th>创建时间</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>Amaze UI</td>
              <td>http://amazeui.org</td>
              <td>2012-10-01</td>
            </tr>
            <tr>
              <td>Amaze UI</td>
              <td>http://amazeui.org</td>
              <td>2012-10-01</td>
            </tr>
            <tr>
              <td>Amaze UI</td>
              <td>http://amazeui.org</td>
              <td>2012-10-01</td>
            </tr>
            <tr>
              <td>Amaze UI</td>
              <td>http://amazeui.org</td>
              <td>2012-10-01</td>
            </tr>
            <tr>
              <td>Amaze UI</td>
              <td>http://amazeui.org</td>
              <td>2012-10-01</td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class=" minbox">
        <div class="basebiao">
          <table class="biao3">
            <thead>
            <tr>
              <th>网站名称</th>
              <th>网址</th>
              <th>创建时间</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>Amaze UI</td>
              <td>http://amazeui.org</td>
              <td>2012-10-01</td>
            </tr>
            <tr>
              <td>Amaze UI</td>
              <td>http://amazeui.org</td>
              <td>2012-10-01</td>
            </tr>
            <tr>
              <td>Amaze UI</td>
              <td>http://amazeui.org</td>
              <td>2012-10-01</td>
            </tr>
            <tr>
              <td>Amaze UI</td>
              <td>http://amazeui.org</td>
              <td>2012-10-01</td>
            </tr>
            <tr>
              <td>Amaze UI</td>
              <td>http://amazeui.org</td>
              <td>2012-10-01</td>
            </tr>
            </tbody>
          </table>
        </div>
        <div class="basebiao">
          <table class="biao4">
            <thead>
            <tr>
              <th>网站名称</th>
              <th>网址</th>
              <th>创建时间</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>Amaze UI</td>
              <td>http://amazeui.org</td>
              <td>2012-10-01</td>
            </tr>
            <tr>
              <td>Amaze UI</td>
              <td>http://amazeui.org</td>
              <td>2012-10-01</td>
            </tr>
            <tr>
              <td>Amaze UI</td>
              <td>http://amazeui.org</td>
              <td>2012-10-01</td>
            </tr>
            <tr>
              <td>Amaze UI</td>
              <td>http://amazeui.org</td>
              <td>2012-10-01</td>
            </tr>
            <tr>
              <td>Amaze UI</td>
              <td>http://amazeui.org</td>
              <td>2012-10-01</td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>

    </div>

  </div>
</template>

<script>
    import BaseChartAdminDetail from "./BaseChartAdminDetail";
    export default {
        name: "BaseChartAdminCon",
      components: {BaseChartAdminDetail}
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
  #admin .content .tocons .minbox .biaos{
    margin-top: 46px;
  }
  #admin .content .tocons .minbox .basebiao{
    padding: 25px;
    width: 50%;
    min-height: 112px;
    /*margin-right: 20px;*/
    margin-left: 20px;
    box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.06), 0 1px 0px 0 rgba(0, 0, 0, 0.02);
    border-radius: 5px;
    background-clip: padding-box;
    margin-bottom: 20px;
    background-color: #fff;
  }
  #admin .content .tocons .minbox .basebiao table{
    width: 100%;
    margin-bottom:20px;
    border-spacing: 0;
    empty-cells: show;
    border-collapse: separate;
  }
  #admin .content .tocons .minbox .basebiao table thead tr th{
    vertical-align: bottom;
    font-size: 18px;
    color: #666;
    border-bottom: 1px solid #ddd;
    padding: 12px;
    text-align: left;
    line-height: 1.6;
  }
  #admin .content .tocons .minbox .basebiao table tbody tr td{
    padding: 12px;
    line-height: 1.6;
    font-size: 16px;
    vertical-align: top;
    border-top: 1px solid #ddd;
  }
  #admin .content .tocons .minbox .basebiao table.biao2 tbody tr:hover {
    background: #e3e7eb;
  }
  #admin .content .tocons .minbox .basebiao table.biao3{
    border: 1px solid #ddd;
  }
  #admin .content .tocons .minbox .basebiao table.biao3 thead th{
    border-left: 1px solid #ddd;;
  }
  #admin .content .tocons .minbox .basebiao table.biao3 tbody tr td{
    border-left: 1px solid #ddd;
  }
  #admin .content .tocons .minbox .basebiao table.biao4 tbody tr:nth-child(odd) td{
    background-color: #f9f9f9;
  }
</style>
