<template>
  <div class="header">
    <span @click="toggle()">
      <i
        :class="{'el-icon-s-fold':this.$store.state.Heade.fold,'el-icon-s-unfold':this.$store.state.Heade.unfold}"
      ></i>
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
  methods: {
    toggle: function() {
      if (document.body.clientWidth >= 1024) {
        this.$store.state.Heade.fold = !this.$store.state.Heade.fold;
        this.$store.state.Heade.unfold = !this.$store.state.Heade.unfold;
      }else{
        this.$store.state.Heade.fold_fixed = !this.$store.state.Heade.fold_fixed;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../scss/components/header";
</style>
