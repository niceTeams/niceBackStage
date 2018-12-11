<template>
  <div id="admin">
    <total-admin-sides></total-admin-sides>
    <base-chart-admin-con></base-chart-admin-con>
  </div>
</template>

<script>
    import TotalAdminSides from "../totalchart/TotalAdminSides";
    import BaseChartAdminCon from "./BaseChartAdminCon";
    export default {
        name: "BaseChartAdmin",
      components: {BaseChartAdminCon, TotalAdminSides}
    }
</script>

<style scoped>
  #admin{
    width: 100%;
    height: 100%;
    display:flex;
  }
</style>
