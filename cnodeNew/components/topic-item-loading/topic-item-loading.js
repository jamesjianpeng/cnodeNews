// components/TopicItem/TopicItem.js
import formatDate from '../../utils/fomat-time.js';
import { tabList } from '../../config/tab.js';

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
    logingText: '',
    loadingItemOne: false,
    loadingItemTwo: false,
    loadingItemThree: false
  },
  created() {},
  attached() {
    this.getLogingText(6, 50);
    this.getLoadingItemOne(0, 5);
  },
  ready() {},

  /**
   * 组件的方法列表
   */
  methods: {
    getLoadingItemOne(min, max) {
      let num = this.getRandomNum(min, max)
      num = Math.floor(num);
      this.setData({
        loadingItemOne: num > 3 ? true : false,
        loadingItemThree: num + 1 > 3 ? true : false,
        loadingItemTwo: num + 2 > 3 ? true : false
      })
    },
    getLogingText (min, max) {
      const num = this.getRandomNum(min, max)
      const loadingText = new Array(num).fill('匿').join('');
      this.setData({
        loadingText
      })
    },
    getRandomNum(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min)) + min;
    }
  }
})
