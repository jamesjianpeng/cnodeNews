// components/collect/collect.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    isCollect: {
      type: Boolean,
      value: false
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    collect () {
      console.log('collect');
      this.triggerEvent('onCollect', detail)
    }
  }
})
