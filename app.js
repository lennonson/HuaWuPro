// app.js
App({
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        traceUser: true,  // 可选参数，用于记录用户访问日志
        env: 'beast-2g9rc35042cc8f7a' // 你的云开发环境ID，若不指定，默认使用第一个创建的环境
      });
    }
  },
  globalData: {
    userInfo: null
  }
})
