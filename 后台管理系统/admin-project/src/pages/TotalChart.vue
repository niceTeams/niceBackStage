<template>
  <div class="all">
      <public-header></public-header>
      <total-admin></total-admin>
  </div>
</template>

<script>

    import TotalAdmin from "../components/totalchart/TotalAdmin";
    import PublicHeader from "../components/totalchart/PublicHeader";
    export default {
        name: "TotalChart",
      components: {PublicHeader, TotalAdmin}
    }
</script>

<style scoped>
  .all{ font-size:12px; color:#555; background: #ebeff2;height: 100%;
    overflow: hidden}
</style>
