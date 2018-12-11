<template>
  <div id="admin">
    <total-admin-sides></total-admin-sides>
    <total-form-admin-con></total-form-admin-con>
  </div>
</template>

<script>
    import TotalAdminSides from "../totalchart/TotalAdminSides";
    import TotalFormAdminCon from "./TotalFormAdminCon";
    export default {
        name: "TotalFormAdmin",
      components: {TotalFormAdminCon, TotalAdminSides}
    }
</script>

<style scoped>
  #admin{
    width: 100%;
    height: 100%;
    display:flex;
  }
</style>
