<template>
	<view class="content">
		<!-- <image style="height: 50rpx;width: 50rpx;" @click="fanhui"  src="../../static/fanhui.jpg" mode="widthFix"></image> -->
		<cmd-nav-bar back left-text="" title=""  font-color="#fff" background-color="linear-gradient(to right, rgb(152 ,245 ,255), rgb(174 ,238 ,238))"></cmd-nav-bar>
		<view id="navigation">
			<view class="fanhui">
			</view>
			<!-- 		<pop ref="xiajiapop" direction="right" id="xiajiapop" :is_close="true" :is_mask="true" :width="100" >
				<view class="cangku">
				</view>
				<view class="item"  id="downitem" v-for="(item,index) in downgoodsData" :key="index">
					<image :src="item.imagsrc" mode="widthFix"></image>
					<view class="text" >
						<view class="title" style="font-size:32rpx;">{{item.title}}</view>
					</view>
					<text @click="shangjia(item.id)" class="shangjia">重新上架</text>
				</view>
			</pop> -->
			<view class="fabu">
				<!-- 我发布的 -->
			</view>
			<!-- <view class="xiajia" @click="xiajiaGoods">
				下架产品
			</view> -->
		</view>
		<view class="main">
			<view class="boxitem">
				<view class="item" v-for="(item,index) in goodsData" :key="index">
					<pop :ref="index" direction="center" id="pop" :is_close="false" :is_mask="true" :width="85">
						<image :src="item.imagsrc" mode="widthFix"></image>
						<view class="text">
							<text class="yuanjia">现价</text>
							<text class="price">{{item.price}}</text>
						</view>
						<view class="text" id="tiaozheng">
							<text>调整为</text>
							<input type="text" value="" placeholder="" v-model="price_input" />
						</view>
						<view class="queding" @click="priceClick(index,item.pid)">
							<view class="button" @click="priceClick(index,item.pid)" sty>
								确定
							</view>
						</view>
					</pop>

					<view @click="aa(item,index)">
						<image :src="item.imagsrc" mode="scaleToFill" @click="textClick(item.pid)"></image>
						<view class="text" @click="textClick(item.pid)">
							<view class="title">{{item.describe}}</view>
							<view class="collection">有{{item.collection}}人收藏</view>
							<view class="price">{{item.price}}</view>
						</view>
					</view>
					<view class="guanli">
						<!-- <view @click="editClick(item.id)" class="edit">编辑</view> -->
						<view @click="deleteClick(item.pid)" class="delete">删除</view>
						<view class="zhanwei"></view>
						<view @click="editpriceClick(index,item.pid)" class="edit">调价</view>
						<view @click="deleteClick(item.pid)" class="xiajia">下架</view>
					</view>
				</view>

			</view>
		</view>
	</view>
</template>
<script>
	import request from '../../utils/request.js'
	import pop from "@/components/ming-pop/ming-pop.vue"; //组件路径
	import cmdNavBar from "../..//components/cmd-nav-bar/cmd-nav-bar.vue"
	export default {
		// // 弹框组件
		components: {
			pop,
			cmdNavBar
		},
		data() {
			return {
				// name: '其他',
				goodsData: '',
				price_input: '',
				newprice: '',
				downgoodsData: '',
				userid:''
			}
		},
		onLoad() {
		 	if(getApp().globalData.userInfo == null){
				uni.redirectTo({
					url:'../unlogin/unlogin'
				})
		 	}
		 },
		created() {
			
			this.getgoods()
			this.userid=getApp().globalData.userInfo.userid
		},
		methods: {
			aa(item,index){
				uni.navigateTo({
					url:'../../pages/detail/detail?pid='+item.pid
				})
			},
			getgoods() {
				request({
					url: 'product/Myproduct?userid='+getApp().globalData.userInfo.userid,
					method: 'GET',
					success: res => {
						console.log(res.data);
						this.goodsData = res.data.data.unsell;
					}
				})
			},
			// 确定修改
			priceClick(index, pid) {
				// console.log('---')
				this.$refs[index][0].close();
				request({
					url: 'product/update',
					method: 'PUT',
					data: {
						pid: pid,
						price: this.price_input
					},
					success: res => {
						// console.log('修改价格成功')p
						// setTimeout(()=>{
							// location.reload()
							uni.switchTab({
								url:'../user/user'
							})
						// },500)
					}
				})
				// uni.onload()
				// console.log(this.price_input, id)
			},
			deleteClick(pid) {
				// 删除商品
				request({
					url: 'product/' + pid,
					method: 'DELETE',
			
					success: res => {
							console.log('删除' + pid)
						// console.log('删除成功' + id)
						// location.reload()
						uni.switchTab({
							url:'../user/user'
						})
					}
				})
				// console.log('删除' + pid)
			},
			xiajiaClick(pid) {
				// 下架商品
				request({
					url: 'product/update',
					method: 'PUT',
					data: {
						pid: pid,
						sellcode: 'sell'
					},
					success: res => {
						// console.log(res.data)
						// location.reload()
						// uni.navigateTo({
						// 	url:'../user/user'
						// })
					}
				})
				// console.log('下架商品+status+' + id)
			},
			// 调价
			editpriceClick(index, pid) {
				// console.log('a')
				this.$refs[index][0].show()
				console.log(this.$refs)
			},
			shangjia(pid) {
				request({
					url: 'product/update',
					method: 'PUT',
					data: {
						sellcode: 'sell'
					},
					success: res => {
						// console.log('查看下架商品')
						this.downgoodsData = res.data
					}
				})
				// console.log('商品上架' + id)
			},
		}
	}
</script>
<style>
	@import "./lunchList.css";
</style>