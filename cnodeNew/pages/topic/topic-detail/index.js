/**
 * @file 专题详情
 * @author 彭涧
 */
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

  getData() { // 数据获取
    const id = this.data.id;
    const res = app.fetchData({
      url: `${app.api.topicDetail}${id}`,
      needToken: true,
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
  },

  onTopicItem (event) {
    const { id, name } = event.detail;
    let url = ''
    if (id) url = `/pages/topic/topic-detail/index?id=${id}`;
    if (name) url = `/pages/user/index?name=${name}`;
    if (url) {
      wx.navigateTo({
        url,
      });
    }
  }
})