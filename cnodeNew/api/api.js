const baseURL = 'https://cnodenewapi.pengjiandry.com';

const api = {
  topics: '/topics',
  topicDetail: '/topicDetail/',
  login: '/login',
  user: '/user/'
}

for (let key in api) {
  api[key] = `${baseURL}${api[key]}`
}

export default api
