<template>
  <view class="content">
    <view class="header">
      <image src="../../static/shilu-login/logo.png"></image>
    </view>
    <view class="list">
      <view class="list-call">
        <image class="img" src="/static/shilu-login/1.png"></image>
        <input class="sl-input" v-model="phone" type="text" maxlength="12" placeholder="输入学号" />
      </view>
      <view class="list-call">
        <image class="img" src="/static/shilu-login/2.png"></image>
        <input class="sl-input" v-model="password" type="text" maxlength="32" placeholder="输入密码" password="true" />
      </view>
    </view>
    <view class="button-login" hover-class="button-hover" @click="bindLogin">
      <text>登录</text>
    </view>
  </view>
</template>
<script>
import request from '../../utils/request.js'
  export default {
    data() {
      return {
        phone: '',
        password: '',
		userInfo:''
      };
    },
	
    methods: {
      bindLogin() {
        if (this.phone.length !=12) {
          uni.showToast({
            icon: 'none',
            title: '学号不正确'
          });
          return;
        }
		// console.log(11111)
        if (this.password.length < 6) {
          uni.showToast({
            icon: 'none',
            title: '密码不正确'
          });
          return;
        }
        request({
          url: 'login',
          data: {
            userid: this.phone,
            loginpassword: this.password
          },
          method: 'POST',
          dataType: 'json',
		  // fail:(res)=>{
			 //  uni.showToast({
			 //  	icon:'none',
				// title:JSON.parse(res.message)
			 //  })
		  // },
          success: (res) => {
          
              // uni.showToast({
              //   title: '登陆成功',
              //   icon: 'success'
              // });
			  // console.log(res)
			  if(res.data.flag){
				  // var res=
				  // console.log(res)
				 	// console.log( res.data.data.userinfo)
				 	 uni.showToast({
				 	   title: '登陆成功',
				 	   icon: 'success'
				 	 });
					 console.log(res.data.data)
					 var s=JSON.stringify(res.data.data.userinfo)
					 getApp().globalData.userInfo=res.data.data.userinfo
					 
					 if(!window.localStorage){
					             alert("浏览器不支持localstorage");
					             return false;
					         }else{
					             var storage=window.localStorage;
					             //写入a字段
					           storage.setItem("userInfo", s);
					             //写入c字段
					             // storage.setItem("userid",storage.userid);
					 			console.log('保存成功')
					         }
					 setTimeout(()=>{
						console.log(1123132)
						 uni.switchTab({
						 	url:'../user/user'
						 })
					 },1000)
			  } else if(res.code=500) {
				  console.log(111111)
				  uni.showToast({
				  	title:'密码或者用户名错误！',
					icon:'none'
				  })
			  }
	
          }
        });

      }
    }
  }
</script>

<style>
  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .header {
    width: 161rpx;
    height: 161rpx;
    background: rgba(63, 205, 235, 1);
    box-shadow: 0rpx 12rpx 13rpx 0rpx rgba(63, 205, 235, 0.47);
    border-radius: 50%;
    margin-top: 30rpx;
    margin-left: auto;
    margin-right: auto;
  }

  .header image {
    width: 161rpx;
    height: 161rpx;
    border-radius: 50%;
  }

  .list {
    display: flex;
    flex-direction: column;
    padding-top: 50rpx;
    padding-left: 70rpx;
    padding-right: 70rpx;
  }

  .list-call {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 100rpx;
    color: #333333;
    border-bottom: 0.5px solid #e2e2e2;
  }

  .list-call .img {
    width: 40rpx;
    height: 40rpx;
  }

  .list-call .sl-input {
    flex: 1;
    text-align: left;
    font-size: 32rpx;
    margin-left: 16rpx;
  }

  .button-login {
    color: #FFFFFF;
    font-size: 34rpx;
    width: 470rpx;
    height: 100rpx;
    background: linear-gradient(-90deg, rgba(63, 205, 235, 1), rgba(188, 226, 158, 1));
    box-shadow: 0rpx 0rpx 13rpx 0rpx rgba(164, 217, 228, 0.2);
    border-radius: 50rpx;
    line-height: 100rpx;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    margin-top: 100rpx;
  }

  .button-hover {
    background: linear-gradient(-90deg, rgba(63, 205, 235, 0.8), rgba(188, 226, 158, 0.8));
  }

  .agreenment {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-size: 30rpx;
    margin-top: 80rpx;
    color: #FFA800;
    text-align: center;
    height: 40rpx;
    line-height: 40rpx;
  }

  .agreenment text {
    font-size: 24rpx;
    margin-left: 15rpx;
    margin-right: 15rpx;
  }
</style>
