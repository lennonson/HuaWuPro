// pages/contents/content.js
const content = require('../../data/data_content');
Page({
  data: {
    tempFileURLs: [],  // 用来存储临时URL
    titles: [],
    feedIndex: 0,
    briefs: [],
    subTitle: []
  },

  getData: function(options){
    console.log("load Content");

    wx.cloud.getTempFileURL({
      fileList: [],
      success: res => {
        this.setData({
          tempFileURLs: content.data.map(item => item.fileID),
          titles: content.data.map(item => item.title),
          briefs: content.data.map(item => item.brief),
          subTitle: content.data.map(item => item.subTitle),
          feedIndex: options.feedIndex
        });
      },
      fail: err => {
        console.error("获取临时URL失败", err);
      }
    });
  },

  onLoad(options) {
    this.getData(options);
    console.log('加载了content');
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