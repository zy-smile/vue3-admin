import { ElMessage } from "element-plus"
import { createRouter, createWebHistory } from "vue-router"
import { getLocalItem } from "../utils/localData"
const routes = [
	{
		path: "/",
		redirect: "/login",
	},
	{
		path: "/login",
		name: "login",
		component: () => import("../views/login/login.vue"),
	},
	{
		path: "/",
		component: () => import("../components/layout.vue"),
		children: [
			{
				path: "/",
				redirect: "/home",
			},
			{
				path: "/home",
				name: "首页",
				meta: {
					index: 1,
				},
				component: () => import("../views/index/index.vue"),
			},

			{
				path: "/echarts",
				name: "echarts",
				component: () => import("../views/other/echarts.vue"),
			},
			{
				path: "/editor",
				name: "editor",
				component: () => import("../views/other/editor.vue"),
			},
			{
				path: "/form",
				name: "form",
				component: () => import("../views/form/form.vue"),
			},
			{
				path: "/table",
				name: "table",
				component: () => import("../views/table/table.vue"),
			},
			{
				path: "/excel",
				name: "excel",
				component: () => import("../views/tools/excel.vue"),
			},
			{
				path: "/role",
				name: "role",
				component: () => import("../views/role/role.vue"),
			},
		],
	},
]

const router = createRouter({
	history: createWebHistory(),
	routes,
})

router.beforeEach((to, from, next) => {
	let role = getLocalItem("role")
	if (to.path == "/login") {
		next()
	} else {
		if (role) {
			next()
		} else {
			ElMessage.warning("身份识别失败，请重新登录！")
			setTimeout(() => {
				next({ path: "/login" })
			}, 800)
		}
	}
})
export default router
