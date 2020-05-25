<template>
  <el-container class="h-100">
    <el-aside class="sidebar-wrapper">
      <router-view name="aside" />
    </el-aside>
    <el-container class="content-wrapper">
      <el-header class="navbar navbar-expand fixed-top">
        <router-view name="header" />
      </el-header>
      <el-main class="container-fluid">
        <router-view name="main" />
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../scss/components/layout";
</style>
