// components/me/me.js
const app = getApp();

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    info: {
      type: Object,
      value: {}
    },
    recentReplies: {
      type: Array,
      vaule: []
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    src: '',
    createTime: ''
  },

  attached() {
    this.getSrc(this.properties.info && this.properties.info.avatar_url);
    this.getTime(this.properties.info && this.properties.info.create_at);
  },

  /**
   * 组件的方法列表
   */
  methods: {
    getSrc(src) {
      this.setData({
        src: `url('${src}')`
      })
    },
    getTime (time) {
      const createTime = app.getCreatedTime(time)
      if (createTime) {
        this.setData({
          createTime
        })
      }
    }
  }
})
