// components/user-item/user-item.js
import formatDate from '../../utils/fomat-time.js';

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    src: {
      type: String,
      value: ''
    },
    name: {
      type: String,
      value: ''
    },
    createTime: {
      type: String,
      value: ''
    }
  },
  externalClasses: ['external-class']
})
