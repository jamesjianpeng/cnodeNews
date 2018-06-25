const express = require('express');
const router = express.Router();
const axios = require('axios');

const baseURL = 'https://cnodejs.org/api/v1';

router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});

router.get('/', function(req, res) {
  res.send('hello world!');
});

// 主题列表
router.get('/topics', function(req, res) {
  const params = req.query
  axios.get(`${baseURL}/topics`, {
    params
  })
  .then((response) => {
    if (response.status === 200) {
      res.json(response.data);
    }
  })
  .catch(err => {
    console.log(err);
    res.send('error');
  })
});

// 主题详情
router.get('/topicDetail/:id', function(req, res) {
  const { accessToken: accesstoken } = req.query
  axios.get(`${baseURL}/topic/${req.params.id}`, {
    params: {
      accesstoken
    }
  })
  .then((response) => {
    if (response.status === 200) {
      res.json(response.data);
    }
  })
  .catch(err => {
    console.log(err);
    res.send('error');
  })
});

// 登录
router.post('/login', function(req, res) {
  const { token: accesstoken } = req.body;
  axios.post(`${baseURL}/accesstoken`, {
    accesstoken
  })
  .then((response) => {
    if (response.status === 200) {
      res.json(response.data);
    }
  })
  .catch(err => {
    // console.log(err);
    res.send('error');
  })
});

// 获取用户详情
router.get('/user/:name', function(req, res) {
  const { name } = req.params
  axios.get(`${baseURL}/user/${name}`)
  .then((response) => {
    if (response.status === 200) {
      res.json(response.data);
    }
  })
  .catch(err => {
    // console.log(err);
    res.send('error');
  })
});

// 获取评论的消息列表
router.get('/messages', function(req, res) {
  const { accessToken: accesstoken } = req.query
  axios.get(`${baseURL}/messages`, {
    params: {
      accesstoken
    }
  })
  .then((response) => {
    if (response.status === 200) {
      res.json(response.data);
    }
  })
  .catch(err => {
    // console.log(err);
    res.send('error');
  })
});

// 主题的取消点赞
router.post('/delCollect', function(req, res) {
  const { 
    accessToken: accesstoken,
    topicId: topic_id
  } = req.body
  axios.post(`${baseURL}/topic_collect/de_collect`, {
    accesstoken,
    topic_id
  })
  .then((response) => {
    if (response.status === 200) {
      res.json(response.data);
    }
  })
  .catch(err => {
    // console.log(err);
    res.send('error');
  })
});

// 主题的点赞
router.post('/collect', function(req, res) {
  const { 
    accessToken: accesstoken,
    topicId: topic_id
  } = req.body
  axios.post(`${baseURL}/topic_collect/collect`, {
    accesstoken,
    topic_id
  })
  .then((response) => {
    if (response.status === 200) {
      res.json(response.data);
    }
  })
  .catch(err => {
    // console.log(err);
    res.send('error');
  })
});

module.exports = router;
