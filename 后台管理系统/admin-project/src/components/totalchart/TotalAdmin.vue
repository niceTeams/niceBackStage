<template>
  <div id="admin">
    <total-admin-sides></total-admin-sides>
    <total-admin-content></total-admin-content>
  </div>
</template>

<script>
    import TotalAdminSides from "./TotalAdminSides";
    import TotalAdminContent from "./TotalAdminContent";
    export default {
        name: "TotalAdmin",
      components: {TotalAdminContent, TotalAdminSides}
    }
</script>

<style scoped>
  #admin{
    width: 100%;
    height: 100%;
    display:flex;
  }
</style>
