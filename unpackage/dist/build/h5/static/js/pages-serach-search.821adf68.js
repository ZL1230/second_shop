(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-serach-search"],{"060e":function(A,t,e){"use strict";e.r(t);var i=e("ee4e"),n=e("897e");for(var o in n)"default"!==o&&function(A){e.d(t,A,(function(){return n[A]}))}(o);e("93ce");var a,s=e("f0c5"),r=Object(s["a"])(n["default"],i["b"],i["c"],!1,null,"10d386f7",null,!1,i["a"],a);t["default"]=r.exports},"169b":function(A,t,e){"use strict";var i;e.d(t,"b",(function(){return n})),e.d(t,"c",(function(){return o})),e.d(t,"a",(function(){return i}));var n=function(){var A=this,t=A.$createElement,e=A._self._c||t;return e("v-uni-view",{staticClass:"serach"},[e("v-uni-view",{staticClass:"content",style:{"border-radius":A.radius+"px"}},[e("v-uni-view",{staticClass:"content-box",class:{center:2===A.mode}},[e("v-uni-text",{staticClass:"icon icon-serach"}),e("v-uni-input",{staticClass:"input",class:{center:!A.active&&2===A.mode},attrs:{placeholder:A.placeholder,"confirm-type":"search",focus:A.isFocus},on:{input:function(t){arguments[0]=t=A.$handleEvent(t),A.inputChange.apply(void 0,arguments)},confirm:function(t){arguments[0]=t=A.$handleEvent(t),A.triggerConfirm.apply(void 0,arguments)},focus:function(t){arguments[0]=t=A.$handleEvent(t),A.focus.apply(void 0,arguments)},blur:function(t){arguments[0]=t=A.$handleEvent(t),A.blur.apply(void 0,arguments)}},model:{value:A.inputVal,callback:function(t){A.inputVal=t},expression:"inputVal"}}),A.isDelShow?e("v-uni-text",{staticClass:"icon icon-del",on:{click:function(t){t.stopPropagation(),arguments[0]=t=A.$handleEvent(t),A.clear.apply(void 0,arguments)}}}):A._e()],1),e("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:A.active&&A.show&&"inside"===A.button||A.isDelShow&&"inside"===A.button,expression:"(active&&show&&button === 'inside')||(isDelShow && button === 'inside')"}],staticClass:"serachBtn",on:{click:function(t){arguments[0]=t=A.$handleEvent(t),A.search.apply(void 0,arguments)}}},[A._v("搜索")])],1),"outside"===A.button?e("v-uni-view",{staticClass:"button",class:{active:A.show||A.active},on:{click:function(t){arguments[0]=t=A.$handleEvent(t),A.search.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"button-item"},[A._v(A._s(A.show?"搜索":A.searchName))])],1):A._e()],1)},o=[]},"18e8":function(A,t,e){var i=e("d919");"string"===typeof i&&(i=[[A.i,i,""]]),i.locals&&(A.exports=i.locals);var n=e("4f06").default;n("baa3c874",i,!0,{sourceMap:!1,shadowMode:!1})},"4c82":function(A,t,e){"use strict";(function(A){var i=e("4ea4");e("c975"),e("a434"),e("ac1f"),e("5319"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(e("c81a")),o=i(e("060e")),a=i(e("94bc")),s={data:function(){return{flag:!1,defaultKeyword:"",keyword:"",oldKeywordList:[],hotKeywordList:[],keywordList:[],forbid:"",isShowKeywordList:!1,goodlist:[],title:""}},onLoad:function(){this.init()},components:{mSearch:n.default,GoodList:o.default},methods:{init:function(){this.loadDefaultKeyword(),this.loadOldKeyword(),this.loadHotKeyword()},blur:function(){uni.hideKeyboard()},loadDefaultKeyword:function(){this.defaultKeyword="搜索商品"},loadOldKeyword:function(){var A=this;uni.getStorage({key:"OldKeys",success:function(t){var e=JSON.parse(t.data);A.oldKeywordList=e}})},loadHotKeyword:function(){this.hotKeywordList=["鞋子","鼠标","显示器","电脑主机","键盘","笔记本电脑","鼠标","床桌","上衣"]},drawCorrelativeKeyword:function(A,t){for(var e=A.length,i=[],n=0;n<e;n++){var o=A[n],a=o[0].replace(t,"<span style='color: #9f9f9f;'>"+t+"</span>");a="<div>"+a+"</div>";var s={keyword:o[0],htmlStr:a};i.push(s)}return i},setKeyword:function(A){this.keyword=this.keywordList[A].keyword},oldDelete:function(){var t=this;uni.showModal({content:"确定清除历史搜索记录？",success:function(e){e.confirm?(A("log","用户点击确定"," at pages/serach/search.vue:156"),t.oldKeywordList=[],uni.removeStorage({key:"OldKeys"})):e.cancel&&A("log","用户点击取消"," at pages/serach/search.vue:162")}})},hotToggle:function(){this.forbid=this.forbid?"":"_forbid"},doSearch:function(t){var e=this;t=!1===t?this.keyword:t,this.keyword=t,this.saveKeyword(t),(0,a.default)({url:"product/search?describe="+this.keyword,method:"POST",success:function(t){A("log",t," at pages/serach/search.vue:184"),e.goodlist=t.data.data,e.flag=!0}}),this.forbid=""},saveKeyword:function(A){var t=this;uni.getStorage({key:"OldKeys",success:function(e){var i=JSON.parse(e.data),n=i.indexOf(A);-1==n||i.splice(n,1),i.unshift(A),i.length>5&&i.pop(),uni.setStorage({key:"OldKeys",data:JSON.stringify(i)}),t.oldKeywordList=i},fail:function(e){var i=[A];uni.setStorage({key:"OldKeys",data:JSON.stringify(i)}),t.oldKeywordList=i}})}}};t.default=s}).call(this,e("0de9")["log"])},"5cf9":function(A,t,e){"use strict";(function(A){e("a9e3"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i={props:{mode:{value:Number,default:1},placeholder:{value:String,default:"请输入搜索内容"},value:{type:String,default:!1},button:{value:String,default:"outside"},show:{value:Boolean,default:!0},radius:{value:String,default:60}},data:function(){return{active:!1,inputVal:"",searchName:"取消",isDelShow:!1,isFocus:!0}},methods:{triggerConfirm:function(){this.$emit("confirm",!1)},inputChange:function(A){var t=A.detail.value;this.$emit("input",t),this.inputVal&&(this.isDelShow=!0)},focus:function(){this.active=!0,this.inputVal&&(this.isDelShow=!0)},blur:function(){A("log","blur"," at components/mehaotian-search-revision/mehaotian-search-revision.vue:82"),this.isFocus=!1,this.inputVal||(this.active=!1)},clear:function(){uni.hideKeyboard(),this.isFocus=!1,this.inputVal="",this.active=!1,this.$emit("input","")},getFocus:function(){this.isFocus||(this.isFocus=!0)},search:function(){if(!this.inputVal&&!this.show&&"取消"==this.searchName)return uni.hideKeyboard(),this.isFocus=!1,void(this.active=!1);A("log",this.inputVal," at components/mehaotian-search-revision/mehaotian-search-revision.vue:115"),this.$emit("search",this.inputVal?this.inputVal:this.placeholder)}},watch:{inputVal:function(A){A?this.searchName="搜索":(this.searchName="取消",this.isDelShow=!1)},value:function(A){this.inputVal=A}}};t.default=i}).call(this,e("0de9")["log"])},"60aa":function(A,t,e){"use strict";var i=e("867d"),n=e.n(i);n.a},"6a4c":function(A,t,e){"use strict";var i=e("ebf0"),n=e.n(i);n.a},"753b":function(A,t,e){"use strict";e.r(t);var i=e("f04e"),n=e("963e");for(var o in n)"default"!==o&&function(A){e.d(t,A,(function(){return n[A]}))}(o);e("60aa");var a,s=e("f0c5"),r=Object(s["a"])(n["default"],i["b"],i["c"],!1,null,"1008d922",null,!1,i["a"],a);t["default"]=r.exports},"867d":function(A,t,e){var i=e("b8ca");"string"===typeof i&&(i=[[A.i,i,""]]),i.locals&&(A.exports=i.locals);var n=e("4f06").default;n("3ff44d04",i,!0,{sourceMap:!1,shadowMode:!1})},"897e":function(A,t,e){"use strict";e.r(t);var i=e("f36c"),n=e.n(i);for(var o in i)"default"!==o&&function(A){e.d(t,A,(function(){return i[A]}))}(o);t["default"]=n.a},"8d1b":function(A,t,e){"use strict";e.r(t);var i=e("4c82"),n=e.n(i);for(var o in i)"default"!==o&&function(A){e.d(t,A,(function(){return i[A]}))}(o);t["default"]=n.a},"93ce":function(A,t,e){"use strict";var i=e("9c42"),n=e.n(i);n.a},"94bc":function(A,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i="http://112.126.59.215:8085/",n=function(A){return A.url=i+A.url,uni.request(A)},o=n;t.default=o},"963e":function(A,t,e){"use strict";e.r(t);var i=e("bf64"),n=e.n(i);for(var o in i)"default"!==o&&function(A){e.d(t,A,(function(){return i[A]}))}(o);t["default"]=n.a},"9c42":function(A,t,e){var i=e("d45c");"string"===typeof i&&(i=[[A.i,i,""]]),i.locals&&(A.exports=i.locals);var n=e("4f06").default;n("39a5968a",i,!0,{sourceMap:!1,shadowMode:!1})},a342:function(A,t,e){"use strict";e.r(t);var i=e("5cf9"),n=e.n(i);for(var o in i)"default"!==o&&function(A){e.d(t,A,(function(){return i[A]}))}(o);t["default"]=n.a},b8ca:function(A,t,e){var i=e("24fb");t=i(!1),t.push([A.i,'.goods-item[data-v-1008d922]{padding-bottom:40px;margin-left:%?10?%;position:relative;width:48%}.goods img[data-v-1008d922]{width:100%;border-radius:20px}.goods-info[data-v-1008d922]{font-size:12px;position:absolute;bottom:5px;left:0;right:0;overflow:hidden;text-align:center}.goods-info p[data-v-1008d922]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.goods-info .price[data-v-1008d922]{color:var(--color-high-text);margin-right:20px}.goods-info .collect[data-v-1008d922]{position:relative}.goods-info .collect[data-v-1008d922]::before{content:"";position:absolute;left:-15px;top:0;width:14px;height:14px\n    /* background: url("~assets/img/common/collect.svg") 0 0/14px 14px; */}',""]),A.exports=t},bf64:function(A,t,e){"use strict";(function(A){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e={data:function(){return{}},props:{goodsitem:{}},methods:{itemClick:function(){uni.navigateTo({url:"../../pages/detail/detail?pid="+this.goodsitem.pid}),A("log",this.goodsitem.pid," at components/good-list/GoodsListItem.vue:33")}},computed:{showImage:function(){return this.goodsitem.imagsrc}}};t.default=e}).call(this,e("0de9")["log"])},c81a:function(A,t,e){"use strict";e.r(t);var i=e("169b"),n=e("a342");for(var o in n)"default"!==o&&function(A){e.d(t,A,(function(){return n[A]}))}(o);e("6a4c");var a,s=e("f0c5"),r=Object(s["a"])(n["default"],i["b"],i["c"],!1,null,"b517e820",null,!1,i["a"],a);t["default"]=r.exports},c9a8:function(A,t,e){var i=e("24fb");t=i(!1),t.push([A.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.serach[data-v-b517e820]{display:-webkit-box;display:-webkit-flex;display:flex;width:100%;box-sizing:border-box;font-size:%?28?%}.serach .content[data-v-b517e820]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;width:100%;height:%?60?%;background:#fff;overflow:hidden;-webkit-transition:all .2s linear;transition:all .2s linear;border-radius:30px}.serach .content .content-box[data-v-b517e820]{width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.serach .content .content-box.center[data-v-b517e820]{-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.serach .content .content-box .icon[data-v-b517e820]{padding:0 %?15?%}.serach .content .content-box .icon.icon-del[data-v-b517e820]{font-size:%?38?%}.serach .content .content-box .icon.icon-del[data-v-b517e820]:before{content:"\\e644"}.serach .content .content-box .icon.icon-serach[data-v-b517e820]:before{content:"\\e61c"}.serach .content .content-box .input[data-v-b517e820]{width:100%;max-width:100%;line-height:%?60?%;height:%?60?%;-webkit-transition:all .2s linear;transition:all .2s linear}.serach .content .content-box .input.center[data-v-b517e820]{width:%?200?%}.serach .content .content-box .input.sub[data-v-b517e820]{width:auto;color:grey}.serach .content .serachBtn[data-v-b517e820]{height:100%;-webkit-flex-shrink:0;flex-shrink:0;padding:0 %?30?%;background:-webkit-linear-gradient(left,#5ff,#11b8f6);background:linear-gradient(90deg,#5ff,#11b8f6);line-height:%?60?%;color:#fff;-webkit-transition:all .3s;transition:all .3s}.serach .button[data-v-b517e820]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;position:relative;-webkit-flex-shrink:0;flex-shrink:0;width:0;-webkit-transition:all .2s linear;transition:all .2s linear;white-space:nowrap;overflow:hidden}.serach .button.active[data-v-b517e820]{padding-left:%?15?%;width:%?100?%}@font-face{font-family:iconfont;src:url("data:application/x-font-woff;charset=utf-8;base64,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")}.icon[data-v-b517e820]{font-family:iconfont;font-size:%?32?%;font-style:normal;color:#999}',""]),A.exports=t},cb68:function(A,t,e){"use strict";var i=e("18e8"),n=e.n(i);n.a},d45c:function(A,t,e){var i=e("24fb");t=i(!1),t.push([A.i,".goods[data-v-10d386f7]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}",""]),A.exports=t},d919:function(A,t,e){var i=e("24fb");t=i(!1),t.push([A.i,"uni-view[data-v-5ff9ff33]{display:block}.search-box[data-v-5ff9ff33]{width:95%;background-color:#f2f2f2;padding:%?15?% 2.5%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;position:-webkit-sticky;position:sticky;top:0}.search-box .mSearch-input-box[data-v-5ff9ff33]{width:100%}.search-box .input-box[data-v-5ff9ff33]{width:85%;-webkit-flex-shrink:1;flex-shrink:1;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.search-box .search-btn[data-v-5ff9ff33]{width:15%;margin:0 0 0 2%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-flex-shrink:0;flex-shrink:0;font-size:%?28?%;color:#fff;background:-webkit-linear-gradient(left,#ff9801,#ff570a);background:linear-gradient(90deg,#ff9801,#ff570a);border-radius:%?60?%}.search-box .input-box>uni-input[data-v-5ff9ff33]{width:100%;height:%?60?%;font-size:%?32?%;border:0;border-radius:%?60?%;-webkit-appearance:none;-moz-appearance:none;appearance:none;padding:0 3%;margin:0;background-color:#fff}.placeholder-class[data-v-5ff9ff33]{color:#9e9e9e}.search-keyword[data-v-5ff9ff33]{width:100%;background-color:#f2f2f2}.keyword-list-box[data-v-5ff9ff33]{height:calc(100vh - %?110?%);padding-top:%?10?%;border-radius:%?20?% %?20?% 0 0;background-color:#fff}.keyword-entry-tap[data-v-5ff9ff33]{background-color:#eee}.keyword-entry[data-v-5ff9ff33]{width:94%;height:%?80?%;margin:0 3%;font-size:%?30?%;color:#333;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center;border-bottom:solid %?1?% #e7e7e7}.keyword-entry uni-image[data-v-5ff9ff33]{width:%?60?%;height:%?60?%}.keyword-entry .keyword-text[data-v-5ff9ff33],\n.keyword-entry .keyword-img[data-v-5ff9ff33]{height:%?80?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.keyword-entry .keyword-text[data-v-5ff9ff33]{width:90%}.keyword-entry .keyword-img[data-v-5ff9ff33]{width:10%;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.keyword-box[data-v-5ff9ff33]{height:calc(100vh - %?110?%);border-radius:%?20?% %?20?% 0 0;background-color:#fff}.keyword-box .keyword-block[data-v-5ff9ff33]{padding:%?10?% 0}.keyword-box .keyword-block .keyword-list-header[data-v-5ff9ff33]{width:94%;padding:%?10?% 3%;font-size:%?27?%;color:#333;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.keyword-box .keyword-block .keyword-list-header uni-image[data-v-5ff9ff33]{width:%?40?%;height:%?40?%}.keyword-box .keyword-block .keyword[data-v-5ff9ff33]{width:94%;padding:3px 3%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-flow:wrap;flex-flow:wrap;-webkit-box-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start}.keyword-box .keyword-block .hide-hot-tis[data-v-5ff9ff33]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;font-size:%?28?%;color:#6b6b6b}.keyword-box .keyword-block .keyword>uni-view[data-v-5ff9ff33]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;border-radius:%?60?%;padding:0 %?20?%;margin:%?10?% %?20?% %?10?% 0;height:%?60?%;font-size:%?28?%;background-color:#f2f2f2;color:#6b6b6b}.goodlist .good[data-v-5ff9ff33]{margin-top:%?20?%;background-color:#0ff;height:%?350?%;width:46vw;display:inline-block;margin:2vw}",""]),A.exports=t},df28:function(A,t,e){"use strict";var i;e.d(t,"b",(function(){return n})),e.d(t,"c",(function(){return o})),e.d(t,"a",(function(){return i}));var n=function(){var A=this,t=A.$createElement,e=A._self._c||t;return e("v-uni-view",{staticClass:"content"},[e("v-uni-view",{staticClass:"search-box"},[e("mSearch",{staticClass:"mSearch-input-box",attrs:{mode:2,button:"inside",placeholder:A.defaultKeyword},on:{search:function(t){arguments[0]=t=A.$handleEvent(t),A.doSearch(!1)},confirm:function(t){arguments[0]=t=A.$handleEvent(t),A.doSearch(!1)}},model:{value:A.keyword,callback:function(t){A.keyword=t},expression:"keyword"}})],1),e("v-uni-view",{staticClass:"search-keyword"},[e("v-uni-scroll-view",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"keyword-list-box",attrs:{"scroll-y":!0}},[A._l(A.keywordList,(function(t,i){return[e("v-uni-view",{key:i+"_0",staticClass:"keyword-entry",attrs:{"hover-class":"keyword-entry-tap"}},[e("v-uni-view",{staticClass:"keyword-text",on:{click:function(t){t.stopPropagation(),arguments[0]=t=A.$handleEvent(t),A.doSearch(A.keywordList[i].keyword)}}},[e("v-uni-rich-text",{attrs:{nodes:t.htmlStr}})],1),e("v-uni-view",{staticClass:"keyword-img",on:{click:function(t){t.stopPropagation(),arguments[0]=t=A.$handleEvent(t),A.setKeyword(A.keywordList[i].keyword)}}},[e("v-uni-image",{attrs:{src:"/static/HM-search/back.png"}})],1)],1)]}))],2),e("v-uni-scroll-view",{directives:[{name:"show",rawName:"v-show",value:!A.isShowKeywordList,expression:"!isShowKeywordList"}],staticClass:"keyword-box",attrs:{"scroll-y":!0}},[A.oldKeywordList.length>0?e("v-uni-view",{staticClass:"keyword-block"},[e("v-uni-view",{staticClass:"keyword-list-header"},[e("v-uni-view",[A._v("历史搜索")]),e("v-uni-view",[e("v-uni-image",{attrs:{src:"/static/HM-search/delete.png"},on:{click:function(t){arguments[0]=t=A.$handleEvent(t),A.oldDelete.apply(void 0,arguments)}}})],1)],1),e("v-uni-view",{staticClass:"keyword"},A._l(A.oldKeywordList,(function(t,i){return e("v-uni-view",{key:i,on:{click:function(e){arguments[0]=e=A.$handleEvent(e),A.doSearch(t)}}},[A._v(A._s(t))])})),1)],1):A._e(),e("v-uni-view",{staticClass:"keyword-block"},[e("v-uni-view",{staticClass:"keyword-list-header"},[e("v-uni-view",[A._v("热门搜索")]),e("v-uni-view",[e("v-uni-image",{attrs:{src:"/static/HM-search/attention"+A.forbid+".png"},on:{click:function(t){arguments[0]=t=A.$handleEvent(t),A.hotToggle.apply(void 0,arguments)}}})],1)],1),""==A.forbid?e("v-uni-view",{staticClass:"keyword"},A._l(A.hotKeywordList,(function(t,i){return e("v-uni-view",{key:i,on:{click:function(e){arguments[0]=e=A.$handleEvent(e),A.doSearch(t)}}},[A._v(A._s(t))])})),1):e("v-uni-view",{staticClass:"hide-hot-tis"},[e("v-uni-view",[A._v("当前搜热门搜索已隐藏")])],1)],1),e("v-uni-view",{staticClass:"good_content"},[e("v-uni-view",{},[A._v("搜索结果")]),[A.flag?e("v-uni-view",[e("good-list",{attrs:{goods:A.goodlist}})],1):e("v-uni-view",[e("p",{staticStyle:{color:"red"}},[A._v("请搜索物品....")])])]],2)],1)],1)],1)},o=[]},ebf0:function(A,t,e){var i=e("c9a8");"string"===typeof i&&(i=[[A.i,i,""]]),i.locals&&(A.exports=i.locals);var n=e("4f06").default;n("b08e8252",i,!0,{sourceMap:!1,shadowMode:!1})},ee4e:function(A,t,e){"use strict";var i;e.d(t,"b",(function(){return n})),e.d(t,"c",(function(){return o})),e.d(t,"a",(function(){return i}));var n=function(){var A=this,t=A.$createElement,e=A._self._c||t;return e("v-uni-view",{staticClass:"goods"},A._l(A.goods,(function(A,t){return e("goods-list-item",{key:t,attrs:{goodsitem:A}})})),1)},o=[]},f04e:function(A,t,e){"use strict";var i;e.d(t,"b",(function(){return n})),e.d(t,"c",(function(){return o})),e.d(t,"a",(function(){return i}));var n=function(){var A=this,t=A.$createElement,e=A._self._c||t;return e("v-uni-view",{staticClass:"goods-item"},[e("v-uni-image",{staticStyle:{width:"90%",height:"400rpx","border-radius":"20rpx"},attrs:{src:A.showImage,alt:"",mode:"aspectFit\t"},on:{click:function(t){arguments[0]=t=A.$handleEvent(t),A.itemClick.apply(void 0,arguments)}}}),e("div",{staticClass:"goods-info"},[e("p",{staticStyle:{"font-size":"28rpx"}},[A._v(A._s(A.goodsitem.describe))]),e("span",{staticClass:"price",staticStyle:{color:"red","font-size":"30rpx","font-weight":"600"}},[A._v("￥"+A._s(A.goodsitem.price))]),e("span",{staticClass:"collect"},[A._v("热度："+A._s(10*A.goodsitem.collection))])])],1)},o=[]},f36c:function(A,t,e){"use strict";var i=e("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(e("753b")),o={data:function(){},components:{GoodsListItem:n.default},props:{goods:[]}};t.default=o},fc31:function(A,t,e){"use strict";e.r(t);var i=e("df28"),n=e("8d1b");for(var o in n)"default"!==o&&function(A){e.d(t,A,(function(){return n[A]}))}(o);e("cb68");var a,s=e("f0c5"),r=Object(s["a"])(n["default"],i["b"],i["c"],!1,null,"5ff9ff33",null,!1,i["a"],a);t["default"]=r.exports}}]);