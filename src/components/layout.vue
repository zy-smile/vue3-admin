<template>
	<side-bar></side-bar>
	<div
		class="container"
		:style="{ marginLeft: collapseFlag ? '64px' : '220px' }"
	>
		<Nav />
		<PageTag />
		<div class="main">
			<router-view></router-view>
		</div>
	</div>
</template>
<script setup>
import { defineComponent } from "vue"
import Nav from "./Nav.vue"
import SideBar from "./SideBar.vue"
import PageTag from "./PageTag.vue"
import { useIndexStore } from "../pinia/index"
import { storeToRefs } from "pinia"

const mainStore = useIndexStore()
const { collapseFlag } = storeToRefs(mainStore)
</script>

<style lang="less" scoped>
.container {
	position: relative;
	height: 100%;
	.main {
		position: absolute;
		top: 110px;
		left: 0;
		right: 0;
		bottom: 0;
		margin: auto;
		background-color: #e4e4e4;
		overflow-y: auto;
		padding: 0 20px;
	}
}
</style>
