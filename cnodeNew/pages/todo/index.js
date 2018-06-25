// pages/todo/todo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    value: '',
    list: [],
    exampleItem: {
      isSelect: false,
      text: 'example text',
      isComplate: false,
      sign: true
    },
    scrollList: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
     console.log('onLoad');
     this.setData({
       scrollList: new Array(30)
     })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log('onReady');
    if (!this.data.list.lenght) {
      const list = this.data.list.concat(this.data.exampleItem)

      this.setData({
        list
      })
    }
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log('onShow');
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log('onHide');
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log('onUnload');
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    console.log('onPullDownRefresh');
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
    console.log('onShareAppMessage');
  },

  upper () {
    console.log('10 upper')
  },

  lower () {
    console.log('10 lower')
    const list = new Array(10)
    this.setData({
      scrollList: this.data.scrollList.concat(list)
    })
  },

  scroll () {
    console.log('scroll')
  },
  
  del (event) {
    console.log(event);
    const { detail: { index, item } } = event;
    const list = this.data.list.filter((listItem, listIndex) => {
      if (index !== listIndex) return listItem
    })
    this.setData({
      list
    })
  },

  add () {
    this.push(this.data.value)
    this.setData({
      value: ''
    })
  },

  push(text) {
    let list = JSON.parse(JSON.stringify(this.data.list))
    let sign = list[0] && list[0].sign
    if (sign) list.shift()
    list = list.concat({
      isSelect: false,
      isComplate: false,
      text
    })

    this.setData({
      list
    })
    console.log(this.data.list)
  },

  input (event) {
    const { detail: { value } } = event;
    this.setData({
      value
    })
  }
})