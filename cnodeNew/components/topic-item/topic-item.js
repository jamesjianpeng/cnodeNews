// components/TopicItem/TopicItem.js
import formatDate from '../../utils/fomat-time.js';
import { tabList } from '../../config/tab.js';

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    index: Number,
    item: Object,
    sign: {
      type: String,
      value: 'list'
    }
  },
  
  /**
   * 组件的初始数据
   */
  data: {
    createTime: '',
    tab: '',
    good: '',
    author: {}
  },
  created() {},
  attached() {
    this.handlerValue()
  },
  ready() {},

  /**
   * 组件的方法列表
   */
  methods: {
    handlerValue () {
      const { item } = this.properties
      console.log(item)
      this.getCreatedTime(item && item.create_at); // format 创建时间
      this.getTab(item && item.tab, item && item.good); // format tab
      this.getAuthor(item && item.author); // 作者
    },
    getCreatedTime (createTime) {
      if (!createTime) return
      createTime = formatDate.getDate(+new Date(createTime), 'YYYY-MM-DD HH:mm:ss').date;
      this.setData({
        createTime,
      })
    },
    getTab (tab, good) {
      this.setData({
        good: good ? tabList['good'] : '',
        tab: tab ? tabList[tab] : ''
      })
    },
    getAuthor (author) {
      this.setData({
        author: author || {}
      })
    },
    getTopicDetail() {
      const detail = {
        id: this.properties.item.id
      }
      this.triggerEvent('onTopicDetail', detail)
    }
  }
})
