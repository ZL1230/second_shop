
<template>
	<view>
		<view class="mydata">
			<image src="../../static/logo.png" mode="widthFix"></image>
			<text>玛卡巴卡~</text>
		</view>
		<view class="search">
			<input type="text" value="" placeholder="                              搜索" />
		</view>
		<view class="list">	
			<view v-for="(item,index) in talkList" :key='item.myid' class="list-item">
				<view @click="aaa(item,index)">
					<image src="../../static/logo.png"></image>
					<view class="text">
						  玛卡巴卡
					</view>
					<view class="time">
						 02-20   13:26
					</view>
				</view>
			</view>

		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				talkList: []
			}
		},
		created() {
			this.talkList = getApp().globalData.session
			uni.onSocketOpen(function(res) {
				socketOpen = true;
			});

		},
		methods: {
			aaa(item,index) {
				console.log(item,'bbbb')
				// uni.$emit('bbb',item)
				var self=this
				uni.navigateTo({
					url: '../chat/chat?item=' + encodeURIComponent(JSON.stringify(item)),
					success() {
						console.log(item,11111111)
						consol.log('aaaaa')
					}
				});
				// uni.navigateBack({
				// 	data: 1
				// })
			}
		}
	}
</script>
<style>
	.mydata {
		border: 1rpx;
		position: fixed;
		font-size: 35rpx;
		font-weight: 500;
		width: 100vw;
		background-color: #ffffff;
		z-index: 2;
	}

	.mydata image {
		width: 70rpx;
		height: 70rpx;
		border-radius: 40rpx;
		margin-left: 30rpx;
		margin-top: 15rpx;
	}

	.mydata text {
		display: inline-block;
		height: 60rpx;
		line-height: 60rpx;
		margin-left: 30rpx;
		position: absolute;
		top: 20rpx;
	}

	.search{
		height: 180rpx;
		padding-top: 10rpx;
		}
		.search input{
			margin-top: 90rpx;
			height: 80rpx;
			width: 90vw;
			margin-left: 5vw;
			border-radius: 40rpx;
			background-color: #f4f6fa;
			padding-left: 20rpx;
		}
	.list .list-item{
		position: relative;
		border-bottom: rgb(228,228,228) 1rpx solid;
		height: 20rxp;
		margin-top: 5rpx;
	}
	.list .list-item image{
		width: 100rpx;
		height: 100rpx;
		margin: 10rpx 30rpx;
		border-radius: 50rpx;
		margin-left: 30rpx;
	}
	.list .list-item .text{
		padding-top: 10rpx;
		position: absolute;
		display: inline-block;
		height: 80rpx;
		top: 10rpx;
		font-weight:500;
		font-size: 38rpx;
	}
	.list .list-item .time{
		position: absolute;
		display: inline-block;
		height: 80rpx;
		top: 80rpx;
		font-size:25rpx;
		right: 50rpx;
	}
</style>
