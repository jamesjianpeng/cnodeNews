/**
 * @file 用户详情
 * @author 彭涧
 */
const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    isToken: '',
    islogining: false,
    animation: {},
    data: {},
    isLoading: false,
    // 消息
    isFetchData: false,
    loadingItem: [{ loading: true }, { loading: true }, { loading: true }],
    noReadList: [],
    readList: [],
    publisTopic: [],
    repliesNews: [],
    name: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const { name } = options;
    this.setData({
      name,
    });
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
    this.setData({
      noReadList: this.data.loadingItem,
      readList: this.data.loadingItem
    })
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
    const { name }  = this.data
    const res = app.fetchData({
      url: `${app.api.user}${name}`
    }).then((res) => {
      const data = res.data;
      console.log(res)
      this.setData({
        data: data,
        publisTopic: data.recent_topics,
        repliesNews: data.recent_replies,
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
      const { detail: { login } } = event;
      if (login) {
        this.getIsToken();
        this.getData();
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
  },

  onTopicDetail (event) {
    const { detail: { id } } = event;
    wx.navigateTo({
      url: `/pages/topic/topic-detail/index?id=${id}`,
    })
  }
})
