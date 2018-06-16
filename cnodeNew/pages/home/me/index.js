// pages/home/me/index.js
const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    isToken: '',
    islogining: false,
    animation: {},
    recentReplies: [],
    data: {},
    isLoading: false
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
    this.getIsToken()
    this.setData({
      islogining: !this.data.isToken
    })
    this.getData()
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

  getData () {
    this.setData({
      isLoading: true
    })
    if (!this.data.isToken) {
      this.setData({
        isLoading: false
      })
      return
    }
    const { loginname: name }  = app.getStorage('loginInfo') || {};
    const res = app.fetchData({
      url: `${app.api.user}${name}`,
      needToken: true
    }).then((res) => {
      const data = res.data;
      console.log(res)
      this.setData({
        data: data,
        recentReplies: data.recent_replies
      })
      this.setData({
        isLoading: false
      })
    }).catch((err) => {
      this.setData({
        isLoading: false
      })
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
    });
    if (event.detail) {
      const { detail: { login } } = event
      if (login) {
        this.getIsToken()
      }
    }
  },

  login() {
    this.loginBefore()
  },

  loginBefore() {
    this.setData({
      islogining: true
    })
  }
})
