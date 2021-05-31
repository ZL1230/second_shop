<template>
	<view class="contact">
		<!-- <cmd-nav-bar back left-text="" title=""  font-color="#fff" background-color="linear-gradient(to right, rgb(152 ,245 ,255), rgb(174 ,238 ,238))"></cmd-nav-bar> -->
		<view style="margin-bottom: 10rpx;">		<cmd-nav-bar back left-text="" title=""  font-color="#fff" background-color="linear-gradient(to right, rgb(152 ,245 ,255), rgb(174 ,238 ,238))"></cmd-nav-bar></view>
		<image class="img" src="http://www.itcast.cn/2018czydz/images/gywmban.jpg"></image>
		<view class="info">
			<view @click="call">联系电话：400-618-888(点击拨打)</view>
			<view>联系地址：郑州工程技术学院金河校区</view>
		</view>
		<map class="map" :longitude="longitude" :latitude="latitude" :markers="markers" :scale="scale" polyline ></map>
	</view>
</template>

<script>
	import cmdNavBar from "../../components/cmd-nav-bar/cmd-nav-bar.vue"
	export default {
		data() {
			return {
				longitude:113.630172,
				latitude:34.862506,
				scale:15,
				markers:[
					{
						longitude:113.630172,
						latitude:34.861006,
						iconPath:'../../static/logo.png',
						width:30,
						height:30
					}
				]
			}
		},
		components:{
			cmdNavBar
		},
		methods: {
			call(){
				uni.makePhoneCall({
					phoneNumber:"18338699617"
				})
			}
		}
	}
</script>

<style lang="scss">
		.contact{
			.img{
				width: 750rpx;
				height: 320rpx;
			}
			.info{
				padding: 10rpx 20rpx;
				font-size: 30rpx;
				view{
					line-height: 80rpx;
					border-bottom: 1px solid #eee;
				}
			}
			.map{
				width: 750rpx;
				height: 750rpx;
			}
		}
</style>
