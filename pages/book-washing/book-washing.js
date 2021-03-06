// pages/book-washing/book-washing.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showTimer:false,
    currentDate: new Date().getTime(),
    minDate: new Date().getTime(),
    formatter(type, value) {
      if (type === 'year') {
        return `${value}年`;
      } else if (type === 'month') {
        return `${value}月`;
      }
      return value;
    },
    dateIndex:1,
    timeIndex:1
  },
  chooseDate(e){
    this.setData({
      dateIndex:e.currentTarget.dataset.index
    })
  },
  chooseTime(e){
    this.setData({
      timeIndex:e.currentTarget.dataset.index
    })
  },
  goTo(e){
    wx.navigateTo({
      url:e.currentTarget.dataset.path
    })
  },
  showTimeSelector() {
    this.setData({ showTimer: true });
  },
  closeTimeSelector(){
    this.setData({ showTimer: false });
  },
  onInput(event) {
    this.setData({
      currentDate: event.detail,
    });
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
