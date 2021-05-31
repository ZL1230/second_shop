<template>
	<view class="content">
		<!-- <image style="height: 50rpx;width: 50rpx;" @click="fanhui"  src="../../static/fanhui.jpg" mode="widthFix">111</image> -->
		<cmd-nav-bar back left-text="" title=""  font-color="#fff" background-color="linear-gradient(to right, rgb(152 ,245 ,255), rgb(174 ,238 ,238))"></cmd-nav-bar>
		<view class="user">
			<image :src="imgurl" mode="scaleToFill"  @click="aa"></image>
			<view class="text">
				<view class="count">
					<view class="count_text">
						<view class="num">
							{{products?products:0}}
						</view>
						<view class="text2">
							发布
						</view>
					</view>
					<view class="count_text">
						<view class="num">
					{{products?products:0}}
						</view>
						<view class="text2">
							在售
						</view>
					</view>
					<view class="count_text">
						<view class="num">
							{{collection?collection:0}}
						</view>
						<view class="text2">
							收藏
						</view>
					</view>
				</view>
					<view class="connet huiyuan" 
								>
									会员等级: Lv 0
								</view>
			</view>
		</view>
		<view class="recommend">
			<view class="recommend_name">
				<text class="name" >
					{{userinfo.nickname?userinfo.nickname:userinfo.realname}}
				</text>
				<!-- <text class="xiaoqu">
					校区：金河校区
				</text> -->
			</view>
			<view class="recommend_data">
				<text>qq号：{{userinfo.qq?userinfo.qq:'用户隐藏'}}</text>
				<text class="weixin">微信号：{{userinfo.weixin?userinfo.weixin:'用户隐藏'}}</text>
			</view>
			<view class="recommend_text" >
				  个性签名： <p  style='font-size: 12rpx;margin-top: 15rpx;'> {{userinfo.style?userinfo.style:'该用户很懒，还没有个性签名'}}</p>
			</view>
		</view>
		<view class="goods">
			<view class="title">
				在售物品
			</view>
			<view >
				 <good-list  :goods="goods">{{goods}}</good-list>
				<!-- {{goods}} -->
			</view>
		</view>
	</view>
</template>
<script>
	// import GoodList from '../../components/good-list/GoodList.vue'
	import cmdNavBar from "../..//components/cmd-nav-bar/cmd-nav-bar.vue"
	import GoodList from '../../components/good-list/GoodList.vue'
	import request from '../../utils/request.js'
	export default {
		components:{
			GoodList,
			 cmdNavBar
		},
		data() {
			return {
				youid:'',
				products:'',
				imgurl:'',
				collection:'',
				userinfo:{
					name:'我是玛卡巴',
					qq:'',
					wx:'',
					nickname:'',
					realname:'',
					// fabu:'80',
					// sell:'11',
					// collection:'174',
					// miaoshu:' 交付给卡戴珊合规风控的建设规划反倒是开个会浮动后价格肯定都撒是给多少供奉的是范德萨都撒都撒分都撒法撒旦发 过分激动了房间都是快乐的是法国'
				},	
				goods:[]
			}
		},
		onLoad(options) {
			// console.log(options.youid,1111111111)
			this.youid=options.youid
		},
		created() {
			// this.userid=getApp().globalData.userid
				request({
				  	url:'user/otherDetails',
					// url:'user/otherDetails?id='+this.userid,
					data:{
						userid:this.youid
					},
					method:'GET',
					success:res=>{
		
						console.log(res)
						this.products=res.data.data.userInfo.products
						this.imgurl=res.data.data.userInfo.imgurl
						this.collection=res.data.data.userInfo.collections
						this.userinfo.qq=res.data.data.userInfo.qq
						this.userinfo.weixin=res.data.data.userInfo.weixin
						this.userinfo.style=res.data.data.userInfo.style
						this.userinfo.nickname=res.data.data.userInfo.nickname
						this.userinfo.realname=res.data.data.userInfo.realname
						this.goods=res.data.data.userPro
						console.log(this.goods)
			
						}
				})
		},
		methods:{
			fanhui(){
				uni.navigateBack({
					delta:1
				})
			}
		},
		  computed: {
				   
		    //    lv(){
				  //  if(this.userdata.username == 201852290418){
					 //   return -99
				  //  }else{
					 //   return 0
				  //  }
			   // }
		    }
	}
</script>

<style>
	@import "ziliao.css";
</style>