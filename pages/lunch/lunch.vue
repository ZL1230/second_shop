<template>

	<view id="box">

		<view id="top">
			<button class="button1" plain='true' type="default" @click="cc">取消</button>
			<button class="button2" type="default" @click="lunch">发布</button>
		</view>
		<view class="main">
			<view id="miaoshu">
				<textarea value="" v-model="product.describe" placeholder="物品描述:优先展示首行,第一张图片..." />
				</view>
			<view id="tianjia">
				<sunui-upimg  @sendUrl='aa' @remove="remove"  upload_count="8" upload_img_wh="width:20vw;height:20vw;"></sunui-upimg>
			</view>
			</view>
			
			<view id="xinxi">
				<view class="title">
					<image src="../../static/images/icon/getCoupon.png" mode="widthFix"></image>
					<text>分类/成色/价格</text>
				</view>
				<view class="xinxi1">
					<text class="fenlei">分类: </text> 
						<text>{{product.type}}</text> 
			
				<view class="example-body">
					<view class="tag-view" @click="bindClick" id="set1" >
						<uni-tag text="生活"    circle="true" :type="settype1"/>
					</view>
				
					<view class="tag-view" @click="bindClick" id="set2" >
						<uni-tag text="数码"   circle="true" :type="settype2"/>
					</view>
					<view class="tag-view" @click="bindClick"  id="set3">
						<uni-tag text="美妆"   circle="true" :type="settype3" />
					</view>
				
				<view class="tag-view" @click="bindClick"  id="set4" >
					<uni-tag text="运动" circle="true" :type="settype4" />
				</view>

				<view class="tag-view" @click="bindClick" id="set5">
					<uni-tag text="资料"   circle="true" :type="settype5"/>
				</view>
		
				<view class="tag-view" @click="bindClick"   id="set6">
					<uni-tag text="其他"   circle="true" :type="settype6" />
				</view>
				
				</view>
				
				</view>
				<view class="xinxi2">
					<text class="fenlei">使用程度: </text>
						<text  v-model="product.quality"> {{product.quality}}</text> 
					<view class="">
						<view class="tag-view"  @click="qualityClick" id="01" >
							<uni-tag text="全新" class="chengse1" :type="qualitytype1"  />
						</view>
						
						<view class="tag-view" circle @click="qualityClick" id="02" >
							<uni-tag text="略新"  class="chengse2"   :type="qualitytype2" />
						</view>
					
						<view class="tag-view" @click="qualityClick" id="03">
							<uni-tag text="明显使用"  class="chengse3" :type="qualitytype3"  />
						</view>
					</view>
				</view>
				<view class="xinxi3">
					<view class="price"  >
							 
							<p  id="price"  mode="widthFix">￥</p>
						<input  type="number" id="input_price" v-model="product.price" placeholder="请输入出售价格" value="" />
					</view>
				</view>
			</view>
</view>
</template>

<script>
	// 图片上传
	import sunuiUpimg from '@/components/sunui-upimg/sunui-upimg.vue'
	// 标签组件
	import uniTag from '@/components/uni-tag/uni-tag.vue'
	// 弹框组件
	import pop from "@/components/sunui-upimg/sunui-upimg.vue";//组件路径
	import request from '../../utils/request.js'



export default {
	components: {sunuiUpimg,uniTag,pop},
  data() {
     return {
		 denglu:false,
		
					product:{
							"describe": "",
							"imageUrls": [],
							"price": '',
							"type": "",
							"userid": "201852290408",
							quality:''
					},
					// settype:['default','default','default','default','default','default'],
					settype1:'default',
					settype2:'default',
					settype3:'default',
					settype4:'default',
					settype5:'default',
					settype6:'default',
					qualitytype1:'default',
					qualitytype2:'default',
					qualitytype3:'default',
			
                    limitNumber: 8,
                    imageData : [],
                    serverUrl: 'http://172.31.54.145:8085/admin/file/upload/element',
                    serverUrlDeleteImage: 'http://localhost:1234/work/deleteWorkPicture',
                    formData: {
                        userId: 2
                    },
                } 
  },
  
 onLoad() {
  // this.product.describe=''
  // this.product.price=''
  // this.product.type=''
  // this.product.quality=''
  },
 
  props: {},
  created() {
	  // this.product.describe=''
	  // this.product.price=''
	  // this.product.type=''
	  // this.product.quality=''
	
  	if(JSON.stringify(getApp().globalData.userInfo) == "{}"){
  		// uni.showToast({
  		// 	duration:2000,
  		// 	title:'你还未登录...',
  		// 	icon:'nono'
  		// }),
  		uni.redirectTo({
  			url:'../unlogin/unlogin'
  		})
  	}else{
  		this.product.userid = getApp().globalData.userInfo.userid
  	}
  },
		methods:{
			cc(){
				this.product.describe=''
				this.product.price=''
				this.product.type=''
				this.product.quality=''
				// location.reload()
				uni.$emit('send',()=>{})
				this.settype1='default',
				this.settype2='default'
				this.settype3='default',
				this.settype4='default',
				this.settype5='default',
				this.settype6='default',
				this.qualitytype1='default',
				this.qualitytype2='default',
				this.qualitytype3='default'
				 // qualityClick(e.currentTarget.id)
				// this.
								
									// ation:1000,
								
										
											
											
										// uni.switchTab({
										// 		url:'../index/index'
										// })
										// this.product.describe=null
										
									
									
			},
           aa(a){
			   this.product.imageUrls.push(a)
			   // console.log(this.productdata.imgsrc)
			   
			   console.log(this.product)
		   },
		   		   remove(idx){
		   			   this.product.imageUrls.splice(idx,1)
		   			   console.log('删除成功,返回新数组')
		   			   console.log(this.product.imageUrls)
		   		   },
		   
			 bindClick(e){	     
					this.settype1 = "default"
					this.settype2 = "default"
					this.settype3 = "default"
					this.settype4 = "default"
					this.settype5 = "default"
					this.settype6 = "default"
					console.log(e.currentTarget.id)
					
					if(e.currentTarget.id == 'set1'){
							this.product.type = "生活用品"
							this.settype1 = 'success'
					}else if(e.currentTarget.id == 'set2'){
						this.product.type = "数码产品"
						
						this.settype2 = 'primary'
						
					}else if(e.currentTarget.id == 'set3'){
						this.product.type = "个护美妆"
						this.settype3 = 'error'
						
					}else if(e.currentTarget.id == 'set4'){
						this.product.type = "运动器材"
						this.settype4 = 'error'
						
					}else if(e.currentTarget.id == 'set5'){
						this.product.type = "学习资料"
						this.settype5 = 'warning'
						
					}else if(e.currentTarget.id =='set6'){
						this.product.type = "其他"
						this.settype6 = 'success'
						
					}
			        },
					qualityClick(e){
						this.qualitytype1 = 'default'
						this.qualitytype2 = 'default'
						this.qualitytype3 = 'default'
						if(e.currentTarget.id =='01'){
							this.product.quality = "全新"
							this.qualitytype1 = 'success'
						}else if(e.currentTarget.id =='02'){
							this.product.quality = '略有磨损'
							this.qualitytype2 = 'warning'
						}else{
							this.product.quality = '明显使用痕迹'
							this.qualitytype3 = 'error'
						}
					       },
							   getStores() {
							   			var that = this;
							   			request({
							   				url: '/api/shopStore',
							   				method: 'get',
							   				success: (res) => {
							   					that.stores = res.data.content
							   				}
							   			})
							   		},
						   lunch(){
							
							   if(this.product.price > 0 && this.product.quality !== '请选择' && this.product.type !== '请选择'&& this.product.
							   ribe !==''&& this.product.imageUrls.length!==0)
							   {
								   // if( (typeof this.product.price) !="number"  ){
								   // 								   uni.showToast({
								   // 								   	icon:'none',
											// 						title:'价格不合理'
								   // 								   })
								   // }
								  uni.showLoading({
								      title: '加载中',
								  });						  
								   request({
								   	url:'product/insert',
									method:'POST',
									data:this.product,
									success:res=>{
										this.product.describe=''
										this.product.price=''
										this.product.type=''
										this.product.quality=''
										// location.reload()
										uni.$emit('send',()=>{})
										this.settype1='default',
										this.settype2='default'
										this.settype3='default',
										this.settype4='default',
										this.settype5='default',
										this.settype6='default',
										this.qualitytype1='default',
										this.qualitytype2='default',
										this.qualitytype3='default'
										// this.
															if(res.statusCode ==200 ){
															console.log(res)
															console.log(this.product)
															// ation:1000,
															uni.showToast({
																title:'上传成功',
																icon:'success',
																duration:1000,
																success() {
																	
																
																	
																	
																// uni.navigateTo({
																// 	url:'../lunchlist/lunchList'
																// })
																// this.product.describe=null
																}
															})
															}
															// uni.navigateTo({
															// 	url:'../lunchlist/lunchList'
															// })
															
									}
								   })
						
								// 	弹出提示  并清空页面
								// uni.showToast({
								//     title: '发布成功',
								//     duration: 2000
								// });
								//     console.log(this.product)
							   }else{							     
								 uni.showModal({
								     
								confirmColor:'#E43130',
								title:'信息填写不完整，请重试',
								
									 showCancel:false,
									 confirmText:'继续填写',
								     success: function (res) {
								         if (res.confirm) {
								             console.log('用户点击确定');
								         } else if (res.cancel) {
								             console.log('用户点击取消');
								         }
								     }
								 });
								   
							   }
							  
						   },
			
        }
};
</script>
<style>
/* pages/login/login.wxss */
	#box{
		position: relative;
	}
#top{
	position: relative;
	height: 80rpx;
	width: 100%;
	/* background-color: #00A0EA; */

	
}
#top .button1{
	background-color: #f1f1f1;
	position: absolute;
	border: 0rpx;
	font-size: 30rpx;
	font-weight: 400;
	width: 140rpx;
	height: 60rpx;
	left: 10rpx;
	top: 20rpx;
	margin-left: 0.5rem;	line-height: 60rpx;
}
#top .button2{
	position: absolute;
	font-size: 30rpx;
	font-weight: 400;
	
	width: 140rpx;
	height: 60rpx;
	right: 10rpx;
	color: #584E61;
	background-color: #00A0E9;
	border-radius: 30rpx;
	line-height: 60rpx;
	top: 20rpx;
	margin-right: 0.5rem;
}

	.main{
		background-color: #f7f9f7;
		margin: 20rpx;
		margin: 20rpx 2.5vw;
		border-radius: 30rpx;
	}
#miaoshu{
	margin-top: 20rpx;
	height: 150rpx;
	margin: 10rpx;
	border-radius: 30rpx;
}
	
#miaoshu textarea{
	padding: 20rpx;
	
}
#tianjia{
	margin: 0rpx;

	padding:0vw;

}
	


#xinxi{

	margin-top: 0rpx;
	height:500rpx;
	border-radius:30rpx ;
	margin: 20rpx 2.5vw;
	
}
#xinxi .title{
	/* background-color: #000000; */
	height: 80rpx;
	padding: 10rpx;
	font-size:32rpx;
	font-weight: 500;
	
	
}

 .fenlei{
	font-weight: 700;
	font-size: 30rpx;

}
#xinxi .title text{
	
	font-size: 32rpx;
	padding-top: 3rpx;
}
#xinxi .title image{
	margin: 3rpx;
	width: 35rpx;
	padding-top:10rpx;
	
}
#xinxi .xinxi1{
	width: 100%;
	height: 230rpx;
	/* background-color: #0000FF; */
	
	
}
	

#xinxi .xinxi1 .tag-view{
	width:25vw;
	margin:2vw;
	justify-content: flex-start;
	display: inline-block;

	font-size: 15rpx;
}
#xinxi .xinxi2{
	width: 100%;
	height: 120rpx;
	/* background-color: #0AB906; */
	}

#xinxi .xinxi2 .tag-view{
	display: inline-block;
	font-size: 14rpx;
	margin-top: 20rpx;
	
	
	}

#xinxi .xinxi2 .chengse1{
	width: 15vw;
	margin-right: 5vw;
}
#xinxi .xinxi2 .chengse2{
	margin-right: 5vw;
	width: 15vw;
}
#xinxi .xinxi2 .chengse3{
	margin-right: 5vw;
	width: 20vw;
}
#xinxi .xinxi4{
	width: 100%;
	height: 120rpx;
	/* background-color: #0AB906; */
}
	
#xinxi .xinxi4 .tag-view{
	display: inline-block;
	margin: 10rpx;
	margin-left: 30rpx;
	
}
#xinxi .xinxi3{
	
	color: #000000;
	
		height: 80rpx;
	/* background-color: #3A86B9; */
	
	background-color: #f7f9f7;
	margin: 10rpx;
	padding-top: 30rpx;
	border-radius: 30rpx;
	margin-top: 30rpx;
	
	
}
	
#xinxi .xinxi3 p{
	width: 30rpx;
}
/* #xinxi .xinxi3 text{
	color: #000000;
	font-size: 40rpx;
	color: #666666;
	background-color: #000000;
} */
#xinxi .xinxi3 input{
	color:red;
	margin-left: 100rpx;
	padding-left: 6vw;
	font-size: 40rpx;
	margin-top: -55rpx;
}
	
#xinxi .xinxi3 #price{
	margin-left: 10vw;
	
}
	
#xinxi .xinxi3 .price2{
	
	font-size: 35rpx;
	margin-bottom: 10rpx;
}
#xinxi .xinxi3 .price1{
	padding-top: 10rpx;
	font-size: 20rpx;
}
#input_price{
}
	
	.denglu{
		width: 900rpx;
		height: 1700rpx;
		background-color: rgba(0,0,0,0.3);
		z-index: 99;
		position: absolute;
		background: url(../../static/images/beijingsvg/登录.svg);
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
</style>
