<template>
	<view class='goods'>
		<goods-list-item :key='index' v-for="(item,index) in goods" :goodsitem='item'></goods-list-item>
	</view>
</template>

<script>
	import GoodsListItem from './GoodsListItem.vue'
	export default {
		data(){
			
		},
		components:{
			GoodsListItem
		},
		props:{
			goods:[]
		}
	}
</script>

<style>
	.goods{
	     display: flex;
	     flex-wrap: wrap;
	     justify-content:space-between;
	 }
</style>
