<template>
  <div class="menu" :style="{width: collapseFlag ? '64px' : '220px'}">
    <div class="logo" @click="alertHandle">
      <img src="../assets/vue.svg" alt=""><span class="text" v-show="!collapseFlag">后台管理系统</span>
    </div>
    <el-menu
        background-color="#373e44"
        :collapse="collapseFlag"
        text-color="#d7d7d7"
        active-text-color="#ccc"
        :default-active="active"
        router
    >
      <el-menu-item index="/home">
        <el-icon><HomeFilled /></el-icon>
        <span>首页</span>
      </el-menu-item>
      <el-menu-item index="/echarts">
        <el-icon><HomeFilled /></el-icon>
        <span>地图</span>
      </el-menu-item>
      <el-menu-item index="/editor">
        <el-icon><HomeFilled /></el-icon>
        <span>编辑器</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
import { ref, watch } from 'vue'
import { HomeFilled } from '@element-plus/icons-vue'
import { storeToRefs } from 'pinia'
import { useIndexStore } from '../pinia/index'

export default {
  components: {
    HomeFilled
  },
  setup () {
    const active = ref('/home')
    const mainStore = useIndexStore()
    const { collapseFlag } = storeToRefs(mainStore)
    watch(collapseFlag, () => {
      console.log(collapseFlag.value)
    })
    return {
      active,
      collapseFlag
    }
  }
}
</script>

<style lang="less" scoped>
  .menu {
    position: absolute;
    left: 0;
    bottom: 0;
    top: 0;
    background-color: #373e44;
    .el-menu {
      height: calc(100% - 50px);
      border-right: none;
    }
    .el-menu-item.is-active {
      background-color: rgb(67, 74, 80);
    }
    .logo {
      width: 100%;
      height: 50px;
      color: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
      padding-left: 10px;
      z-index: 999;
      img {
        width: 26px;
        height: 26px;
        margin-right: 5px;
      }
    }
  }
</style>
