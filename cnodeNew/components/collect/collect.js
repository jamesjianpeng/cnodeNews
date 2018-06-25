// components/collect/collect.js
const app = getApp();

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    isCollect: {
      type: Boolean,
      value: false
    },
    topicId: {
      type: String,
      value: ''
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    collectStatus: false,
  },

  attached () {
    this.changeCollectData(this.properties.isCollect);
  },

  /**
   * 组件的方法列表
   */
  methods: {

    changeCollectData (collectStatus) {
      this.setData({
        collectStatus,
      });
    },

    collect () {
      this.changeCollectStatus();
    },

    changeCollectStatus () {
      const collectKey = this.data.collectStatus ? 'delCollect' : 'collect';
      const { topicId } = this.properties;
      app.fetchData({
        url: app.api[collectKey],
        method: 'POST',
        needToken: true,
        data: {
          topicId,
        },
      }).then((res) => {
        const { success } = res
        if (success) {
          this.changeCollectData(!this.data.collectStatus)
          this.triggerEvent('onCollect', { collectKey });
        }
      }).catch((err) => {
        console.log(err);
      })
    }
  }
})
