<template>
	<div
		class="pageTags"
		:style="{ left: mainStore.collapseFlag ? '64px' : '220px' }"
	>
		<el-tag
			v-for="tag in tagsList"
			:key="tag.path"
			class="mx-1"
			closable
			:effect="active == tag.path ? 'dark' : 'plain'"
			:disable-transitions="false"
			@close="handleClose(tag)"
			@click="changePage(tag.path)"
			size="large"
		>
			{{ tag.title }}
		</el-tag>
	</div>
</template>

<script setup>
import { ref, watch, reactive } from "vue"
import { useIndexStore } from "../pinia/index.js"
import { useRouter } from "vue-router"
const router = useRouter()
const active = ref("")
const mainStore = useIndexStore()
const tagsList = reactive([])
watch(
	() => mainStore.breadList,
	(newVal) => {
		let pathObj = newVal[newVal.length - 1]
		let index = tagsList.findIndex((item) => item.path == pathObj.path)
		if (index == -1) {
			tagsList.push(pathObj)
			active.value = pathObj.path
		}
	},
	{ immediate: true }
)

function handleClose(tag) {
	let index = tagsList.findIndex((item) => item.path == tag.path)
	if (index != -1) {
		tagsList.splice(index, 1)
		if (tagsList.length) {
			router.push({ path: tagsList[tagsList.length - 1].path })
		}
	}
}

function changePage(path) {
	active.value = path
	router.push({ path: path })
}
</script>

<style lang="less" scoped>
.pageTags {
	position: fixed;
	top: 50px;
	height: 40px;
	width: calc(100% - 220px);
	padding: 5px 10px 0 10px;
	background-color: #fff;
	.el-tag {
		margin-right: 10px;
		cursor: pointer;
	}
}
</style>
