/**
 * @file 专题列表
 * @author 彭涧
 */
import api from '../../../api/api.js';
const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [],
    isLoading: false,
    islogining: false,
    isToken: true,
    page: 1,
    tab: '',
    more: true,
    limit: 5
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
  onReachBottom () {
    this.getData()
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage () {},

  getData () { // 数据获取

     
    /**
     * 请求还未回来
     */
    if (this.data.isLoading) return

    this.setData({
      isLoading: true,
    });

    const res = app.fetchData({
      url: api.topics,
      data: {
        page: this.data.page,
        tab: this.data.tab,
        limit: this.data.limit
      }
    }).then((res) => {
      const list = res.data || [];
      this.setData({
        more: this.data.limit <= list.length,
        list: this.data.list.concat(list),
        isLoading: false,
        page: ++this.data.page
      });
    }).catch((err) => {
      this.setData({
        isLoading: false,
        more: true
      });
    })
  },

  onTopicItem (event) {
    const { id, name } = event.detail;
    let url = '';
    if (id) url = `/pages/topic/topic-detail/index?id=${id}`;
    if (name) url = `/pages/user/index?name=${name}`;
    if (url) {
      wx.navigateTo({
        url,
      });
    }
  },

  getIsToken () {
    const token = app.getToken();
    this.setData({
      isToken: !!token,
    });
  },

  closeLoginModal (event = {}) {
    this.setData({
      islogining: false,
    });
    if (event.detail) {
      const { detail: { login } } = event;
      if (login) {
        this.getIsToken();
      }
    }
  },

  login () {
    this.loginBefore();
  },

  loginBefore () {
    this.setData({
      islogining: true,
    });
  }
})
