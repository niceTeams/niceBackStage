<template>
  <div class="basebiao biaos">
    <table>
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
</template>

<script>
    export default {
        name: "BaseChartAdminDetail"
    }
</script>

<style scoped>
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
</style>
