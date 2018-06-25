// components/login/login-modal/login-modal.js
const app = getApp();

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
    token: '56e98e6f-d125-4098-bce8-11e5f48968a7',
    loginInfo: {},
    animationData: {},
    isLoading: false
  },

  created () {
  },

  attached () {
    this.createdAnimalCom();
    setTimeout(() => {
      this.smallToNormalAnimation()
    }, 200)
  },

  detached () {
  },

  /**
   * 组件的方法列表
   */
  methods: {
    createdAnimalCom () {
      var animation = wx.createAnimation({
        duration: 1000,
        timingFunction: 'ease',
      })
      this.animation = animation
    },

    smallToNormalAnimation () {
      this.animation.opacity(1).scale(1, 1).step({ duration: 300 })
      this.setData({
        animationData: this.animation.export()
      })
    },

    NormalToSmallAnimation () {
      this.animation.scale(.1, .1).opacity(0).step({ duration: 400 })
      this.setData({
        animationData: this.animation.export()
      })
    },

    input(event) {
      const { detail: { value: token } } = event;
      this.setData({
        token
      })
    },

    formSubmit () {
      this.login()
    },

    formReset () {
    },

    cancel () {
      this.cancelBefore()
    },

    cancelBefore (options) {
      this.NormalToSmallAnimation();
      setTimeout(() => {
        this.triggerEvent('onCancel', options);
      }, 400)
    },

    login () {
      this.setData({
        isLoading: true
      })
      const { token } = this.data
      if (!token) {
        wx.showToast({
          title: '请输入密钥',
          icon: 'none',
          duration: 1500
        })
        this.setData({
          isLoading: false
        })
        return
      }
      const res = app.fetchData({
        url: app.api.login,
        method: 'POST',
        data: {
          token
        }
      }).then((res) => {
        const loginInfo = res;
        this.setData({
          loginInfo
        })
        wx.setStorageSync('loginInfo', loginInfo);
        wx.setStorageSync('token', this.data.token);
        this.cancelBefore({login: true})
        this.setData({
          isLoading: false
        })
      }).catch((err) => {
        this.setData({
          isLoading: false
        })
        console.log(err)
      })
    }
  }
})
