<template>

	<view id="box">
		<view class="index" @click="index">
			首页
		</view>
		<view class="denglu">
			<image src="http://cdn.kubtaox.top/%E7%99%BB%E5%BD%95.svg" mode="widthFix"></image>

		</view>
		<view class="text">
			如需继续操作，请先登录呀...
		</view>
		<view class="todenglu" @click="tologin">
			去登录
		</view>
	</view>
</template>

<script>
	export default {

		data() {
			return {

			}
		},

		methods: {
			index() {
				uni.switchTab({
				url: '../index/index'
				});
			},
			tologin() {
				console.log('ss')
				uni.redirectTo({
					url: '../login/login'
				});
			}



		},
	}
</script>
<style>
	#box {
		position: relative;
	}

	.denglu {
		width: 900rpx;
		height: 1700rpx;
		position: absolute;
	}

	.denglu image {
		width: 100vw;
	
	}
.action{
		padding-left:20vw ;
		color: #00A0E9;
	}
.text{
	color: #5555ff;
	font-size: 25rpx;
	position: absolute;
	width: 100vw;
	z-index: 3;
	top: 60vh;
	text-align: center;
}
	.todenglu {
		font-size: 30rpx;
		position: absolute;
		width: 30vw;
		height: 6vh;
		line-height: 6vh;
		color: white;
		margin-top: 65vh;
		margin-left: 35vw;
		background-color: #2ab8f4;
		text-align: center;
		display: inline-block;
		border-radius: 12vw;

	}

	.index {
		margin-top: 20rpx;
		color: #ffffff;
		background-color: #2ab8f4;
		font-size: 25rpx;
		padding-left: 30rpx;
		width: 20vw;
		height: 60rpx;
		line-height: 60rpx;
		border-radius: 0 30rpx 30rpx 0;
	}
</style>