// components/me/me.js
import formatDate from '../../utils/fomat-time.js';

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
    this.getSrc(this.properties.info && this.properties.info.avatar_url)
    this.getCreatedTime(this.properties.info && this.properties.info.create_at)
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
    getCreatedTime(time) {
      if (!time) return
      const createTime = formatDate.getDate(+new Date(time), 'YYYY-MM-DD HH:mm').date;
      this.setData({
        createTime
      })
    }
  }
})
