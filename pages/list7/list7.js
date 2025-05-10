// pages/list7/list7.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  getData: function(options) {
    console.log("load list7");

    wx.cloud.getTempFileURL({
        fileList: [
            'cloud://test-4g75rbg39734e462.7465-test-4g75rbg39734e462-1325488146/晋剧简介视频.mp4'
        ],
        success: res => {
            this.setData({
                VideoID: res.fileList[0].tempFileURL, // 使用临时 URL 更新 VideoID
            });
        },
        fail: err => {
            console.error("获取临时URL失败", err);
        }
    });
},

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.getData(options);
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})