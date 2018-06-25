const baseURL = 'https://cnodenewapi.pengjiandry.com';

const api = {
  topics: '/topics', // 主题列表
  topicDetail: '/topicDetail/', // 主题详情
  login: '/login', // 登录
  user: '/user/', // 用户信息
  messages: '/messages', // 信息列表
  messageCount: '/messageCount', // 信息数量
  collect: '/collect', // 收藏
  delCollect: '/delCollect' // 取消收藏
}

for (let key in api) {
  api[key] = `${baseURL}${api[key]}`
}

export default api
