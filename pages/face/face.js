// pages/face/face.js
const {element, choice} = require('../../data/data_face');
Page({
  data: {
    feed: [],
    choice: [],
    current: [],
    index: 0,
  },


  getData: function(){
    console.log("load face");
    this.setData({
      feed: element.data[0].source,
      choice: choice.id
    });
  },

  select: function (e) {
    const index = e.currentTarget.dataset.index; 
    this.setData({
      [`current[${this.data.index}]`]: this.data.feed[index].src ,
    });
  },
  choose: function (e) {
    const index = e.currentTarget.dataset.index;
    this.setData({
      feed: element.data[index].source,
      index: index
    })
  },
  selectNone: function(e) {
    this.setData({
      [`current[${this.data.index}]`]: ''
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    var that = this
    this.getData();
    console.log('加载了face')
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