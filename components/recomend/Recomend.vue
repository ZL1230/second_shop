<template>
	<view>
		<ul class="local-nav" @click='state'> 
					 <li class="first">
					 		<a href="#" title="景点游乐">
					 			<span></span>
					 			<span>生活馆</span>
					 		</a>
					 	</li>
					 	<li class="second">
					 		<a href="#" title="周边游">
					 			<span></span>
					 			<span>二手市场</span>
					 		</a>
					 	</li>
					 	<li class="third">
					 		<a href="#" title="美食林">
					 			<span></span>
					 			<span>创新创业</span>
					 		</a>
					 		</li>
					 	<li class="fourth">
					 		<a href="#" title="一日游">
					 			<span></span>
					 			<span>会员中心</span>
					 		</a>
					 	</li>
					 	<li class="fifth">
					 		<a href="#" title="当地攻略">
					 			<span></span>
					 			<span>淘友攻略</span>
					 		</a>
					 		</li>
					 </ul>
	</view>
</template>

<script>
	export default{
		data(){
			return {
				
			}
		},
		methods:{
			state(){
				uni.showToast({
					title:'暂未开通....',
					icon: 'none',
					duration: 2000
				})
			}
		}
		
	}
</script>

<style>
	*{
		margin: 0;
		padding: 0;
	}
	a{
		text-decoration: none;
		
	}
	li{
		list-style: none;
	}
	// 导航模块
	.local-nav{
		display: flex;
		/* justify-content: space-around; */
		height: 60px;
		background-color: #fff;
		border-radius: 8px;
		margin: 3px 4px;
		padding: 10px 0;
	}
	.local-nav li{
		flex: 1;
	}
	.local-nav li a{
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		font-size: 12px;
		color: #00A0E9;
	}
	.first a span:nth-child(1){
		width: 32px;
		height: 32px;
		margin-top: 5px;
		background: url(../../static/images/icon/localnav_bg.png) no-repeat 0px 0px;
		background-size: 32px 160px;
	}
	.second a span:nth-child(1){
		width: 32px;
		height: 32px;
		margin-top: 5px;
		background: url(../../static/images/icon/localnav_bg.png) no-repeat 0px -32px;
		background-size: 32px 160px;
	}
	.third  a span:nth-child(1){
		width: 32px;
		height: 32px;
		margin-top: 5px;
		background: url(../../static/images/icon/localnav_bg.png) no-repeat 0px -64px;
		background-size: 32px 160px;
	}
	.fourth a span:nth-child(1){
		width: 32px;
		height: 32px;
		margin-top: 5px;
		background: url(../../static/images/icon/localnav_bg.png) no-repeat 0px -96px;
		background-size: 32px 160px;
	}
	.fifth a span:nth-child(1){
		width: 32px;
		height: 32px;
		margin-top: 5px;
		background: url(../../static/images/icon/localnav_bg.png) no-repeat 0px -128px;
		background-size: 32px auto;
	}
</style>
