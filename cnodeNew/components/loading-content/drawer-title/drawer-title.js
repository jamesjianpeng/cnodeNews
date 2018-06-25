// components/drawer/drawer-item/drawer-item.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    sign: {
      type: String,
      value: ''
    },
    title: {
      type: String,
      value: ''
    },
    list: {
      type: Array,
      value: []
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    isShow: false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    showListContainer () {
      let { isShow, sign } = this.data;
      isShow = !isShow;
      this.setData({
        isShow,
      });
      this.triggerEvent('onChange', { isShow, sign });
    }
  }
})
