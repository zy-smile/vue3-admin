import { createRouter, createWebHistory } from "vue-router"

const routes = [
	{
		path: "/",
		component: () => import("../components/layout.vue"),
		children: [
			{
				path: "",
				redirect: "/home",
			},
			{
				path: "/home",
				name: "home",
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
				path: "/map",
				name: "map",
				component: () => import("../views/other/map.vue"),
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

export default router
