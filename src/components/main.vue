<template>
  <div>
    <el-card class="box-card">
      <div v-for="o in 4" :key="o">{{'列表内容 ' + o }}</div>
    </el-card>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
</style>