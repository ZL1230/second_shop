
<template>
<!--index.wxml-->
<view class="container" style="position: relative;">
		<!-- swiper 轮播图 -->
		<view class="section" >
					<view class="menu" @click="menu"></view>
					
						  
					<view class="search" @click="search" style="font-size: 18px;">
						<text >搜索/回收/二手</text>
					</view>
					<view class="login" @click="userClick"></view>
					<ul v-if="showa" style='display: flex;flex-direction: column;position: absolute;top: 30px;left: 6px;' class='menuss' >
						<li class='menus' :class="flag==1?'active':''" id="1" @click='menu1'>收藏</li>
						<li class='menus' :class="flag==2?'active':''"  id='2' @click='menu1'>发布</li>
						<li class='menus' :class="flag==3?'active':''"  id='3' @click='menu1'>客服</li>
						<li class='menus' :class="flag==4?'active':''"  id='4' @click='menu1'>我们</li>
					</ul>
		</view>
		
		<swiper autoplay   indicator-dots style="overflow: hidden;">
			<swiper-item class="banner-item" v-for="(item, index) in indexImgs" :key="index">
			  <view class="img-box">
				<image :src='item' :data-prodid="item.relation" @tap="toProdPage"  style="width: 100%;"></image>
			  </view>
			</swiper-item>
		</swiper>	
		<!-- <view>
			<cui-hai :emptyTips="aaa"></cui-hai>
		</view> -->
	 <!--推荐模块  -->
	 <view>
		 <recomend></recomend>
	 </view>
	 <!-- 导航  -->
	     <tab-control :titles="['生活','数码','美妆','运动','学习','其他']" 
	      @tabClick="tabClick" 
	     
	      ></tab-control>
		<!-- 商品列表展示 -->
		<view class="goods" >
		  <good-list  :goods="goodstype"></good-list>
	  </view>
		</view>
</template>



<script>
	import GoodList from '../../components/good-list/GoodList.vue'
	import TabControl from '../../components/tabcontrol/TabControl.vue'
	import Recomend from '../../components/recomend/Recomend.vue'
	import request from '../../utils/request.js'
	import pop from "@/components/sunui-upimg/sunui-upimg.vue";//组件路径
	// import CuiHai from '../../components/cuihai-combox/cuihai-combox.vue'
//index.js
//获取应用实例


export default {
  data() {
    return {
		showa:false,
		flag:1,
        indexImgs:[],
		activeName:'first',
		goodstype:[],
		currentPage:0,
		pageSize:10,
		queryString:'生活用品',
		menus:['我的收藏','我的发布','客服中心','联系我们']
		// page:0
       }
	},
	components:{
		GoodList,
		TabControl,
		Recomend,
		// CuiHai
	},
	mounted(){
		  // window.addEventListener('scroll', this.handleScroll)
	},
	created() {
		// console.log(request)
		uni.$on('send',data=>{
				// console.log(data)
				this.flag=res.data
		}),
		this.getList()
	},
onLoad() {
	// 1.获取轮播图数据
	this.getIndexImgs()
	//2.获取列表数据
	this.getList()
},
// onReachBottom(){
// 	this.currentPage+=1,
// 	this.getList(),
// 	console.log('到底了')
// 	console.log(this.currentPage)
// },
methods:{
	menu1(e){
		this.flag=e.currentTarget.id
		// console.log(this.flag)
		var num=this.flag
		if(num==1){
			setTimeout(()=>{
				uni.navigateTo({
					url:'../collection/collection'
				})
			},500)
			
		} else if(num==2){
			setTimeout(()=>{
				uni.navigateTo({
					url:'../lunchlist/lunchList'
				})
			},500)
		} else if(num==3){
			setTimeout(()=>{
				uni.navigateTo({
					url:'../chat/chat'
				})
			},500)
		} else{
			setTimeout(()=>{
				uni.navigateTo({
					url:'../contact/contact'
				})
			},500)
		}
	},
	 menu(){
		 this.showa=!this.showa
	 },
	userClick(){
		uni.switchTab({
			url:'../user/user'
		})
	},
	// 点击搜索按钮
	search(){
		uni.switchTab({
			url:'../serach/search'
		})
	},
	//监听页面是否显示隐藏
	 handleScroll () {
	      let scrollY = document.documentElement.scrollTop
	      if (scrollY > 28) {
	          // do something...
			 this.active=false
	           }
	        else {
	       this.active=true
	    }
},
	// 1.获取轮播图数据
	getIndexImgs() {
		var that = this;
		request({
			url:'product/banner',
			method:'GET',
			
			success:(res)=> {
				that.indexImgs=res.data.reverse()
				
			}
		})
	
	},
	//2.获取列表数据
	getList(name,page){
		// console.log(222222)
		// this.currentPage+=1
		// console.log(this.currentPage)
		request({
			url:"product/findByType",
			method:"POST",
			// header:{Authorization:Bearer+this.flag},
			// header: {Authorization:'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMDE4NTIyOTA0MTEiLCJjcmVhdGVkIjoxNjE4NjI1NTM4ODE1LCJleHAiOjE2MTkyMzAzMzh9.Dmv1GxEaB0ZdFrwOYXv_4oEHyELQhRHXViUoJZYU6Y7rw3Ana4nNq9SLRf9gWYvUuLj8h0RYbu-ipVUg2gFRuA'},
			data:{
				 currentPage:this.currentPage,
				   "pageSize":10,
				   "queryString":this.queryString
			},
			success:(res)=> {
				// console.log(res.data.data.banner.list)
				this.goodstype=res.data.data
				// console.log(this.goodstype)
				// if(this.goodstype.length>=5){
				// 	this.goodstype.unshift(...res.data.data)
				// }
			}
		})
		// console.log(2)
	},
	tabClick(index){
	    switch(index){
	      case 0:
	        this.queryString='生活用品'
	         break
	      case 1:
	        this.queryString='数码产品'
	         break
	         case 2:
	        this.queryString='个护美妆'
	         break
			 case 3:
			 this.queryString='运动器材'
			  break
			  case 4:
			  this.queryString='学习资料'
			   break
			   case 5:
			   this.queryString='其他'
			    break
	    }
		request({
			url:"product/findByType",
			method:"POST",
			// header: {Authorization:'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMDE4NTIyOTA0MTQiLCJjcmVhdGVkIjoxNjE3OTc0OTM2MzgxLCJleHAiOjE2MTg1Nzk3MzZ9.cWVFkqFB4CFGgab6KPBWyAzJgveQPLkz_2qBlWQzunIi8IAZ0Ems1ysU_2EDJCNMDcmpXYtOgpRuLfBKOOudLg'},
			data:{
				"currentPage":this.currentPage,
				  "pageSize":10,
				  "queryString":this.queryString
			},
			success:(res)=> {
				
				console.log(res.data.data)
				this.goodstype=res.data.data
				// if(this.goodstype.length>=5){
					// this.goodstype=[...res.data.data,this.goodstype]
				// }
				// console.log(this.goodstype)
			}
		})
		
}}
}
</script>
<style lang="scss">
	*{
		margin: 0;
		padding: 0;
	}
	li{
		list-style: none;
	}
	a{
		text-decoration: none;
	}
	page {
	    max-width: 640px;
	    min-width: 320px;
	    margin: 0 auto;
	    font: normal 14px/1.5 Tahoma, "Lucida Grande", Verdana, "Microsoft Yahei", STXihei, hei;
	    color: #000;
	    background: #f2f2f2;
	    overflow-x: hidden;
	    -webkit-tap-highlight-color: transparent;
	}
	.container{
		width: 100%;
		
	}
//头部信息模块

//轮播图
 swiper {
	 width: 100%;
	// width: 375px;
	height: 220px;
	image{
		width: 100%;
	}
}
.section{
	position: absolute;
	display: flex;
	z-index: 999;
	left: 50%;
	top: 10px;
	margin-top: 12px;
	border-radius: 5px;
	transform: translateX(-50%);
	width: 100%;
	min-width: 320px;
	max-width: 640px;
	// overflow: hidden;
	// border-bottom: 1px solid #3A86B9;
	.menus{
		display: block;
		// border: 1px solid #fff;
		// border-radius: 5px ;
		// background-color: #000000;
		// border-bottom: 1px solid #DD524D;
	}
	.active{
		border-bottom: 1px solid #DD524D;
		font-weight: bold;
	}
	.menuss{
		// border: 1px solid #fff;
		padding: 3px;
		border-radius: 5px ;
	}
	.menu{
	
		width: 40px;
		height: 44px;
		text-align: center;
		// border-bottom: 1px solid #DD524D;
	}
	.menu::before{
		content: '';
		display: block;
		width: 20px;
		height: 18px;
		background: url(../../static/images/icon/s-btn.png) no-repeat;
		background-size: 20px 18px;
		margin: 10px 10px 10px 10px
	}
	.search{
		flex: 1;
		top: 50px;
		// margin-top: 10px;
		// line-height: 35px;
		height: 35px;
	    border: 1px solid #00A0EA;
		border-radius: 22px;
		box-shadow: 0px 4px 4px rgba(0,0,0,.4) ;
		font-weight: bold;
		// margin: 0 60px;
	}
	.search:before{
		position: absolute;
		left: 0;
		top: 0;
		content: '';
		display: block;
		width: 44rpx;
		height: 60px;
		line-height: 60px;
		background: url(../../static/images/icon/search-01.png) no-repeat;
		background-size: 44rpx 60rpx;
		margin: 5px 0px 0px 86px 
	}
	.search:after{
		content: '';
		display: block;
		left: 0;
		top: 0;
		 width: 1px;
		 height: 20px;
		 position: absolute;
		 margin-left: 115px;
		 margin-top: 11px;
		border-right: 1px solid #ddd;
		 background-color: pink;
	}
	.search text{
		position: absolute;
		top: 0;
		left: 0;
		margin: 8px 10px 10px 125px;
		font-size:16px
		
	}
	.login{
		width: 40px;
		height: 44px;
		// background: url(../../static/images/tabbar/user.png) no-repeat;
		// background-size: 30px 30px;
	}
	.login::after{
		content: '';
		display: block;
		width: 30px;
		height: 30px;
		background: url(../../static/images/tabbar/user.png) no-repeat;
		background-size: 30px 30px;
		margin: 5px auto;
	}
	
}


</style>