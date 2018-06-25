/**
 * @file 用户产生的数据，新建的主题，回复的消息，已读和未读的消息
 *       using page/user | pages/me
 * @author 彭涧
 */
const app = getApp();

Component({
  /**
   * 组件的属性列表
   */
  properties: {
     index: {
       type: Number,
       value: -1
     },
     item: {
       type: Object,
       value: {},
       observer (newVal) {
          this.getCreatedTime(newVal);
       }
     }
  },

  /**
   * 组件的初始数据
   */
  data: {
    createTime: ''
  },

  attached () {
    this.getCreatedTime();
  },

  /**
   * 组件的方法列表
   */
  methods: {

    /**
     * 在不同的接口给的数据结构不一致
     * 
     * @params {String} id
     *  - api: message  主题列表中每一项 item.reply.create_at
     *  - api: user 用户自己创建的主题 item.last_reply_at
     * 
     */

    getCreatedTime () {
      let messageTime = this.properties.item && this.properties.item.reply && this.properties.item.reply.create_at;
      let userTime = this.properties.item && this.properties.item.last_reply_at
      const createTime = app.getCreatedTime(messageTime || userTime);
      if (createTime) {
        this.setData({
          createTime,
        });
      }
    },

    getTopicDetail () {
      /**
       * 在不同的接口给的数据结构不一致
       * 
       * @params {String} id
       *  - api: message  主题列表中每一项 item.topic.id
       *  - api: user 用户自己创建的主题 item.id
       * 
       * @params {String} title
       *  - api: message  主题列表中每一项 item.topic.title
       *  - api: user 用户自己创建的主题 item.title
       */
      let { topic, id } = this.properties.item
      id = topic ? topic.id : id 
      this.triggerEvent('onTopicDetail', { id })
    }
  }
})
