import { HomeFilled, DataLine,Suitcase,Warning,Operation } from "@element-plus/icons-vue"
import { getLocalItem } from '../utils/localData'

const menu1 = [
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
			{
				label: "excel",
				id: "4-1",
				path: "/excel",
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
				label: "图表",
				id: "2-3",
				path: "/echarts",
			},
		],
	},
]
const menu2 = [
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
			{
				label: "excel",
				id: "4-1",
				path: "/excel",
			},
		],
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
				label: "图表",
				id: "2-3",
				path: "/echarts",
			},
		],
	},
]
const menu3 = [
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
			{
				label: "excel",
				id: "4-1",
				path: "/excel",
			},
		],
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
				label: "图表",
				id: "2-3",
				path: "/echarts",
			},
		],
	},
]

export {
    menu1,
	menu2,
	menu3
}
