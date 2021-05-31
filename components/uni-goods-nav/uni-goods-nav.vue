<template>
	<view class="uni-goods-nav">
		
		<!-- 底部占位 -->
		<view class="uni-tab__seat" />
		<view class="uni-tab__cart-box flex">
			<view class="flex uni-tab__cart-sub-left">
				<view v-for="(item,index) in options" :key="index" class="flex uni-tab__cart-button-left uni-tab__shop-cart" @click="onClick(index,item)">
					<view class="uni-tab__icon " >
						<UniIcons :type="item.type" size="20"  :color="flag==index?'#ff0000':''"></UniIcons>
						<!-- <image class="image" :src="item.icon" mode="widthFix" /> -->
					</view>
					<text class="uni-tab__text">{{ item.text }}</text>
					
				</view>
				<view class="go" style="margin-left: 180rpx;" @click="buttonClick"><p>我想要</p></view>
				
			</view>
			<view :class="{'uni-tab__right':fill}" class="flex uni-tab__cart-sub-right ">
				<!-- <button>我想要</button> -->
				<!-- <qs-animation></qs-animation> -->
				<!-- <view class="go" @click="buttonClick(index,item)"><p>我想要</p></view> -->
				<!-- <view v-for="(item,index) in buttonGroup" :key="index" :style="{backgroundColor:item.backgroundColor,color:item.color}"
				 class="flex uni-tab__cart-button-right" @click="buttonClick(index,item)"><text :style="{color:item.color}" class="uni-tab__cart-button-right-text">{{ item.text }}</text></view> -->
			</view>
		</view>
	</view>
</template>

<script>
	import UniIcons from '../uni-icons/components/uni-icons/uni-icons.vue'
	// import QsAnimation from '../QS-Animation/QS-Animation.vue'
	/**
	 * GoodsNav 商品导航
	 * @description 商品加入购物车、立即购买等
	 * @tutorial https://ext.dcloud.net.cn/plugin?id=865
	 * @property {Array} options 组件参数
	 * @property {Array} buttonGroup 组件按钮组参数
	 * @property {Boolean} fill = [true | false] 组件按钮组参数
	 * @event {Function} click 左侧点击事件
	 * @event {Function} buttonClick 右侧按钮组点击事件
	 * @example <uni-goods-nav :fill="true"  options="" buttonGroup="buttonGroup"  @click="" @buttonClick="" />
	 */
	export default {
		name: 'UniGoodsNav',
		data() {
		  return {
		   flag:99
		  };
		},
		components:{
			UniIcons,
			// QsAnimation
		},
		
		props: {
			options: {
				type: Array,
				default () {
					return [{
						type: 'hand-thumbsup',
						text: '超赞',
						// infoBackgroundColor:'#ff0000'
					}, 
					
					{
						type: 'star',
						text: '收藏',
						infoBackgroundColor:'#ff0000'
					},
					]
				}
			},
			buttonGroup: {
				type: Array,
				default () {
					return [
						// {
						// 	text: '加入购物车',
						// 	backgroundColor: '#ffa200',
						// 	color: '#fff'
						// },
						{
							text: '我想要',
							// backgroundColor: '#ff0000',
							color: '#fff'
						}
					]
				}
			},
			fill: {
				type: Boolean,
				default: false
			}
		},
		// created() {
		// 	uni.$on('send',()=>{
				
		// 	})
		// },
		methods: {
			
			onClick(index, item) {
				console.log(this.flag,222222)
				if(index==1){
					this.flag=index
					
					// console.log('dad')
				}
				console.log(this.currentindex)
				console.log(typeof index,index)
				this.$emit('click', 
					index
					// content: item,

				)
			},
			buttonClick(index, item) {
				if (uni.report) {
					uni.report(item.text, item.text)
				}
				this.$emit('buttonClick', {
					index,
					content: item
				})
			}
		}
	}
</script>

<style lang="scss" scoped>

	.flex {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
	}

	.uni-goods-nav {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex: 1;
		flex-direction: row;
	}

	.uni-tab__cart-box {
		// position: fixed;
		// bottom: 0px;
		// left: 0px;
		flex: 1;
		height: 50px;
		background-color: #fff;
		z-index: 900;
	}

	.uni-tab__cart-sub-left {
		padding: 0 5px;
		position: relative;
	}

	.uni-tab__cart-sub-right {
		// position: fixed;
		// bottom: 0px;
		// left: 0px;
		flex: 1;
		position: relative;
	}

	.uni-tab__right {
		margin: 5px 0;
		margin-right: 10px;
		border-radius: 100px;
		overflow: hidden;
	}

	.uni-tab__cart-button-left {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		// flex: 1;
		position: relative;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		margin: 0 10px;
		/* #ifdef H5 */
		cursor: pointer;
		/* #endif */
	}

	.uni-tab__icon {
		width: 18px;
		height: 18px;
	}

	.image {
		width: 18px;
		height: 18px;
	}

	.uni-tab__text {
		margin-top: 3px;
		font-size: $uni-font-size-sm;
		color: #646566;
	}

	.uni-tab__cart-button-right {
		/* #ifndef APP-NVUE */
		display: flex;
	
		flex-direction: column;
		/* #endif */
		flex: 1;
		justify-content: center;
		align-items: center;
		/* #ifdef H5 */
		cursor: pointer;
		/* #endif */
		text-align: center;
		line-height: 18px;
	}

	.uni-tab__cart-button-right-text {
		font-size: $uni-font-size-base;
		color: #fff;
	}

	.uni-tab__cart-button-right:active {
		opacity: 0.7;
	}

	.uni-tab__dot-box {
		/* #ifndef APP-NVUE */
		display: flex;
		flex-direction: column;
		/* #endif */
		position: absolute;
		right: -2px;
		top: 2px;
		justify-content: center;
		align-items: center;
		// width: 0;
		// height: 0;
	}

	.uni-tab__dot {
		// width: 30rpx;
		// height: 30rpx;
		padding: 0 4px;
		line-height: 15px;
		color: #ffffff;
		text-align: center;
		font-size: 12px;
		background-color: #ff0000;
		border-radius: 15px;
	}

	.uni-tab__dots {
		padding: 0 4px;
		// width: auto;
		border-radius: 15px;
	}

	.uni-tab__color-y {
		background-color: #ffa200;
	}

	.uni-tab__color-r {
		background-color: #ff0000;
	}
	.go{
		position: absolute;
		top: 8px;
		left: 80px;
		padding:3px 5px;
		width: 110px;
		border: 1px solid  	#FF8C00;
		text-align: center;
		border-radius: 15px;
		box-shadow: 1px 1px 1px 1px rgba(0,0,0,.5);
		background: #FFA500;
		p{
			font-size: 15px;
			text-shadow: 1px 1px 1px 1px rgba(0, 0, 0, .5);
			
			color: #fff;
		}
	}
</style>
