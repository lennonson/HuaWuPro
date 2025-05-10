// pages/QA/QA.js
const QA = require('../../data/data_QA');
Page({
  /**
   * 页面的初始数据
   */
  data: {
    index: 0,
    feed: {},
    analysis: '',
    optionClasses: ['options', 'options', 'options', 'options'], // 每个选项的样式
    height: 17
  },
  getData: function(e) {
    this.setData({
      feed: QA.data[0]
    })
  },
  getOptionClass: function(index) {
    if (index === this.data.feed.rightOption) {
      return 'correct'; // 选择正确
    }else return 'incorrect'
  },

  // 处理选项点击
  chooseQA: function(e) {
    const index = e.currentTarget.dataset.index;

    // 更新选中状态
    this.setData({
      optionClasses: [
        this.getOptionClass(1),
        this.getOptionClass(2),
        this.getOptionClass(3),
        this.getOptionClass(4),
      ],
      analysis: this.data.feed.analysis,
      height: 50
    });
  },
  preQuestion: function (e) {
    const index = this.data.index
    if (index) {
      this.setData({
        index: index - 1,
        feed: QA.data[index-1],
        analysis: '',
        height: 16.5,
        optionClasses: []
      })
    }
  },
  nextQuestion: function (e) {
    const index = this.data.index
    if (index < QA.data.length) {
      this.setData({
        index: index + 1,
        feed: QA.data[index+1],
        analysis: '',
        height: 16.5,
        optionClasses: []
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
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