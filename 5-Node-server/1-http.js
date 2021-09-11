const http = require('http')
// const http2 = require('http2') //http2는 https가 적용됨으로 테스트단계에서는 사용권장 x
const fs = require('fs');
const server = http.createServer((req,res) => {
    console.log('incoming..');
    console.log(req.headers);
    console.log(req.httpVersion);
    console.log(req.method);
    const url = req.url;
    res.setHeader('Content-Type', 'text/html')
    if(url === '/') {
        fs.createReadStream('./html/index.html').pipe(res);
    } else if(url === '/courses') {
        fs.createReadStream('./html/courses.html').pipe(res);
    } else {
        res.write('not found')
    }
    res.end()
})

server.listen(8080)