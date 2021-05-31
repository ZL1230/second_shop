<template>
	<view  class="goods-item">
	      <image :src="showImage" alt=""  @click="itemClick" mode="aspectFit	" style="width: 90%;height: 400rpx;border-radius: 20rpx;">
	      <div class="goods-info">
			  <!-- <p>{{goodsitem.pid}}</p> -->
	      <p style="font-size: 28rpx;">{{goodsitem.describe}}</p>
	      <span class="price" style="color: red;font-size: 30rpx;font-weight: 600;">￥{{goodsitem.price}}</span>
	      <span class="collect">热度：{{goodsitem.collection*10}}</span>
	      </div>
	  </view>
</template>

<script>
	export default{
		data(){
			return {
				
			}
		},
		props:{
			goodsitem:{
				
			}
		},
		methods:{
			itemClick(){
				// console.log(111)
				// uni.$emit('sendpid',this.goodsitem.pid)
				uni.navigateTo({
					// url:'../../pages/detail/detail?pid='+this.goodsitem.pid
					url:'../../pages/detail/detail?pid='+this.goodsitem.pid
				})
				console.log(this.goodsitem.pid)
			}
		},
		computed:{
			showImage(){
				return this.goodsitem.imagsrc
			},
			// math(){
			// 	return String(this.goodsitem.pid)
			// }
		}
	}
</script>

<style>
	.goods-item {
	    padding-bottom: 40px;
		margin-left: 10rpx;
	    position: relative;
	    width: 48%;
	  }
	
	  .goods img {
	    width: 100%;
		height: 200px;
	    border-radius: 20px;
	  }
	
	  .goods-info {
	    font-size: 12px;
	    position: absolute;
	    bottom: 5px;
	    left: 0;
	    right: 0;
	    overflow: hidden;
	    text-align: center;
	  }
	
	  .goods-info p {
	    overflow: hidden;
	    text-overflow: ellipsis;
	    white-space: nowrap;
	
	  }
	
	  .goods-info .price {
	    color: var(--color-high-text);
	    margin-right: 20px;
	  }
	
	  .goods-info .collect {
	    position: relative;
	  }
	
	  .goods-info .collect::before {
	    content: '';
	    position: absolute;
	    left: -15px;
	    top: 0;
	    width: 14px;
	    height: 14px;
	    /* background: url("~assets/img/common/collect.svg") 0 0/14px 14px; */
	  }

</style>
