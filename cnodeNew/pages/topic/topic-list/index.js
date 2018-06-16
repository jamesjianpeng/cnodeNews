// pages/topic-list/topic-list.js
import api from '../../../api/api.js';
const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    array: [{
      message: 'foo',
    }, {
      message: 'bar'
    }],
    list: [],
    isLoading: false,
    islogining: false,
    isToken: true,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady () {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    console.log('onShow topics');
    this.getIsToken();
    this.getData();
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide () {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload () {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh () {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom () {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage () {},

  getData () { // 数据获取
    this.setData({
      isLoading: true
    })
    const res = app.fetchData({
      url: api.topics
    }).then((res) => {
      const list = res.data;
      this.setData({
        list
      })
      this.setData({
        isLoading: false
      })
    }).catch((err) => {
      this.setData({
        isLoading: false
      })
      console.log(err)
    })
  },

  onTopicDetail (event) {
    const { id } = event.detail
    wx.navigateTo({
      url: `/pages/topic/topic-detail/index?id=${id}`
    })
  },

  getIsToken () {
    const token = app.getToken()
    this.setData({
      isToken: !!token
    })
  },

  closeLoginModal (event = {}) {
    this.setData({
      islogining: false
    })
    if (event.detail) {
      const { detail: { login } } = event
      if (login) {
        this.getIsToken()
      }
    }
  },

  login () {
    this.loginBefore()
  },

  loginBefore () {
    this.setData({
      islogining: true
    })
  }
})
