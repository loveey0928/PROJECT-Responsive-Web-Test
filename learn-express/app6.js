var express = require('express'),
  http = require('http'),
  path = require('path');

var app = express();

app.use('/public', express.static(path.join(__dirname, 'public')));
app.use(function (req, res, next) {
  console.log('첫 번째 미들웨어에서 요청을 처리함.');

  res.end("<img src='/images/2020-08-0620.44.16.jpg' width='50%'");
  //   var userAgent = req.header('User-agent');
  //   var paramName = req.param('name');

  //   // res.writeHead('200', { 'Content-Type': 'text/html;charset=utf8' });
  //   // res.write('<h1>Express 서버에서 응답한 결과입니다.</h1>');
  //   // res.write('<div><p>User-Agent : ' + userAgent + '</p></div>');
  //   // res.write('<div><p>Param name : ' + paramName + '</p></div>');
  //   // console.log(paramName);
  //   // // res.end();

  //   // res.redirect(paramName);
});

http.createServer(app).listen(3000, function () {
  console.log('Express 서버가 3000번 포트에서 시작됨.');
});
