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
  axios.get(`${baseURL}/topics`)
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
  axios.get(`${baseURL}/topic/${req.params.id}`)
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
  console.log(accesstoken);
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

module.exports = router;
