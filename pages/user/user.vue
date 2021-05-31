<template>
	<view id="mack">

		<view class="user">

			<!-- 头部 -->
			<view class="user-wrap">

				<!-- <view class="register" @click="register">注册</view> -->
				<view class="info">
					<image class="avatar" mode="aspectFill" :src="userInfo.imgurl"></image>
					<view class="nickname" style="font-weight: 600;text-shadow: 1px 1px .1px #000000;">{{ userInfo.nickname }}</view>
					<p v-if="flag==true" @click='send' style="font-size: 20rpx; color: #ffffff;">编辑信息</p>
					<pop ref="xiajiapop" id="xiajiapop" :is_close="true" :is_mask="true" :width="100">
						<view class="edit">
							<view class="touxiang">
								<view class="text">
									更换头像
								</view>
								<sunui-upimg @sendUrl='bb' id="up" upload_auto=true upload_count="1" upload_img_wh="width:120rpx;height:120rpx;">
								</sunui-upimg>
							</view>
							<view class="edit_text">
								<view class="text">
									昵称
								</view>
								<input type="text" value="" placeholder="请输入昵称" v-model="user.nickname" maxlength="8" />
							</view>
							<view class="edit_text">
								<view class="number" placeholder="最长11位数字" style="padding-left: 30rpx;">
									QQ号
								</view>
								<input type="number" value="" placeholder="最长11位数字" v-model="user.qq" maxlength="11" />
							</view>
							<view class="edit_text">
								<view class="text">
									微信号
								</view>
								<input type="text" value="" placeholder="请输入微信号" v-model="user.weixin" maxlength="11" />
							</view>
							<view class="edit_text">
								<view class="text">
									密码
								</view>
								<input type="password" value="" placeholder="请输入新密码" v-model="user.loginpassword" maxlength="8" />
							</view>
						<!-- 	<view class="edit_text" style="padding-left: 10vw;">
								校区：

								<radio-group @change="radioChange">
									<label v-for="(item, index) in items" :key="item.value">
										<radio :value="item.value" class="radio" :checked="index === current" />
										<text>{{item.name}}</text>
									</label>
								</radio-group>
							</view> -->
							<!-- <view class="edit_text">
								<view class="text">
									学院
								</view>
								<input type="text" value="" placeholder="请输入学院名" v-model="user.xueyuan" maxlength="8" />
							</view> -->
							<view class="edit_text">
								<view class="text">
									手机号
								</view>
								<input type="text" value="" placeholder="最长11位数字" v-model="user.usermobile" maxlength="11" />
							</view>
							<view class="edit_text">
								<view class="">
									个性签名
								</view>
								<textarea class="textarea" value="" placeholder="请输入个人介绍哦~" v-model="user.style"/>
								</view>
										<view id="finish" class="finish" @click="finish">
											<p>完成</p>
										</view>
									</view>
								</pop>
			</view>
			<!-- <view class="login" @click="login" style="font-size: 28rpx;">切换帐号</view> -->
		</view>
		<!-- 订单状态 -->
		<view class="order-status">
			<view class="status-wrap">
			
				<view class="cell" @click="notice">
					<view class="cell-left" >
						<!-- <image class="cell-icon"  mode="aspectFill"></image> -->
						<view class="cell-text" style="padding-left: 0;">姓名 : {{userInfo.realname}}  </view>
						<view class="cell-text" style="margin-left: 30vw;">      未开通会员  </view>
					</view>
					<view class="iconfont iconmore1"></view>
				</view>
			</view> 
		</view>

		<!-- 滑动导航 -->
		<view style="border-radius: 20rpx;  margin: 0 20rpx;" class="infor">
		<!-- 	<com-nav >性别
			</com-nav> -->
		<!-- 	<li><p style="padding-left: 20rpx;">学号:</p><P style="font-size: 15px;">{{userInfo.userid}}</P></li>
			<li><p>班级:</p><P style="font-size: 12px;">{{userInfo.unitname}}</P></li> -->
			<view class="" style="margin-top: 20rpx;padding-top: 10rpx;margin-left: 3vw;font-size: 30rpx;">
				<text>学号：{{userInfo.userid}}</text>   <text style="padding-left: 20vw;font-size: 35rpx;color: #4b4b4b;"></text>
			</view>
			<view class="" style="margin-left: 3vw; margin-top: 3vh;" >
				班级：<text  style="font-size:30rpx;">{{userInfo.unitname}}</text>   
			</view>
		<!-- 	<view class="" style="margin-left: 3vw;" >
				<text>昵称：{{userInfo.nickname}}</text>   <text style="padding-left: 20vw;font-size: 35rpx;color: #4b4b4b;"></text>
			</view> -->
		</view>

		 <!-- 用户功能 -->
		<view class="com-item">
			<view class="com-wrap">
				<view class="cell" v-for="(item, index) in userList" :key="index" @click="aa(item)">
					<view class="cell-left" >
						<image class="cell-icon" :src="item.icon" mode="aspectFill"></image>
						<view class="cell-text">{{ item.title }}</view>
					</view>
					<view class="iconfont iconmore1"></view>
				</view>
			</view>
		</view>

		<!-- 用户服务 -->
		<view class="com-item">
			<view class="com-wrap">
				<view class="cell" v-for="(item, index) in serverList" :key="index" @click="aa(item)" >
					<view class="cell-left" >
						<image class="cell-icon" :src="item.icon" mode="aspectFill"></image>
						<view class="cell-text">{{ item.title }}</view>
					</view>
					
				</view>
			</view>
		</view>
	</view>
	</view>
</template>
<script>
import comNav from './components/com-nav.vue'
import pop from "../../components/ming-pop/ming-pop.vue"; //组件路径
	import sunuiUpimg from '../../components/sunui-upimg/sunui-upimg.vue' //上传图片插件
	import request from '../../utils/request.js'
export default {
	data() {
		return {
			user : {				username:'',
									unitname:'',
									style:'',
									qq:'',
									nickname:'',
									usermobile:'',
									loginpassword:'',
						userid:''
							},
			flag:true,
			// 判断是否登录   默认未登录  为登录会显示遮罩层
			userInfo: {
		
			},
		
			currentIndex: 0,
			items: [{
			                    value: '金河',
			                    name: '金河'
			                },
			                {
			                    value: '英才',
			                    name: '英才',
			                },
			                {
			                    value: '航海',
			                    name: '航海'
			                },
			            
			            ],
			            current: 0,
			userList: [
				{
					title: '我的发布',
					icon: '../../static/images/icon-address.png',
					path: '../lunchlist/lunchList'
				},
				{
					title: '我的收藏',
					icon: '../../static/images/icon-collect.png',
					path: '../collection/collection'
				},
				
			],
			serverList: [
				{
					title: '客服中心',
					icon: '../../static/images/icon-kefu.png',
					path: '../chat/chat'
				},
				{
					title: '联系我们',
					icon: '../../static/images/icon-help.png',
					path: '../contact/contact'
				},
				{
					title: '切换账号',
					icon: '../../static/images/icon-about.png',
					path: '../login/login'
				},
			
			]
		};
	},
components: {
		comNav,
		pop,
		sunuiUpimg
	},
	created() {
  
					
		this.userInfo=getApp().globalData.userInfo
		this.user = getApp().globalData.userInfo
		this.user.userid=getApp().globalData.userInfo.userid
		
		//登录才能访问
		// if(JSON.stringify(getApp().globalData.userInfo) == "{}"){
		// 	uni.redirectTo({
		// 		url:'../unlogin/unlogin'
		// 	})
		// }
	},
	onLoad() {
		// if(JSON.stringify(data) == "{}"){
		// 	uni.redirectTo({
		// 		url:'../unlogin/unlogin'
		// 	})
		// }
	},
	
	methods:{
		tologin(){
			uni.navigateTo({
				url:'../login/login'
			})
		},
		bb(a){
					   this.user.imgurl ='http://cdn.kubtaox.top/' + a
					   console.log(a)
					   console.log(this.user.imgurl )
		},
		notice(){
			console.log(11)
			uni.showToast({
				title:'暂无会员服务....',
				icon: 'none',
				duration: 2000
			})
		},
		// aa(item){
			
		// 	console.log(item,11111)
		// 	uni.navigateTo({
		// 		url:item.path
		// 	})
		// },
		
		aa(item){
			uni.navigateTo({
				url:item.path
			})
		},
		register(){
			uni.navigateTo({
				url:'../gister/gister'
			})
		},
		login(){
			uni.navigateTo({
				url:'../login/login'
			})
		},
		send() {
			this.$refs.xiajiapop.show()
		},
		  radioChange: function(evt) {
		            for (let i = 0; i < this.items.length; i++) {
		                if (this.items[i].value === evt.target.value) {
		                    this.current = i;
							console.log(evt.target.value)
							this.user.xiaoqu = evt.target.value
		                    break;
		                }
		            }
		        },
		finish() {
			console.log('ss')
			this.$refs.xiajiapop.close();
			request({
				url: 'user/update',
				method: 'PUT',
				data: 	this.user,
				success: res => {
					console.log('请求成功')
					console.log(res.data.data)
					getApp().globalData.userInfo=res.data.data.userinfo
					var userInfo=JSON.stringify(res.data.data)
						console.log(userInfo,1111111111)
					if(!window.localStorage){
					            alert("浏览器不支持localstorage");
					            return false;
					        }else{
					            var storage=window.localStorage;
					            //写入a字段
					            // storage.userInfo = userInfo
					            //写入c字段
					            storage.setItem("userInfo",userInfo);
							
							
								console.log('保存成功')
					        }
					
				}
			})
		
		},
	},
};
</script>

<style lang="scss">
	li{
		// padding: 5px;
		list-style: none;
		padding-left: 5px;
		display: flex;
		flex-direction:column ;
		justify-content: center;
	}
	.infor{
		margin-top: 10px;
		background: #fff;
		height: 80px;
	
	}
page {
	background: #f2f2f2;
}
.btn-hover {
	background: #f2f2f2 !important;
}

.user {
	.user-wrap {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 50vw;
		padding: 30rpx;
		z-index: .6;
		border-radius: 0 0 20% 20%;
		background: url(http://cdn.kubtaox.top/%E5%9F%8E%E5%B8%82%E9%87%91%E5%B8%81%E8%83%8C%E6%99%AF.svg) no-repeat;
		// opacity: 0.7;
		background-position:center;
		background-size: cover;
		.register {
			color: #fff;
			position: absolute;
			top: 60rpx;
			left: 60rpx;
			font-size: 20rpx;
			text-shadow: 1px 1px #007AFF;
		}
		.login{
			color: #fff;
			position: absolute;
			top: 60rpx;
			right: 60rpx;
			font-size: 20rpx;
			text-shadow: 1px 1px #007AFF;
			
		}
		.info {
			position: absolute;
			text-align: center;
			.avatar {
				width: 150rpx;
				height: 150rpx;
				border-radius: 50%;
			}
			.nickname {
				color: #fff;
				font-size: 28rpx;
			}
		}
	}
	.order-status {
		padding: 0 20rpx;
		margin-top: -10vw;
		.status-wrap {
			border-radius: 25rpx;
			overflow: hidden;
			.status-list {
				display: flex;
				justify-content: space-evenly;
				align-items: center;
				background: #fff;
				padding-top: 30rpx;
				padding-bottom: 30rpx;
				.status-item {
					flex: 1;
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;
					.item-icon {
						line-height: 1;
						font-size: 65rpx;
						color: #bbb;
					}
					.item-text {
						font-size: 28rpx;
						color: #666;
						margin-top: 5rpx;
					}
				}
			}
		}
	}
	.com-item {
		padding-left: 20rpx;
		padding-right: 20rpx;
		margin-top: 20rpx;
		.com-wrap {
			border-radius: 25rpx;
			overflow: hidden;
		}
	}
	.cell {
		height: 80rpx;
		padding-left: 20rpx;
		padding-right: 20rpx;
		margin-bottom: 5px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		background: #fff;
		border-bottom: 1px solid #f8f8f8;
		&:active {
			background: #f2f2f2;
		}
		&:last-child {
			border-bottom: none !important;
		}
		.cell-left {
			display: flex;
			align-items: center;
			.cell-icon {
				width: 50rpx;
				height: 50rpx;
			}
			.cell-text {
				color: #666;
				font-size: 28rpx;
				margin-left: 20rpx;
			}
		}
		.iconfont {
			font-size: 40rpx;
			color: #999;
		}
	}
}
.edit{
	height: 90vh;
	// background-color: rgb(243,243,243);
}
.edit .touxiang {
	margin-top: 50rpx;
	display: flex;
	font-size: 35rpx;
	font-weight: 400;
	line-height:170rpx;
	height: 170rpx;
	text-align: center;
}
.edit .touxiang .text{
	flex: 30;
	// margin-right: 20vw;
	// padding-right: 20vw;
}
.edit .touxiang #up{
	display: flex;
	justify-content: center;
	// width:130rpx;
	flex: 70;
	// margin-left: 30vw;
	// padding-left: 20vw;
}
.edit .edit_text{
	border-bottom: 1rpx solid #f7f7f7;
	line-height: 100rpx;
	display: flex;
	// justify-content: space-around;
	color: #000000;
}
.edit .edit_text .text{
	color: #232323;
	flex: 30;
}
// .edit_text:nth-last-child{
// 	height: 10px;
// }
.edit .edit_text input{
	display: block;
	flex:70;
	height: 100rpx;
	width: 50vw;
	line-height: 100px;
	margin-left: 0;
	text-align: center;
	// justify-content: space-between;
}
.edit #finish{
	font-size: 36rpx;
	width: 30vw;
	height: 70rpx;
	background-color: #f0f0f0;
	line-height: 70rpx;
	margin-left: 30vw;
	text-align: center;
	margin-top: 20rpx;
	border-radius: 20rpx;
	
}

.edit .finish:hover{
}
.textarea{
	padding-top: 30rpx;
	width: 60vw;
	border: 1rpx solid #f7f7f7;
	height: 200rpx;
}
#mack{
	
	// background-color: red;
	// z-index: 199;
}
.user{
	position: relative;
}
.denglu{
	width: 900rpx;
	height: 1700rpx;
	background-color: rgba(0,0,0,0.3);
	z-index: 99;
	position: absolute;
}
.todenglu{
	position: absolute;
	width: 25vw;
	height: 5vh;
	color: white;
	margin-top: 40vh;
	margin-left: 35vw;
	background-color: #00FFFF;
	display: inline-block;
	padding-top: 2vh;
	padding-left: 10vw;
	border-radius: 12vw;
	
}
.radio{
	margin-left: 3vw;
}
</style>
