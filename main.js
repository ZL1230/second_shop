import Vue from 'vue'
import App from './App'
// import store from './store'

Vue.config.productionTip = false
App.mpType = 'app'

var socketOpen = true;
var socketMsgQueue = [{"toUserId":"55","contentText":"这是一条测试消息"}];

uni.connectSocket({
  url: 'ws://192.168.1.100:8081/imserver/11'
});

uni.onSocketOpen(function (res) {
  socketOpen = true;
 console.log('WebSocket连接已打开！',res);

});

uni.onSocketMessage(function (res) {
	
});

const app = new Vue({
    ...App
})
app.$mount()
