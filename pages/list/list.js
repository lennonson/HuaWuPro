// pages/list/list.js
const list2 = require('../../data/data_list2')
Page({
  /**
   * 页面的初始数据
   */
  data: {
    searchQuery: '',
    ans: [],
    ansHeight: 0
  },
  
  show(){
    wx.showToast({
      title:'加载中',
      icon:'loading',
      duration:'1000'
      })
  }, 
  onInput: function (e) {
    this.setData({
      searchQuery: e.detail.value
    })
  },
  onClear: function () {
    this.setData({
      ans: [],
      ansHeight: 0,
      searchQuery: ''
    })
  },
  onSearch: function () {
    const query = this.data.searchQuery;
    const dataSource = list2.data;
    if (query == '') {
      this.setData({
        ans: [],
        ansHeight: 0
      });
    } else {
      const ans = dataSource.filter(item => item.brief.includes(query));
      const height = ans.length * 40;
      this.setData({
          ans: ans,
          ansHeight: height
      });
      console.log('搜索内容：', query);
      console.log('结果个数：', ans.length);
    }
  },
  onPage:function (e) {
    const isContainerTap = e.target.dataset.container;
    console.log(isContainerTap);
    if (!isContainerTap) {
        this.setData({
            ans: [], // 清空结果
            ansHeight: 0, // 隐藏容器
            searchQuery: ''// 清空搜索内容
        });
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.show()
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
    wx.stopPullDownRefresh()
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