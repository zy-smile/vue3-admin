<script setup lang="ts">
import Nav from './components/Nav.vue'
import SideBar from './components/SideBar.vue'
</script>

<template>
  <side-bar></side-bar>
  <div class="container">
    <Nav/>
    <div class="main">
      <router-view></router-view>
    </div>
  </div>
</template>

<style scoped lang="less">
.container {
  position: relative;
  width: calc(100% - 220px);
  height: 100%;
  margin-left: 220px;
.main {
  position: absolute;
  top: 50px;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  background-color: #e4e4e4;
  overflow-y: auto;
}
}
</style>
