<template>
	<div class="menu" :style="{ width: collapseFlag ? '64px' : '220px' }">
		<div class="logo" @click="alertHandle">
			<img src="../assets/vue.svg" alt="" /><span
				class="text"
				v-show="!collapseFlag"
				>后台管理系统</span
			>
		</div>
		<el-menu
			background-color="#324157"
			:collapse="collapseFlag"
			text-color="#d7d7d7"
			active-text-color="#fff"
			:default-active="active"
			router
			:unique-opened="true"
		>
			<template v-for="item in menu" :key="item.id">
				<el-sub-menu v-if="item.children" :index="item.id">
					<template #title>
						<el-icon>
							<component :is="item.icon"></component>
						</el-icon>
						<span>{{ item.label }}</span>
					</template>
					<el-menu-item-group>
						<el-menu-item
							:index="city.path"
							v-for="city in item.children"
							:key="city.id"
						>
							<span>{{ city.label }}</span>
						</el-menu-item>
					</el-menu-item-group>
				</el-sub-menu>
				<el-menu-item :index="item.path" v-else>
					<el-icon>
						<component :is="item.icon"></component>
					</el-icon>
					<span>{{ item.label }}</span>
				</el-menu-item>
			</template>
		</el-menu>
	</div>
</template>

<script setup>
import { ref, watch } from "vue"
import { HomeFilled } from "@element-plus/icons-vue"
import { storeToRefs } from "pinia"
import { useIndexStore } from "../pinia/index"
import { menu } from "./menu.js"

const active = ref("/home")
const mainStore = useIndexStore()
const { collapseFlag } = storeToRefs(mainStore)
watch(collapseFlag, () => {
	console.log(collapseFlag.value)
})
</script>

<style lang="less" scoped>
.menu {
	position: absolute;
	left: 0;
	bottom: 0;
	top: 0;
	background-color: #324157;

	.el-menu {
		height: calc(100% - 50px);
		border-right: none;
	}

	.el-menu-item.is-active {
		background-color: #00b494;
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
