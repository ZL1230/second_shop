<template>
	<view>
		<cmd-nav-bar back left-text="客服中心" title="客服中心"  font-color="#fff" background-color="linear-gradient(to right, rgb(152 ,245 ,255), rgb(174 ,238 ,238))"></cmd-nav-bar>
		<view class="box-1" id="list-box">
		<!-- <cmd-nav-bar back left-text="" title=""  font-color="#fff" background-color="linear-gradient(to right, rgb(152 ,245 ,255), rgb(174 ,238 ,238))"></cmd-nav-bar> -->
			<view class="talk-list">
				<view v-for="(item,index) in talkList" :key="index">
					<view class="item flex_col" :class=" item.myid === item.senid ? 'push':'pull' ">
						<image :src="item.myid != item.senid ? logosrc:mysrc" mode="aspectFill" class="pic"></image>
						<!-- <image :src=''></image> -->
						<view class="content">{{item.context}}</view>
					</view>
				</view>
			</view>
		</view>
		<view class="box-2">
			<view class="flex_col">
				<view class="flex_grow">
					<!-- <image src="../../static/fanhui.jpg" mode="aspectFill" class="pic"></image> -->
					<input type="text" class="content" v-model="content" placeholder="请输入聊天内容" placeholder-style="color:#DDD;"
					 :cursor-spacing="6">
				</view>
				<button class="send" @tap="send">发送</button>
			</view>
		</view>
	</view>
</template>
<script>
	import cmdNavBar from "../..//components/cmd-nav-bar/cmd-nav-bar.vue"
	export default {
		data() {
			return {
				logosrc:'../../static/logo.png',
				user:'',
				talkList: [{
					myid: 101,
					youid: 888,
					context: '欢迎来到客服中心，请留言您需要的帮助！',
					senid: 888,
					resviceid: 101
				}, ],
				content: '',
				item: null,
				socketOpen: true,
				index: 0
			}
		},
		components:{
			cmdNavBar
		},
		created() {
			this.mysrc = getApp().globalData.userInfo.imgurl
		},
		mounted() {
			let _selt = this
			uni.onSocketMessage(function(res) {
				// this.$forceUpdate()
				console.log(res.data)
				let message = JSON.parse(res.data)
				console.log('有人给我发消息啦')
				console.log(message)
				console.log(_selt.talkList)
				_selt.talkList.push(message);
				_selt.$nextTick(() => {
					this.content = '';
					uni.pageScrollTo({
						scrollTop: 999999, // 设置一个超大值，以保证滚动条滚动到底部
						duration: 0
					});
				})
			});
		},
		methods: {
			send() {
				setTimeout(() => {
					// 将当前发送信息 添加到消息列表。
					let data = {
						myid: 11,
						youid: 55,
						context: this.content,
						senid: 11,
						resviceid: 55
					};
					let dataJson = JSON.stringify(data)
					uni.sendSocketMessage({
						data: dataJson,
					});

					this.talkList.push(data);
					this.$nextTick(() => {
						// 清空内容框中的内容
						this.content = '';
						uni.pageScrollTo({
							scrollTop: 999999, // 设置一个超大值，以保证滚动条滚动到底部
							duration: 0
						});
					})
				}, 15);
			},
		},
		onUnload() {
			// if(!window.localStorage){
			//             alert("浏览器不支持localstorage");
			//             return false;
			//         }else{
			//             var storage=window.localStorage;
			//             //写入a字段
			//             storage.session = JSON.stringify(this.talkList);
			//             //写入c字段
			// 			console.log('保存成功')
			//         }
		},
	}
</script>

<style lang="scss">
	@import "../../lib/global.scss";

	page {
		background-color: #F3F3F3;
		font-size: 28rpx;
	}

	/* 加载数据提示 */
	.tips {
		position: fixed;
		left: 0;
		top: var(--window-top);
		width: 100%;
		z-index: 9;
		background-color: rgba(0, 0, 0, 0.15);
		height: 72rpx;
		line-height: 72rpx;
		transform: translateY(-80rpx);
		transition: transform 0.3s ease-in-out 0s;

		&.show {
			transform: translateY(0);
		}
	}

	.box-1 {
		width: 100%;
		height: auto;
		padding-bottom: 100rpx;
		box-sizing: content-box;
		margin-top: 75rpx;

		/* 兼容iPhoneX */
		margin-bottom: 0;
		margin-bottom: constant(safe-area-inset-bottom);
		margin-bottom: env(safe-area-inset-bottom);
	}

	.box-2 {
		position: fixed;
		left: 0;
		width: 100%;
		bottom: 0;
		height: auto;
		z-index: 2;
		border-top: #e5e5e5 solid 1px;
		box-sizing: content-box;
		background-color: #F3F3F3;

		/* 兼容iPhoneX */
		padding-bottom: 0;
		padding-bottom: constant(safe-area-inset-bottom);
		padding-bottom: env(safe-area-inset-bottom);

		>view {
			padding: 0 20rpx;
			height: 100rpx;
		}

		.content {
			background-color: #fff;
			height: 64rpx;
			padding: 0 20rpx;
			border-radius: 32rpx;
			font-size: 28rpx;
		}

		.send {
			background-color: #42b983;
			color: #fff;
			height: 64rpx;
			margin-left: 20rpx;
			border-radius: 32rpx;
			padding: 0;
			width: 120rpx;
			line-height: 62rpx;

			&:active {
				background-color: #5fc496;
			}
		}
	}

	.talk-list {
		padding-bottom: 20rpx;

		/* 消息项，基础类 */
		.item {
			padding: 20rpx 20rpx 0 20rpx;
			align-items: flex-start;
			align-content: flex-start;
			color: #333;

			.pic {
				width: 92rpx;
				height: 92rpx;
				border-radius: 50%;
				border: #fff solid 1px;
			}

			.content {
				padding: 20rpx;
				border-radius: 4px;
				max-width: 500rpx;
				word-break: break-all;
				line-height: 52rpx;
				position: relative;
			}

			/* 收到的消息 */
			&.pull {
				.content {
					margin-left: 32rpx;
					background-color: #fff;

					&::after {
						content: '';
						display: block;
						width: 0;
						height: 0;
						border-top: 16rpx solid transparent;
						border-bottom: 16rpx solid transparent;
						border-right: 20rpx solid #fff;
						position: absolute;
						top: 30rpx;
						left: -18rpx;
					}
				}
			}

			/* 发出的消息 */
			&.push {
				/* 主轴为水平方向，起点在右端。使不修改DOM结构，也能改变元素排列顺序 */
				flex-direction: row-reverse;

				.content {
					margin-right: 32rpx;
					background-color: #a0e959;

					&::after {
						content: '';
						display: block;
						width: 0;
						height: 0;
						border-top: 16rpx solid transparent;
						border-bottom: 16rpx solid transparent;
						border-left: 20rpx solid #a0e959;
						position: absolute;
						top: 30rpx;
						right: -18rpx;
					}
				}
			}
		}
	}
</style>
