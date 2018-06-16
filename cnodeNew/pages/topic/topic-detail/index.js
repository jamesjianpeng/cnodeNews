// pages/topic-detail/topic-detail.js
// const Towxml = require('/towxml/main'); 
const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    loading: true,
    value: {},
    id: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.setData({
      id: options.id
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow(option) {
    console.log(app.api)
    this.getData()
    // this.setData({
    //   id: option.id
    // })
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
  
  },

  getData() { // 数据获取
    const id = this.data.id
    console.log(id);
    const res = app.fetchData({
      url: `${app.api.topicDetail}${id}`
    }).then((res) => {
      const value = res.data;
      value.content = value.content.replace(/\<img/gi, '<img style="width:100%;height:auto" ')
      this.setData({
        value
      })
      this.setData({
        loading: false
      })
    }).catch((err) => {
      console.log(err)
    })
  }
})