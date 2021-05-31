<template>
	
	<view>
		<!-- 用户信息 -->
		<!-- <p>{{content}}</p> -->
		<view style="margin-bottom: 15rpx;">
			<cmd-nav-bar back left-text="" title=""  font-color="#fff" background-color="linear-gradient(to right, rgb(152 ,245 ,255), rgb(174 ,238 ,238))"></cmd-nav-bar>
		</view>
					<!-- <image style="height: 50rpx;width: 50rpx;" @click="fanhui"  src="../../static/fanhui.jpg" mode="widthFix"></image> -->
		<view class="header">
	
			<view class="base-user" >
				
				<a href='#' @click='aa'><image :src="usersrc" mode="" style=""></image></a>
			</view>
		
			<view class="title" style="padding-right: 10rpx;font-size: 30rpx;margin-top: 8rpx;"><p>{{message}}</p></view>
			<a href='#' style='margin-top: 8rpx;margin-left: 8rpx;'>芝麻信用中等</a>
		</view>
		<!-- 价格商品描述 -->
		<view class="desc">
			<view class="base-info">
				    <view class="info-price">
				        <p class="n-price" >￥{{price}}</p> 
						<view class='baoyou' >包邮</view>
						<p>收藏:{{collection}}</p>
				     </view>
					 <view class="detail" style="margin-bottom: 25rpx;mar">
						 {{describe}}
					 </view>
					 <view v-for="(item,index) in imageUrls " :key='index' class="swiper" style="text-align: center;">
						 <image   :src='item' ></image>
					 </view>
			</view>
		 </view>
		 
		 <!-- 评论 --><!-- 评论模块 -->
		<view class="content" >
			<!-- <p class='all'>全部留言·{{count}}</p> -->
			<!-- <view id="my"><a>我</a><input placeholder="请输入你的留言"></input></view> -->
			<!-- <ul > -->
				<ul  v-for='(item,key) in content' :key='key'>
					<!-- {{item.pid}} -->
					
					<!-- <span class='time'>{{item.creatDate.slice(0,16)}}</span> -->
					<!-- <button class='response' @click="rep(item.userID,item.pid)">回复</button> -->
					<!-- {{value}} -->
					<li class='father' >
						<!-- {{item}} -->
						<!-- <p>{{item}}</p> -->
						 <!-- {{item}} -->
						 <!-- <li v-for='(item,index) in item' :key='{index}'>{{item.commnetID}}{{item.content}}</li> -->
						
						<view class="header">
							<span class='user' > <image :src="item.userImg" >{{item.userID}}</image></span>
							<span>:{{item.content}}</span>
							<span class='time'>{{time}}</span>
							<!-- <button class='response' @click="rep(item.userID,item.pid)">回复</button> -->
						</view>
						<!-- <view v-if="item.replyComments.length>0" class="children">
							<view v-for="(item,index) in item.replyComments" :key='item.userid' class="children-response">
								<p>{{item.userID}}回复{{item.parentID}}:{{item.content}}</p><button  @click="rep(item.userID)"  class="huifu">回复</button>
							</view>
						</view> -->
					</li>
					
				<!-- </ul> -->
			</ul>
			
		</view>
		
		 <view class="sell">
			 <uni-goods-nav :fill="true"  :options="options" :buttonGroup="buttonGroup"  @click="onClick" @buttonClick="buttonClick" />
			 <!-- <qs-animation></qs-animation> -->
		 </view>
		
		
	</view>
	
</template>

<script>
	import uniGoodsNav from '../../components/uni-goods-nav/uni-goods-nav.vue'
	// import QsAnimation from '../../components/QS-Animation/QS-Animation.vue'
	import request from '../../utils/request.js'
import cmdNavBar from "../../components/cmd-nav-bar/cmd-nav-bar.vue"
	// import 
	export default {
		data() {
			return {
				pid:'',
				Array:[],
				message:'',
				time:'',
				imageUrls:[],
				title:'',
				price:0,
				collection:0,
				describe:'',
				userid:'',
				usersrc:'',
				youid:'',
				userdata:999,
				// message:'',
				 options: [{
				            type: 'hand-thumbsup',
				            text: '超赞',
							// infoBackgroundColor:'#ff0000'
				        }, {
				            type: 'star',
				            text: '收藏',
				            infoBackgroundColor:'#ff0000'
				        }],
				        buttonGroup: [
				        {
				          text: '我想要',
				          // backgroundColor: '#ffa200',
				          color: '#fff',
				        }
				        ],
				content:0,
			}
		},
		components:{
			uniGoodsNav,
			cmdNavBar
			// QsAnimation
		},
		onLoad(option) {
			// var num=Number(option.pid)
			this.pid=option.pid
			// this.pid=BigInt(pid)
			// Math.floor(num)==~~num)
			// BigInt(Number())
			console.log(this.pid,typeof this.pid)
			// console.log(option)
			// console.log(this.id)
		},
		created() {
		
					   
						if(window.localStorage.userInfo ){
							this.userid=getApp().globalData.userInfo.userid
							this.getDetail1()
						}else {
							
								
								uni.redirectTo({
									url:'../unlogin/unlogin'
								})
							
						}
					 
			// },
			
			
			
			
			// this.userid=getApp().globalData.userInfo.userid
			// this.getDetail1()
	
			
		},
		mounted() {
			// this.getNiCheng()
	
		},
		beforeUpdate() {
			// console.log(this.youid)
			// this.getNiCheng()
		},
	
		methods: {
			fanhui(){
				// console.log(111)
				uni.switchTab({
					url:'../index/index'
				})
			},
			getNiCheng(youid){
			var that=this
					request({
						url:'user/getUser',
						data:{
							userid:youid
						},
						method:'GET',
						success(res) {
							// console.log(res)
							that.usersrc = res.data.data.imgurl
							that.message=res.data.data.nickname
							// console.log(that.userdata)
						}
				
				})
			},
			aa(){
				uni.redirectTo({
					url:'../ziliao/ziliao?youid='+this.youid,
				})
			},
			// 1.获取商品数据
			getDetail1(){
				request({
					url:'product/details',
					method:"GET",
					data:{
						pid:this.pid,
						userid:this.userid
					},
					
					success:(res)=> {

						this.collection=res.data.data.collection
						this.price=res.data.data.price
						this.describe=res.data.data.describe
		
						this.imageUrls=res.data.data.imageUrls.reverse()
						// this.usersrc=res.data.data.imagsrc
						this.youid=res.data.data.userid
						// console.log(this.youid)
						// setTimeout(()=>{
							this.getNiCheng(this.youid)
						// },10)
			
					}
				})
			},
			
			//3.评论
			getContent(){
				
				// uni.request({
				// 	url:"http://112.126.59.215:8085/Comments/list",
				// 	method:"GET",
				// 	data:{
				// 		pid:this.ids
				// 	},
				// 	success:(res)=> {
				// 		this.content=res.data
				// 		// this.time=JSON.stringify(res.data.createDate).splice(0,16)
				// 		// console.log(this.time)
				// 		this.count=res.data.length
				// 		// console.log(this.content)
				// 		// console.log(res)
						
				// 	// 	var aaa=Object.values(res.data)
				// 	// 	console.log(aaa)
				// 	// 		aaa.forEach((item,index)=>{
				// 	// 			var a=[]
				// 	// 			for(var i=0;i<item.length;i++){
				// 	// 				a.push(item[i])
				// 	// 				 a=a.concat(a)
									
				// 	// 				 // return a
				// 	// 				 // return a
				// 	// 				 cosnole.log(a)
				// 	// 			}
								
								
				// 	// })
				// 		// console.log(a)
				// 	}
				// })
			},
			
			
			//4.回复大评论
			rep(userID,pid){
				uni.request({
					url:"http://192.168.1.105:8085/add",
					method:"GET",
					data:{
						pid:this.ids,
						parentID:parentID,
						userID:888,
						content:this.str
					},
					success:(res)=> {
						
						// console.log(res)
					// console.log(res.data[0])
					
					}
				})
			},
			//回复小评论
			rep1(userID){
				this.parentID=userID
				uni.request({
					url:"http://112.126.59.215:8085/addComment",
					method:"GET",
					data:{
						pid:this.ids,
						parentID:userID,
						userID:12313,
						content:this.str
					},
					success:(res)=> {
						
						// console.log(res)
					// console.log(res.data.comments[0].replyComments[0].content)
					}
				})
			},
			//5.购买模块
			
			// 左侧点击事件
			 onClick (index) {
			        // uni.showToast({
			        //   title: `点击${e.content.text}`,
			        //   icon: 'none'
			        // })
					console.log(1111,index)
					// uni.$on('click',(index)=>{console.log(index)}),
					var num=index
					if(num==1){
						request({
								url:'product/collection',
								data:{
									userid:getApp().globalData.userInfo.userid,
									pid:this.pid
								},
								method:'GET',
								success:()=>{
									uni.showToast({
										icon:'success',
										// mask:false,s
										position:'center',
										title:'收藏成功',
										// image:'../../static/a.jpg'
									})
								}
						})
					} else if(num==0){
						uni.showToast({
							icon:'none',
							title:'赞',
							// image:'http://cdn.kubtaox.top/%E5%9F%8E%E5%B8%82%E9%87%91%E5%B8%81%E8%83%8C%E6%99%AF.svg'
						})
					} 
			
					
			      },
			// 点击右侧事件
			 buttonClick (e) {
			        // console.log(e)
					console.log(1111)
					uni.navigateTo({
						url:'../ziliao/ziliao?youid='+this.youid,
					})
			        // this.options[2].info++
			      }
		}
	}
</script>

<style lang="scss">
	*{
		margin: 0;
		padding: 0;
	}
	a{
		text-decoration: none;
	}
swiper {
	width: 375px;
	height: 220px;
	image{
		width: 100%;
	}
}

 .base-info {
    // margin-top: 15px;
    padding: 0 8px;
    color: #999;
    border-bottom: 5px solid #f2f5f8;
	.swiper{
		margin-top: 5px;
		image{
			border-radius: 10px;
			margin-bottom: 5px;
		}
	}
  }
   .info-price {
	   display: flex;
      margin-top: 10px;
	  overflow: hidden;
    }
	.info-price p{
		float: left;
		font-size: 15px;
	}
	.baoyou{
		text-shadow: 1px 1px  rgba(0, 0, 0, .2);
		margin-left: 10px;
		color: #DD514C;
		 font-size: 10px;
		 margin-top: 8px;
	}
	.info-price p:nth-child(3){
		display: block;
		margin-top: 5px;
		margin-left: 160px;
		
	}
	  .info-price .n-price {
	    font-size: 24px;
	    color: #B4282D;
	  }
// 基本信息
.header{
	position: relative;
	display: flex;
	background-color: #FFF;
	// border-bottom: 1px solid #ccc;
	margin-top: 80rpx;
	padding: 8px 0;
	.title{
		margin-left: 10px;
		font-size: 18px;
		font-weight: bold;
	}
	a{
		// position: relative;
		padding: 2px 5px 5px 5px;
		color: #00AAFF;
		font-size: 8px;
		text-shadow: 2px 2px 1px 1px rgba(0, 0, 0, .5);
		&::after{
			content: '';
			position: absolute;
			width: 15px;
			height: 15px;
			right: 58px;
			top: 10px;
			margin-left: 5px;
			background: url(../../static/images/icon/newProd.png);
			background-size: 15px auto;
			border-radius: 5px;
		}
	}
	span:nth-child(2){
		line-height: 37px;
	}
	.response{
		position: absolute;
		// display: block;
		width: 25px;
		left: 170px;
		top: 20x;
		font-size: 6px;
		background-color: #EEEEEE;
	}
}
.base-user{
	margin-top: 5px;
	margin-left: 10px;
	width: 20px;
	height: 20px;
	image{
		width: 100%;
		height: 100%;
	}
}
.desc{
	// padding-top: 10px;
	padding-left: 10px;
}
.content{
	padding: 0px 5px;
	margin-top: 5px;
	margin-bottom: 50px;
	// background-color: #D9D9D9;
	border-radius: 20px;
	overflow: hidden;
	.all{
		padding: 10px 10px;
		border: 1px solid #eee;
		background-color: #D9D9D9
	}
	.my{
		// background-color: #fff!important
	}
}
.father{
	// display: block;
	position: relative;
	// width: 10px;
	// height: 100px;
	border-radius: 20px;
	.user{
		// vertical-align: middle;
		image{
			width:40px;
			height:40px;
			border-radius: 25px;
			vertical-align: middle;
		}
	}
	.time{
		position: absolute;
		right: 5px;
		top: 20px;
	}
	.children{
		padding-left: 70px;
		p:nth-last-child{
			// border-bottom: 1px solid #000000!important;
		}
	}
	.header{
		// border-top: 1px solid #8799A3;
	}
	.children-response{
		display: flex;
		position: relative;
	}
	.children-response .huifu{
		position: absolute;
		// width: 25px;
		right: 10px;
		line-height: 19px;
		top: 0px;
		font-size: 6px;
		// background-color: #EEEEEE;
		// background-color: pink;
	}
}
.sell{
	// margin-bottom: 0px;
	position: fixed;
	// position: ab;
	height: 40px;
	bottom: 0px;
	left: 0px;
	// overflow: hidden;
}
</style>
