### 相同点
  1. 子组件要获取到父组件的的值，需要对父组件暴露参数，在父组件中进行赋值传参
  2. 子组件通知父组件的方式都是通过事件的方式进行处理
  3. 父组件（页面）使用 子组件的的方式也类型首先是创建一个 子组件，在父组件使用的话就需要先声明，最后才能在模版中使用

### 不同点
  1. 语法不一致
    a. 对父组件获取的值的 api
       - vue : props
       - 小程序: properties
    b. 子组件通知父组件语法
       - vue : this.$emit('eventName', arg1, arg2)
       - 小程序: this.triggerEvent('eventName', dataset)
    c. 在父组件（页面）使用子组件的
       - vue 直接 import 到当前页面，通过插入该页面的 components 中进行注册
       - 小程序则是通过插入到 page.json 中的 usingComponents 对象下

### 使用的体验
  1. vue 的语法更加强大
     a. 在模版中支持参数的传递，就像写 js 一样，小程序则需要其他的手段实现从模版中的数据在 脚本中获取，其中一种： data-xxx 的方式，然后获得的方式也略显复杂，是要从
        event 中的 dataset 中去获取
