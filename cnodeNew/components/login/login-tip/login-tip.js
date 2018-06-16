// components/login/login/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    animationData: {},
  },

  attached () {
    this.createdAnimalCom();
    setTimeout(() => {
      this.topToNormalAnimation()
    }, 200)
  },

  // detached () {
  //   this.NormalToTopAnimation()
  // },

  /**
   * 组件的方法列表
   */
  methods: {
    login () {
      this.triggerEvent('onLogin')
    },

    createdAnimalCom() {
      var animation = wx.createAnimation({
        duration: 1000,
        timingFunction: 'ease',
      })
      this.animation = animation
    },

    topToNormalAnimation() {
      this.animation.opacity(1).translate(0, 0).step({ duration: 300 })
      this.setData({
        animationData: this.animation.export()
      })
    },

    NormalToTopAnimation() {
      this.animation.translate(0, -1).opacity(0).step({ duration: 2000 })
      this.setData({
        animationData: this.animation.export()
      })
    },
  }
})
