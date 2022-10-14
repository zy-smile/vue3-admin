<template>
    <nav>
        <el-icon size="28px" class="btn" @click="expandHandle">
          <Fold v-show="!isExpand"></Fold>
          <Expand v-show="isExpand"></Expand>
        </el-icon>
        <div class="tools"></div>
    </nav>
</template>

<script setup>
import { Fold, Expand } from '@element-plus/icons-vue'
import { ref } from 'vue'
import { useIndexStore } from '../pinia/index'

const isExpand = ref(false)
const mainStore = useIndexStore()
function expandHandle () {
  isExpand.value = !isExpand.value
  mainStore.collapseFlag = isExpand.value
}
</script>

<style lang="less" scoped>
    nav {
        position: fixed;
        left: 220px;
        top: 0;
        width: calc(100% - 220px);
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 50px;
        background-color: #e8e8e8;
        box-sizing: border-box;
        border-bottom: 1px solid #d0d0d0;
        box-shadow: 0 1px 2px rgba(0,0,0,0.02);
      .btn {
        margin-left: 10px;
      }
    }
</style>
