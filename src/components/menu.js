import { HomeFilled, DataLine,Suitcase,Warning,Operation } from "@element-plus/icons-vue"
const menu = [
	{
		label: "首页",
		icon: HomeFilled,
		id: "1",
		path: "/home",
	},

	{
		label: "数据操作",
		icon: DataLine,
		id: "3",
		children: [
			{
				label: "表单",
				id: "3-1",
				path: "/form",
			},
			{
				label: "表格",
				id: "3-2",
				path: "/table",
			},
		],
	},
	{
		label: "工具",
		icon: Suitcase,
		id: "4",
		children: [
			{
				label: "excel",
				id: "4-1",
				path: "/excel",
			},
			{
				label: "word",
				id: "4-2",
				path: "/word",
			},
		],
	},
	{
		label: "权限设置",
		icon: Warning,
		id: "5",
		path: "/role",
	},
	{
		label: "其他",
		icon: Operation,
		id: "2",
		children: [
			{
				label: "富文本",
				id: "2-1",
				path: "/editor",
			},
			{
				label: "地图",
				id: "2-2",
				path: "/map",
			},
			{
				label: "图表",
				id: "2-3",
				path: "/echarts",
			},
		],
	},
]
export {
    menu
}
