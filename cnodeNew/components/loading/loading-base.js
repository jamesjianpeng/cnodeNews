// components/loading/loading-base.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    isloading: {
      type: Boolean,
      value: false
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    isLoading: false
  },

  ready () {
    console.log('attached', this.properties)
    this.setData({
      isLoading: this.properties.isloading
    })
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
