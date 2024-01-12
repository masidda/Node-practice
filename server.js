// 서버를 띄우기 위한 기본 세팅 (express 라이브러리)
const express = require('express');
const app = express();

// listen(서버띄울 포트번호, 띄운 후 실행할 코드) => 8080 port에 서버 띄우기
app.listen(8080, function(){
    console.log('listening on 8080')
});

// 예제 : 누군가가 /pet으로 방문을 하면,
// pet 관련된 안내문을 띄우기

// req : 요청, res : 응답
app.get('/', function(req, res){
    // index.html 파일을 서버에 보내기
    res.sendFile(__dirname + '/page/html/index.html')
});

app.get('/about', function(req, res){
    res.sendFile(__dirname + '/page/html/about.html')
});

app.get('/works', function(req, res){
    res.sendFile(__dirname + '/page/html/works.html')
});
