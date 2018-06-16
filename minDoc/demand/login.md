### home 默认的页面是 me
  1. onShow 之后就获取 token
     a. 有 token 则在 me 页面
     b. 无 token 则跳转到 login

  2. login 提供登录的入口，以及登录流程提示
     a. 登录成功之后，返回 me 页面
     b. 在其他页面中 login-tip 不展示

  3. 在其他页面（非 home 页面）也会去获取 token
     a. 有 token 不展示 login-tip
     b. 无 token 展示 login-tip
         - 可以通过 login-tip 跳转到 login 页面
