<template>
  <div class="all">
   <public-header></public-header>
    <total-form-admin></total-form-admin>
  </div>
</template>

<script>
    import PublicHeader from "../components/totalchart/PublicHeader";
    import TotalFormAdmin from "../components/totalform/TotalFormAdmin";
    export default {
        name: "TotalForm",
      components: {TotalFormAdmin, PublicHeader}
    }
</script>

<style scoped>
  .all{ font-size:12px; color:#555; background: #ebeff2;height: 100%;
    overflow: hidden}
</style>
