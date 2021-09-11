const { fs } = require('fs');
const path = require('path');
// 1. 사용자가 원하는 폴더의 이름을 받아온다.

const folder = process.argv[2]; //작업하고자하는 폴더를 생성
const workingDir = path.join(os.homedir(), 'Pictures',folder)
if(!folder || !fs.existsSync(workingDir)) {
    console.error('Plz enter folder name in Pictures');
    return;
}

// 2. 그 폴더안에 video,captured,duplicated 폴더를 만든다.
const videoDir = path.join(workingDir,'videoDir');
const captureDir = path.join(workingDir,'captureDir');
const duplicatedDir = path.join(workingDir,'duplicatedDir');

console.log(videoDir);

// 3. 폴더안에 있는 파일들을 다 돌면서 해당하는 mp4/mov, png/aae, IMG_1234 (IMG_E1234)
