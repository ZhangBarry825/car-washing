// pages/production-list/production-list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    option1: [
      { text: '全部品牌', value: 0 },
      { text: '法拉利', value: 1 },
      { text: '保时捷', value: 2 },
      { text: '布加迪', value: 3 },
      { text: '奥迪双钻', value: 3 },
    ],
    option2: [
      { text: '全部车系', value: 'a' },
      { text: '车系一', value: 'b' },
      { text: '车系二', value: 'c' },
    ],
    value1: 0,
    value2: 'a',
  },
  goTo(e){
    wx.navigateTo({
      url:e.currentTarget.dataset.path
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
