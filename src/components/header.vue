<template>
  <div class="header">
    <span @click="toggle">
      <i :class="{'el-icon-s-fold':fold,'el-icon-s-unfold':unfold}"></i>
    </span>
    <el-dropdown>
      <i class="el-icon-setting" style="margin-right: 15px;cursor:pointer;"></i>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>查看</el-dropdown-item>
        <el-dropdown-item>新增</el-dropdown-item>
        <el-dropdown-item>删除</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
    <span>王小虎</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fold: true,
      unfold: false
    };
  },
  methods: {
    toggle: function() {
      this.fold = !this.fold;
      this.unfold = !this.unfold;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../scss/components/header";
</style>
