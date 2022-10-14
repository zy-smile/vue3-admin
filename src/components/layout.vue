<template>
  <side-bar></side-bar>
  <div class="container">
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
export default defineComponent({
  components: {
    Nav,
    SideBar
  }
})
</script>

<style lang="less" scoped>
</style>
