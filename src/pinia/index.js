import { defineStore } from "pinia"
// setup组合api写法
// import { ref } from 'vue'
// export const useIndexStore = defineStore('share', () => {
//   const collapseFlag = ref(false)
//   function expand (flag) {
//     collapseFlag.value = flag
//   }
//   return {
//     collapseFlag,
//     expand
//   }
// })

export const useIndexStore = defineStore("mainStore", {
	state: () => {
		return {
			collapseFlag: false,
			breadList: [],
		}
	},
	actions: {
		expand(flag) {
			this.collapseFlag = flag
		},
		setBreadList(data) {
			this.breadList = data
		},
	},
})
