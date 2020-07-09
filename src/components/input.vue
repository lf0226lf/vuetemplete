<template>
  <el-row :gutter="25">
    <el-col :span="24">
      <!-- {{$store.state.Heade.count}}
      <a href="javascript:;" @click="$store.commit('Count')">click</a>-->
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>基础用法</span>
          <!-- <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button> -->
        </div>
        <el-row>
          <el-input v-model="input" placeholder="请输入内容"></el-input>
        </el-row>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
export default {
  data() {
    return {
      input: ''
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
