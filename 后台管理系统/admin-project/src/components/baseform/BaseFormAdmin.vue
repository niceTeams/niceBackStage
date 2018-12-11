<template>
  <div id="admin">
   <total-admin-sides></total-admin-sides>
    <base-form-admin-con></base-form-admin-con>
  </div>
</template>

<script>
    import TotalAdminSides from "../totalchart/TotalAdminSides";
    import BaseFormAdminCon from "./BaseFormAdminCon";
    export default {
        name: "BaseFormAdmin",
      components: {BaseFormAdminCon, TotalAdminSides}
    }
</script>

<style scoped>
  #admin{
    width: 100%;
    height: 100%;
    display:flex;
  }
</style>
