/**
 * @file 登录用户的基本信息
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
    recentReplies: [],
    data: {},
    isLoading: false,
    isUserLoading: true,
    // 消息
    isFetchData: false,
    loadingItem: [{ loading: true }, { loading: true }, { loading: true }],
    noReadList: [],
    readList: [],
    publisTopic: [],
    repliesNews: [],
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
      isUserLoading: true
    })
    if (!this.data.isToken) {
      this.setData({
        isLoading: false
      })
      return
    }
    const { loginname: name }  = app.getStorage('loginInfo') || {};
    const res = app.fetchData({
      url: `${app.api.user}${name}`
    }).then((res) => {
      const data = res.data;
      this.setData({
        data: data,
        publisTopic: data.recent_topics,
        repliesNews: data.recent_replies
      })
      this.setData({
        isUserLoading: false
      })
    }).catch((err) => {
      this.setData({
        isUserLoading: false
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
  getMsgList () {
    const res = app.fetchData({
      url: app.api.messages,
      needToken: true
    }).then((res) => {
      const data = res.data;
      this.setData({
        noReadList: data.hasnot_read_messages,
        readList: data.has_read_messages
      })
    }).catch((err) => {
      this.setData({
        isLoading: false
      })
    })
  },
  /* 消息 */
  ondrawerChange (event = {}) {
    const { detail } = event;
    if (this.data.isFetchData) return;
    const isFetchData = !this.data.isFetchData;
    this.setData({
      isFetchData,
    });
    this.getMsgList();
  },
  onTopicDetail (event) {
    const { detail: { id } } = event;
    wx.navigateTo({
      url: `/pages/topic/topic-detail/index?id=${id}`,
    });
  }
})
