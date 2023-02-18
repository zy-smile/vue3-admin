<template>
  <side-bar></side-bar>
  <div class="container" :style="{marginLeft: collapseFlag ? '64px' : '220px'}">
      <Nav/>
      <div class="main">
        <router-view></router-view>
      </div>
  </div>
</template>
<script>
import { defineComponent } from 'vue'
import Nav from './Nav.vue'
import SideBar from './SideBar.vue'
import {useIndexStore} from "../pinia/index";
import {storeToRefs} from "pinia";

export default defineComponent({
  components: {
    Nav,
    SideBar
  },
  setup() {
    const mainStore = useIndexStore()
    const { collapseFlag } = storeToRefs(mainStore)

    return {
      collapseFlag
    }
  }
})
</script>

<style lang="less" scoped>
.container {
  position: relative;
  height: 100%;
  .main {
    position: absolute;
    top: 50px;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    background-color: #e4e4e4;
    overflow-y: auto;
    padding: 20px;
  }
}
</style>
