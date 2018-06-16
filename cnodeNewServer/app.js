const https = require('https');
const http = require('http');
var fs = require('fs');
const express = require('express');
const router = require('./router');
var bodyParser = require('body-parser');

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended : false}));

app.use('/', router);

let env = '';
process.argv.forEach(function (val) {
    if (val && val.includes('--env')) {
      if (val.includes('=')) {
        env = val.split('=')[1]
      }
    }
});

console.log(env);

if (Object.is(env, 'development')) {
  var httpServer = http.createServer(app);
  var PORT = 3001;
  httpServer.listen(PORT, function() {
      console.log('HTTP Server is running on: http://localhost:%s', PORT);
  });
} else {
  const HTTPSoptions = {
      key : fs.readFileSync('/etc/nginx/ssl/pengjiandry.com/_.pengjiandry.com.key'),   //读出 sytly 文件？
      cert : fs.readFileSync('/etc/nginx/ssl/pengjiandry.com/pengjiandry.com.crt'),   //同步读出 SSL 证书
  }
  var httpsServer = https.createServer(HTTPSoptions, app);
  var SSLPORT = 3000;
  httpsServer.listen(SSLPORT, function() {
      console.log('HTTPS Server is running on: https://localhost:%s', SSLPORT);
  });
}
