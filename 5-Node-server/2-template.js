const http = require('http')
// const http2 = require('http2') //http2는 https가 적용됨으로 테스트단계에서는 사용권장 x
const fs = require('fs');
const ejs = require('ejs');

const name = 'jiwon';
const courses = [
    {name: 'hihi'},{name: 'jicho'}
]
const server = http.createServer((req,res) => {
   
    const url = req.url;
    res.setHeader('Content-Type', 'text/html')
    if(url === '/') {
        ejs.renderFile('./template/index.ejs', {name}).then(data => res.end(data))
    } else if(url === '/courses') {
        ejs.renderFile('./template/courses.ejs', {courses}).then(data => res.end(data))
    } 
    res.end()
})

server.listen(8080)