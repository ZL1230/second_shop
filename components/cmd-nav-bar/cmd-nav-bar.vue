<template>
  <view :class="fixed ? 'cmd-nav-bar-fixed' : ''" :style="setBackgroundColor">
 
    <view class="cmd-nav-bar">
      <view class="cmd-nav-bar-left">
        <view v-if="back && !leftTitle || iconOne && !leftTitle " @tap="$_iconOneClick" class="cmd-nav-bar-left-icon">
          <cmd-icon :type="back ?'chevron-left' : iconOne" size="24" :color="setFontColor"></cmd-icon>
        </view>

      </view>
    
  
    </view>
  </view>
</template>

<script>
  import cmdIcon from "../cmd-icon/cmd-icon.vue"


  export default {
    name: 'cmd-nav-bar',

    components: {
      cmdIcon
    },

    props: {
      /**
       * 固定到页面顶部
       */
      fixed: {
        type: Boolean,
        default: true
      },
      /**
   
       * 导航栏背景颜色
       */
      backgroundColor: {
        type: String,
        default: ''
      },
   
    
      back: {
        type: Boolean,
        default: false
      },
      /**
       * 左侧文字可同显返回按钮
       */
      leftText: {
        type: String,
        default: ''
      },
  
    },

    computed: {
   
   
      /**
       * 设置标题图标颜色
       */
      setFontColor() {
        let fontColor = '#000';
        if (this.fontColor) {
          fontColor = this.fontColor;
        }
        return fontColor;
      },
      /**
       * 设置背景颜色
       */
      // setBackgroundColor() {
      //   let backgroundColor = '#fff';
      //   if (this.backgroundColor) {
      //     backgroundColor = `background: ${this.backgroundColor};`;
      //   }
      //   return backgroundColor;
      // }
    },

    methods: {
   
      $_iconOneClick() {
        if (this.back) {
          uni.navigateBack()
        } 
      },
  
    
    }

  }
</script>

<style>
  /* 固定到页面顶部 */
  .cmd-nav-bar-fixed {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    background: #fff;
  }

  /*沉浸状态栏变化*/
  .status-bar {
    box-sizing: border-box;
    display: block;
    width: 100%;
    margin-bottom: -3upx;
    height: 8rpx;
    line-height: var(--status-bar-height);
    background: transparent;
  }

  /*导航栏默认*/
  .cmd-nav-bar {
    display: flex;
    align-items: center;
    height: 80upx;
    line-height: 92upx;
    color: #000;
    background: transparent;
    box-shadow: 0 6upx 6upx -3upx rgba(0, 0, 0, 0.2);
  }

  /*所有都垂直占比*/
  .cmd-nav-bar-left,
  .cmd-nav-bar-title,
  .cmd-nav-bar-right {
    flex: 1;
    height: 100%;
    display: flex;
    align-items: center;
  }

 
  .cmd-nav-bar-left {
    justify-content: flex-start;
    font-size: 32upx;
    padding-left: 30upx;
  }

  .cmd-nav-bar-left-icon {
    margin-right: 10upx;
    display: inherit;
  }

  .cmd-nav-bar-left-title {
    font-size: 48upx;
    font-weight: 500;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }


</style>
