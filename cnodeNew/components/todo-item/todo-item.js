// components/TodoItem/TodoItem.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    item: { // 属性名
      type: Object, // 类型（必填），目前接受的类型包括：String, Number, Boolean, Object, Array, null（表示任意类型）
      value: {}, // 属性初始值（可选），如果未指定则会根据类型选择一个
    },
    index: Number
  },
  created () {
    console.log('created component');
  },
  attached() {
    console.log('attached component');
  },
  ready() {
    console.log('ready component');
  },
  moved() {
    console.log('moved component');
  },
  // created	Function	否	组件生命周期函数，在组件实例进入页面节点树时执行，注意此时不能调用 setData
  // attached	Function	否	组件生命周期函数，在组件实例进入页面节点树时执行
  // ready	Function	否	组件生命周期函数，在组件布局完成后执行，此时可以获取节点信息（使用 SelectorQuery ）
  // moved	Function	否	组件生命周期函数，在组件实例被移动到节点树另一个位置时执行
  // detached Function 否 组件生命周期函数，在组件实例被从页面节点树移除时执行

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    del (event) {
      console.log(event);
      const { currentTarget: { dataset } } = event;
      this.triggerEvent('onDel', dataset)
    },
  }
})
