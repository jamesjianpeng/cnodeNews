//app.js
import formatDate from './utils/fomat-time.js';
import api from '/api/api.js';

App({
  fetchData({ 
    url, 
    method, 
    data, 
    needToken 
  }) {
    const header = {
      'content-type': 'application/json', // 默认值
      // 'accesstoken': needToken && method === 'POST' ? wx.getStorageSync('token') : ''
    };
    if (needToken) { // method 为 get 同时 需要 toke
      data = {
        accessToken: wx.getStorageSync('token'),
        ...data,
      }
    }
    return new Promise((resolve, reject) => {
      wx.request({
        url,
        method: method || 'GET',
        data: data || {},
        header,
        success (res) {
          resolve(res.data)
        },
        fail (err) {
          reject(err)
        }
      })
    })
  },
  getCreatedTime(createTime) {
    if (!createTime) return
    createTime = formatDate.getDate(+new Date(createTime), 'YYYY-MM-DD HH:mm:ss').date;
    return createTime
  },
  getToken () {
    return this.getStorage('token')
  },
  getStorage (key) {
    let data = ''
    try {
      data = wx.getStorageSync(key);
    } catch (e) {
      data = null
    }
    return data
  },
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    userInfo: null
  },
  api
})