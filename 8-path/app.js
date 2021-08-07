const path =  require('path');

// (mac ,linux,unix) : User/temp/myfile.js
// window : C:\\temp/myfile.js

console.log(__dirname); //현재 실행되고 있는 디렉토리 이름
console.log(__filename) // 현재 실핼되고 있는 디렉토리의 파일 이름

console.log(path.sep);//경로 구분자 -> /
console.log(path.delimiter)//환경변수 구분자 -> :

//basename
console.log(path.basename(__filename)) //app.js
console.log(path.basename(__filename,'js')) //app

//dirname
console.log(path.dirname(__filename));


//extenstion
console.log(path.extname(__filename));

//parse
const parsed = path.parse(__filename);
console.log(parsed);
