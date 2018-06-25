// components/avatar/avatar.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    src: {
      type: String,
      value: ''
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    url: ''
  },

  attached () {
     this.setData({
       url: `url('${this.properties.src}')`
     })
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
