const fs = require('fs');

const readStream =  fs.createReadStream('./file.txt', {
    highWaterMark: 8,// default 64
    encoding: 'utf-8'
});

readStream.on('data', chunk => {
    console.log(chunk)
})

readStream.on('error',error => console.error);
