<template>
  <div class="all">
    <public-header></public-header>
    <base-form-admin></base-form-admin>
  </div>
</template>

<script>
    import "../assets/css/base.css"
    import PublicHeader from "../components/totalchart/PublicHeader";
    import BaseFormAdmin from "../components/baseform/BaseFormAdmin";
    export default {
        name: "BaseForm",
      components: {BaseFormAdmin, PublicHeader}
    }
</script>

<style scoped>
  .all{ font-size:12px; color:#555; background: #ebeff2;height: 100%;
    overflow: hidden}
</style>
