<template>
  <div id="app" class="body-bg bg-theme bg-theme-1">
    <router-view name="layout"/>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style lang="scss" scoped>
@import "./scss/main.scss";
</style>

<style lang="scss">
@import "./scss/helpers/element-edit";
</style>
