<template>
	
	<view class="content">
		<!-- <image style="height: 50rpx;width: 50rpx;" @click="fanhui"  src="../../static/fanhui.jpg" mode="widthFix"></image> -->
		<cmd-nav-bar back left-text="" title=""  font-color="#fff" background-color="linear-gradient(to right, rgb(152 ,245 ,255), rgb(174 ,238 ,238))"></cmd-nav-bar>
		
		<view id="aaa">
			<view><image style="height: 50rpx;width: 50rpx;" @click="fanhui"  src="../../static/fanhui.jpg" mode="widthFix"></image></view>
			<view class="top">
				<!-- <image style="height: 50rpx;width: 50rpx;" @click="fanhui"  src="../../static/fanhui.jpg" mode="widthFix"></image> -->
				<view class="quanbu" @click="quanbuClick" :class="{active:active == 1}">
					全部
				</view>
				<!-- <view class="weimaichu" @click="weimaichuClick" :class="{active:active == 2}">
					未卖出
				</view>
				<view class="yimaichu" @click="yimaichuClick" :class="{active:active == 3}">
					已卖出
				</view> -->
				<view class="zhanwei">

				</view>
				<view class="paixu" @click="guanli" :class="{guanli_select:isguanli_select}">
					管理
				</view>
			</view>
		</view>
		<view class="main">
			<view class="boxitem">
				<view class="item" v-for="(item,index) in goodsData" :key=index>
					<view class="xuan" v-if="deleteshow" @click="btnActive(index,item)">
						<view  :class="{activeimg:activeimg,unactiveimg:currentlist[index]==true}" >
							
						</view>
					</view>
					<image :src="item.imagsrc" mode="aspectFit" @click="bb(item,index)"></image>
					<view class="text"  @click="bb(item,index)">
						<view class="title">{{item.describe}}</view>
						<view class="collection">有183人收藏</view>
						<view class="price">￥{{item.price}}</view>
						<!-- <view class="">
							{{item.pid}}
						</view> -->
						<!-- <view class="delete">删除</view> -->
					</view> 
				</view>
			</view>
			<view class="confirm" v-if="confirm" >
				
				<text 	 :class="{deleteall:all,undeleteall:!all} " @click="deleteall"></text>					
				<text class="confirm_add" @click="deleteall">全选</text>
				<image class="fenxiang" src="./icon/fenxiang.png" mode="widthFix"></image>
				<image @click="confirmClick" class="shanchu" src="./icon/shanchu1.png" mode="widthFix"></image>
<!-- <text 	 :class="{deleteall:all,undeleteall:all}"></text>					 -->
				</view>
			<!-- 	<text class="confirm_add" @click="deleteall">全选</text>
				<image class="fenxiang" src="./icon/fenxiang.png" mode="widthFix"></image>
				<image @click="confirmClick" class="shanchu" src="./icon/shanchu1.png" mode="widthFix"></image> -->
			</view>
		</view>
	</view>
</template>

<script>
	import request from '../../utils/request.js'
	import cmdNavBar from "../..//components/cmd-nav-bar/cmd-nav-bar.vue"
	export default {
		// import uniTag from '@/components/uni-tag/uni-tag.vue'
		
		// // 弹框组件
		components: {
			cmdNavBar
		},
		data() {
			return {
				queryString: '其他',
				goodsData: [],
				active: 1,
				deletelist:[],
				activeimg:true,
				unactiveimg:true,
				current_select:true,
				// 必须有大于0个数据
				currentlist:[],
				deleteshow:false,
				isguanli_select:false,
				confirm:false,
				
					userid:'',
				all:true

			}
		},
		created() {
			// this.getgoods()
			console.log(this.userid)
			this.getgoods()
		
		},
		
		onLoad() {
		 	if(JSON.stringify(getApp().globalData.userInfo) == "{}"){
		 		
		 		uni.redirectTo({
		 			url:'../unlogin/unlogin'
		 		})
		 	}
		 },
		methods: {
			deleteall(){
				this.currentlist = [];
				// 全选
				if(this.all){
					this.deletelist = [];
					for(let i = 0; i < this.goodsData.length;i++){
						this.currentlist.push(true)
						this.deletelist.push(this.goodsData[i].pid) 
					}
					
					
					this.all = !this.all
				}else{
					// 非全选
					for(let i = 0; i < this.goodsData.length;i++){
						this.currentlist.push(false)
						this.deletelist = [];
					}
					
					
					
					this.all = !this.all
				}
				console.log(this.deletelist,this.currentlist)
			
			},
			bb(item,index){
				uni.navigateTo({
					url:'../../pages/detail/detail?pid='+item.pid
				})
			},
			btnActive: function(index, item) {
				
				// var current_select = !this.currentlist[a]
				this.currentlist.splice(index,1, !this.currentlist[index])
				// console.log(this.currentlist)
				console.log(item.pid)
					var index1 = this.deletelist.indexOf(item.pid);
					// 判断是否有该参数index
					if(index1 > -1){
						console.log('删除成功'+ item.pid)
						
						this.deletelist.splice(index1,1)
						console.log(this.deletelist)
					}else
					{
						this.deletelist.push(item.pid)
						console.log('添加成功'+item.pid)
						console.log(this.deletelist)
					}
					
				// console.log(this.deletelist)
				
			},
	
		getgoods() {
						request({
							url: 'product/Mycollection',
							method: 'GET',
							data: {
								userid:getApp().globalData.userInfo.userid
							},
							success: res => {
								this.goodsData = res.data.data;
								console.log(this.goodsData)
								for(var i=0;i<res.data.data.length;i++){
									this.currentlist.push(false)
								}
								// this.currentlist = 
							
							}
						})
					},
			
			guanli(){
				// console.log('a')
				this.isguanli_select = !this.isguanli_select
				this.deleteshow = !this.deleteshow,
				this.confirm = !this.confirm
			},
			confirmClick(){
				request({
					url: 'product/deletecollection',
					method: 'DELETE',
					data: {
						pids:this.deletelist,
						userid:getApp().globalData.userInfo.userid
					},
					success: res => {
						// console.log(res.data);
						this.goodsData = res.data.data
					}
				})
				// 删除结束后重新渲染页面
				this.getgoods(this.name)
			}
		}
	}
</script>
<style>
	.content{
		position: relative;
	}
	#navigation{
		/* position: fixed; */
	}
	#aaa{
		position: fixed;
		background-color: white; 
		z-index: 2;
		width: 100%;
		margin-top: 41rpx;
	}
	#navigation .icon{
	
	}
	#navigation .text{
		height: 80rpx;
		background-color: rgb(235,235,235);
		font-size: 35rpx;
		font-weight: 600;
		padding-top: 20rpx;
		padding-left: 280rpx;
	}
	#navigation .text::before{
			background: url(./icon/shoucang.png);
			width: 50rpx;
			height: 50rpx;
	}
	.top {
		/* position: fixed; */
		color: #9d9d9d;
		height: 80rpx;
		/* background-color: #007AFF; */
		display: flex;
		width: 100%;
		justify-content: space-around;
		background-color: #FFF;
	}
	.weimaichu,
	.yimaichu,
	.quanbu {
		margin: 15rpx;
	}
	
	.top .active {
		color: #ff5500;
	}
	.top ..top{
		
	}
	.top .quanbu {}
	
	.top .zhanwei {
		width: 250rpx;
	}
	
	.top .paixu {
		margin: 15rpx;
		margin-right: 20rpx;
	
	
	}
	.content .top .guanli_select{
	color:rgb(234,154,105) ;
	}
	.main{
		top: 165rpx;
		position: absolute;
	}
	.main .confirm {
		bottom: 0rpx;
		position: fixed;
		width: 100%;
		height: 100rpx;
		/* padding: auto; */
		line-height: 100rpx;
		padding-left: 50rpx;
		background-color: rgb(235,235,235);
	}
	.confirm .confirm_delete{
		color: rgb(35, 35, 35);
	}
	
	.confirm .confirm_add{
		display: inline-block;
		width: 135rpx;
		height: 50rpx;
		margin-left: 30rpx;
		line-height: 50rpx;
		padding-left: 20rpx;
		border-radius: 25rpx;
		font-weight: 400;
		margin-right:280rpx;
		
		
	}
	.confirm .shanchu{
		height: 60rpx;
		width: 40rpx;
		margin-left: 40rpx;
		top: 10rpx;
	}
	.confirm .fenxiang{
		height: 60rpx;
		width: 40rpx;
		margin-left: 20rpx;
		top: 10rpx;
		/* background-color: red; */
	}
	
	
	.item {
		margin-left: 15rpx;
		height: 250rpx;
		/* background-color: #4CD964; */
		margin-bottom: 10rpx;
		/* padding: 10rpx; */
		display: flex;
		padding-bottom: 20rpx;
		padding-top: 5rpx;
	}
	
	.item .xuan {
		width: 70rpx;
		position: relative;
	}
	
	.item .xuan .activeimg {
		background: url(./icon/circle2yuanquan.png) no-repeat;
		top: 85rpx;
		position: absolute;
		width: 40rpx;
		background-size: 40rpx auto;
		height: 68rpx;
	}
	
	.item .xuan .unactiveimg {
		background: url(./icon/circleyuanquan.png) no-repeat;
		top: 85rpx;
		position: absolute;
		width: 40rpx;
		background-size: 40rpx auto;
		height: 68rpx;
	
	
	}
	.deleteall{
		background: url(./icon/circle2yuanquan.png) no-repeat;
		top: 30rpx;
		position: absolute;
		width: 40rpx;
		background-size: 40rpx auto;
		height: 68rpx;
	}
	.undeleteall{
		background: url(./icon/circleyuanquan.png) no-repeat;
		top: 30rpx;
		position: absolute;
		width: 40rpx;
		background-size: 40rpx auto;
		height: 68rpx;
	}
	
	.item image {
		width: 240rpx;
		height: 240rpx;
		margin: 5rpx;
		border-radius: 20rpx;
	}
	
	.item .text {
		flex: 1;
		/* background-color: #ff5500; */
		padding: 10rpx;
	}
	
	.item .text .collection {
		font-size: 24rpx;
		margin-top: 5rpx;
		margin-bottom: 5rpx;
		color: #999999;
	}
	
	.item .text .title {
				display: -webkit-box;
		       -webkit-box-orient: vertical;
		       -webkit-line-clamp: 2;
		       overflow: hidden;
		font-size: 31rpx;
		font-weight: 500;
	}
	
	.item .text .price {
		margin-top: 3rpx;
		color: #ff557f;
	}
	
	.item .text .delete {
		width: 100rpx;
		margin-left: 280rpx;
		border: 1rpx #d4d4d4 solid;
		border-radius: 30rpx;
		padding-left: 20rpx;
		color: #d4d4d4;
	
	}
	
</style>
