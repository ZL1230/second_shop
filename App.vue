<script>
	export default {
	
		globalData:{
			userInfo:{
			},
			// userInfo:{
			// 	name:'jqh'
			// },

		},
		onLaunch: function() {
			// setTimeout(()=>{
			// 	if(!window.localStorage){
			// 	            alert("浏览器不支持localstorage");
			// 	            return false;
			// 	        }else{
			// 	            var storage=window.localStorage;
			// 	            //写入a字段
			// 				getApp().globalData.userInfo= JSON.parse(storage.userInfo) 
			// 	            //写入c字段
			// 				console.log('拿到测试')
			// 				console.log(getApp().globalData.userInfo)
			// 	        }
			// },500)
				// if(!window.localStorage){
				//             alert("浏览器不支持localstorage");
				//             return false;
				//         }else{
				//             var storage=window.localStorage;
				//             //写入a字段
				// 			getApp().globalData.userInfo= JSON.parse(storage.userdata) 
				//             //写入c字段
				// 			console.log('拿到测试')
				// 			console.log(getApp().globalData.userInfo)
				//         }
		},
		onShow: function() {
			// setTimeout(()=>{
				if(!window.localStorage){
				            alert("浏览器不支持localstorage");
				            return false;
				        }else{
				            var storage=window.localStorage;
				            //写入a字段
							getApp().globalData.userInfo= JSON.parse(storage.userInfo) 
				            //写入c字段
							console.log('拿到测试')
							console.log(getApp().globalData.userInfo)
				        }
			// },500)
		},
		// onHide: function() {
		// 	if(!window.localStorage){
		// 	            alert("浏览器不支持localstorage");
		// 	            return false;
		// 	        }else{
		// 	            var storage=window.localStorage;
		// 	            //写入a字段
		// 	            storage.userInfo = JSON.stringify(getApp().globalData.userInfo);
		// 	            //写入c字段
		// 	            storage.setItem("userdata",storage.userInfo);
		// 				console.log('保存成功')
		// 	        }
		// },
		
		methods:{
	
				}
	}
</script>

<style>
	/*每个页面公共css */
	@import "/common/css/iconfont.css";
</style>