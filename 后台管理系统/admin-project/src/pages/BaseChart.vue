<template>
  <div class="all">
   <public-header></public-header>
    <base-chart-admin></base-chart-admin>
  </div>
</template>

<script>
    import PublicHeader from "../components/totalchart/PublicHeader";
    import BaseChartAdmin from "../components/BaseChart/BaseChartAdmin";
    export default {
        name: "BaseChart",
      components: {BaseChartAdmin, PublicHeader}
    }
</script>

<style scoped>
  .all{ font-size:12px; color:#555; background: #ebeff2;height: 100%;
    overflow: hidden}
</style>
