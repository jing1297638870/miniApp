//app.js
import util from './utils/util.js' 
App({
  onLaunch: function () {
    // wx.showShareMenu({
    //   withShareTicket: true
    // }) 
    //this.share();    
  },
  public: {
    userInfo:null, //获取到的用户信息
    loginInfo:null, //登录信息
    buyList:[] //购买列表
  },
  share: function () {
    //监听路由切换
    //间接实现全局设置分享内容
    var that = this;
    wx.onAppRoute(function (res) {
      //获取加载的页面
      let pages = getCurrentPages(),
        //获取当前页面的对象     
        view = pages[pages.length - 1],
        data;
      if (view) {
        data = view.data;
        if (!data.isOverShare) {
          data.isOverShare = true;
          view.onShareAppMessage = function () {
            //分享配置
            return {
              // title: '99元会员卡免费申领，快来吧',
              // imageUrl: 'https://7ncdn.tgk12.com/shareLogo.png',
              // path: '/pages/index/index' // 路径，传递参数到指定页面。
            };
          }
        }
      }
    })
  }
})