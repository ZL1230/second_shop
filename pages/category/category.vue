<template>

	<view>
		<category :categoryList="categoryList"  @categoryMainClick="categoryMainClick"
		 @categorySubClick="categorySubClick"></category>
	</view>
</template>

<script>
	import category from "../../components/fenlei/fenlei.vue"
	export default {
		data() {
			return {
				categoryList: [],
				
			}
		},
		components: {
			category
		},
		mounted() {

			for (var i = 0; i < 2; i++) {

				this.categoryList.push('生活', '数码', '美妆', '运动', '学习', '其他')

			}
		},
		methods: {
			categoryMainClick(category) {
			
				// console.log(1)
			},
			categorySubClick(category) {
				// console.log(category);
			}
		}
	}
</script>

<style>

</style>
