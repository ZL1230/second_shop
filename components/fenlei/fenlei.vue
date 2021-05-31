<template>
	<view>
		<view class="nav">
			<view class="nav-left">
				<scroll-view scroll-y :style="'height:'+height+'px'">
					<view class="nav-left-item" v-for="(item,index) in categoryList" @click="categoryClickMain(item,index)" :key="index"
					 :style="index==categoryActive?'color:'+activeTextColor+';background-color:'+activeBackgroundColor:''">
						{{item}}
					</view>
				</scroll-view>
			</view>
			<view class="nav-right">
				<scroll-view scroll-y :scroll-top="scrollTop" @scroll="scroll" :style="'height:'+height+'px'" scroll-with-animation>
						<good-list :goods="subCategoryList"></good-list>
				</scroll-view>
			</view>
		</view>
	</view>
</template>

<script>
	import GoodList from '../good-list/GoodList.vue'
	import request from '../../utils/request.js'
	export default {
		name: "category",
		data() {
			return {
				subCategoryList:[],
				currentType: '',
				height: 0,
				scrollTop: 0,
				scrollHeight: 0,
				categoryActive: 0,
				activeStyle: {
					color: this.activeTextColor,
					backgroundColor: this.activeBackgroundColor
				},
			}
		},
		created() {
			this.subCategoryList=['1','2','3'],
			this.getList()
		},
		components:{
			GoodList
		},
		props: {
			//主分类激活索引
			defaultActive: {
				type: Number,
				default: 0
			},
			//主分类List
			categoryList: {
				type: Array,
				default: () => {
					return null;
				}
			},
		
			activeTextColor: {
				type: String,
				default: '#F24544'
			},
			activeBackgroundColor: {
				type: String,
				default: '#e5e5e5'
			},
			label: {
				type: String,
				default: 'name'
			},
			imgSrc: {
				type: String,
				default: 'logo'
			},
			//主分类点击事件
			categoryMainClick: {},
			//子分类点击事件
			categorySubClick: {}
		},
		methods: {
			getList(name,page){
				console.log(222222)
				request({
					url:"product/findByType",
					method:"POST",
					header: {Authorization:'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMDE4NTIyOTA0MTQiLCJjcmVhdGVkIjoxNjE3OTc0OTM2MzgxLCJleHAiOjE2MTg1Nzk3MzZ9.cWVFkqFB4CFGgab6KPBWyAzJgveQPLkz_2qBlWQzunIi8IAZ0Ems1ysU_2EDJCNMDcmpXYtOgpRuLfBKOOudLg'},
					data:{
						 "currentPage":0,
						   "pageSize":this.pageSize,
						   "queryString":'生活用品'
					},
					success:(res)=> {
						// console.log(res.data.data.banner.list)
						this.subCategoryList=res.data.data
						// console.log(res.data,11111111)
						// console.log(111111111)
					}
				})
				// console.log(2)
			},
			scroll(e) {
				this.scrollHeight = e.detail.scrollHeight;
			},
			categoryClickMain(category, index) {
				this.categoryActive = index;
				this.scrollTop = -this.scrollHeight * index;
				switch (index) {
					case 0:
						this.currentType = '生活用品'
						break
					case 1:
						this.currentType = '数码产品'
						break
					case 2:
						this.currentType = '个护美妆'
						break
					case 3:
						this.currentType = '学习资料'
						break
					case 4:
						this.currentType = '学习资料'
						break
					case 5:
						this.currentType = '其他'
						break
					case 6:
						this.currentType = '生活用品'
						break
					case 7:
						this.currentType = '数码产品'
						break
					case 8:
						this.currentType = '个护美妆'
						break
					case 9:
						this.currentType = '学习资料'
						break
					case 10:
						this.currentType = '学习资料'
						break
					case 11:
						this.currentType = '其他'
						break
				}
				uni.request({
					url:"http://112.126.59.215:8085/product/findByType",
					method:"POST",
					data:{
						"currentPage":0,
						  "pageSize":10,
						  "queryString":this.currentType
					},
					success:(res)=> {
						// console.log(res.data.data)
						this.subCategoryList=res.data.data
						// console.log(this.goodstype)
					}
				})
				// console.log(this.currentType)
			},
			// categoryClickSub(category) {
			// 	uni.navigateTo({
			// 		url: '../../pages/detail/detail?id=' + this.goodsitem.id
			// 	})
			// }
		},
		mounted() {
			uni.getSystemInfo({
				success: res => {
					this.height = res.screenHeight;
				}
			})
		},
		watch: {
			subCategoryList(newValue, oldValue) {

			}
		},
	}
</script>

<style scoped>
	.nav {
		display: flex;
		width: 100%;
	}

	.nav-left {
		width: 20%;
	}

	.nav-left-item {
		height: 80px;
		border-right: solid 1px #E0E0E0;
		border-bottom: solid 1px #E0E0E0;
		font-size: 14px;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.nav-right {
		width: 75%;
		padding-top: 11px;
	}

	.nav-right-item {
		width: 28%;
		height: 100px;
		float: left;
		text-align: center;
		padding: 5px;
		font-size: 13px;
	}


	.active {
		color: #F24544;
		font-weight: 600;
	}

	.padding {
		height: var(--status-bar-height);
		width: 100%;
		top: 0;
		position: fixed;
		background-color: #F24544;
	}
</style>
