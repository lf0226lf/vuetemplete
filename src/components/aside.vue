<template>
  <div class="h-100">
    <div class="logo">
      <a href="index.html">
        <img src="../assets/images/logo-icon.png" class="logo-icon" alt="logo icon" />
        <h5 class="logo-text">vuetemplete</h5>
      </a>
    </div>
    <div class="sidebar-menu">
      <el-collapse v-model="activeNames" @change="handleChange">
        <el-collapse-item name="1">
          <template slot="title">
            基本组件
            <!-- <i class="header-icon el-icon-info"></i> -->
          </template>
          <div>
            <ul class="menu-list" @click="sidebarHide()">
              <!-- <li>
                <router-link active-class="active" class="nav-link" to="main">按钮</router-link>
              </li> -->
              <li>
                <router-link active-class="active" class="nav-link" to="button">按钮</router-link>
              </li>
              <li>
                <router-link active-class="active" class="nav-link" to="link">文字链接</router-link>
              </li>
            </ul>
          </div>
        </el-collapse-item>
        <el-collapse-item name="2">
          <template slot="title">
            表单组件
            <!-- <i class="header-icon el-icon-info"></i> -->
          </template>
          <div>
            <ul class="menu-list" @click="sidebarHide()">
              <li>
                <router-link active-class="active" class="nav-link" to="input">输入框</router-link>
              </li>
              <li>
                <router-link active-class="active" class="nav-link" to="datetimepicker">日期时间选择器</router-link>
              </li>
            </ul>
          </div>
        </el-collapse-item>
        <!-- <el-collapse-item title="效率 Efficiency" name="3">
          <div>简化流程：设计简洁直观的操作流程；</div>
          <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
          <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
        </el-collapse-item>
        <el-collapse-item title="可控 Controllability" name="4">
          <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
          <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
        </el-collapse-item> -->
      </el-collapse>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeNames: ["1"]
    };
  },
  methods: {
    handleChange(val) {
      console.log(val);
    },
    sidebarHide: function(){
      this.$store.state.Heade.fold_fixed = false;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../scss/components/aside";
</style>
