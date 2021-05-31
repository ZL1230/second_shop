var baseUrl = "http://112.126.59.215:8085/"
// var baseUrl = "http://192.168.1.105:8085/"
const request = function(options) {
     options.url = baseUrl + options.url;
    //  try {
    //    // 获取放入缓存的字段token
    //    const token = uni.getStorageSync('token');
    //    if (token) { // 如果存在token 配置请求头
    //      options.header = {
    //        'Authorization' : 'Bearer ' + token,
		  //  'Content-Type' : 'application/json'
    //      };
    //     }else{	// 不存在token 跳转至登录
    //         uni.navigateTo({
    //             url: '/pages/login/login' 
    //         });
    //         return;
    //     }.

    //  } catch (err) {
    //   console.log(err)
    // }
    // 这里对response进行处理，
    // 401表示登录状态过期，需重新登录
	// options.complete = (response) => {
	// 	if (response.statusCode == 401) {
	// 		uni.navigateTo({
	// 		   url: '/pages/login/login' 
	// 		});
	// 		return;
	// 	}
	// }
    return uni.request(options);
  }
export default request;